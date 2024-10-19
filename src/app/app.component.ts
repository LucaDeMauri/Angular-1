import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular-1';
  constructor(private route: Router){
    this.route.navigate(['home']);
    this.route.navigate(['about']);
    this.route.navigate(['contact']);
    
  }
  
}
