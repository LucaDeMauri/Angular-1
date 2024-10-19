import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  utente={
    nome: '',
    cognome: '',
    email: '',
    password: ''
  };

  
  onSubmit(form: NgForm){
    console.log('Form: ', form);

    if (form.valid){
      console.log(this.utente);
    }
    else{
      console.log("il form non è valido");
    }
  }
}
