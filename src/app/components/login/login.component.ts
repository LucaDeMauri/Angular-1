import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder, // Iniettare FormBuilder per costruire il form
    private authService: AuthService,
    private router: Router
  ) {
    // Definizione del Reactive Form
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], // Username obbligatorio
      password: ['', [Validators.required]], // Password obbligatoria
    });
  }

  // Metodo chiamato al submit del form
  onSubmit(): void {
    // Controlla se il form è valido
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Effettua il login tramite AuthService
      if (this.authService.login(username, password)) {
        // Reindirizza alla pagina dell'admin se il login è valido
        this.router.navigate(['/admin']);
      } else {
        this.loginError = 'Invalid username or password'; // Mostra un messaggio di errore
      }
    }
  }
}
