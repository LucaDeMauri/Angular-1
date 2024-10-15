import { Component } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  num1:number = 0;
  num2:number = 0;
  risultato:number = 0

  somma(){
    this.risultato = this.num1 + this.num2;
    
  }
}
