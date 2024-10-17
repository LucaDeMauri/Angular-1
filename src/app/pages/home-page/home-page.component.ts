import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  messaggio: string = 'Ciao dal parent';

  prodottoSelezionato = {
    nome: '',
    prezzo: '',
  };

  prodotti = [
    { nome: 'coca cola', prezzo: '2.50' },
    { nome: 'fanta', prezzo: '2.50' },
    { nome: 'pepsi', prezzo: '2.50' },
    { nome: 'sprite', prezzo: '2.50' },
    { nome: 'carne', prezzo: '5' },
    { nome: 'acqua', prezzo: '1' },
    { nome: 'gelato', prezzo: '5' },
    { nome: 'birra', prezzo: '3' },
    { nome: 'pasta', prezzo: '5' },
  ];

  messaggioRicevuto: string = '';

  selectProduct(prodotto: any) {
    this.prodottoSelezionato = prodotto;
  }

  riceviMessaggio(messaggio: string) {
    this.messaggioRicevuto = messaggio;
  }
}
