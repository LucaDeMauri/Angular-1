import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  templateUrl: './esercizio1.component.html',
  styleUrls: ['./esercizio1.component.css']
})
export class Esercizio1Component {
  nome: string = 'Luca';
  cognome: string = "De Mauri"
  eta: number = 18
  hobby: string = ''
  img:string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  isDisabled: boolean = true;
  count: number =0;
  
  enableButton(): void{
    if(this.hobby !== ''){
      this.isDisabled = false;
    }
    else{
      this.isDisabled = true;
    }
  }

  saluta(): void{
    alert('Ciao');
  }

  onButtonClick(): void{
    this.count++;
  }

  
}
