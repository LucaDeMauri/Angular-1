import { Component } from '@angular/core';


@Component({
  selector: 'app-somma',
  templateUrl: './somma.component.html',
  styleUrls: ['./somma.component.css']
})
export class SommaComponent {
  num1:number = 0;
  num2:number = 0;
  risultato:number = 0

  somma(){
    this.risultato = this.num1 + this.num2;
    
  }
}
