import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contatore',
  templateUrl: './contatore.component.html',
  styleUrls: ['./contatore.component.css']
})
export class ContatoreComponent {
  @Input() datoDalParente:string = '';
  count: number = 0;

  aumenta(): void{
    this.count++;
  }

  decrementa(): void{
    this.count--;
  }

  reset(): void{
    this.count = 0;
  }

}
