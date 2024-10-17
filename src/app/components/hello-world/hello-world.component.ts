import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  isLoading: boolean = true;
  fruits = ['mela', 'banana', 'arancia'];
  persone = [
    { nome: 'Luca', eta: '18' },
    { nome: 'Lorenzo', eta: '20' },
    { nome: 'Marco', eta: '20' },
  ];

  paesi = [
    'Italia',
    'Francia',
    'Germania',
    'Spagna',
    'Grecia',
    'Svizzera',
    'Portogallo',
    'Polonia',
    'Finlandia',
    'Slovenia',
  ];

  prodotti = [
    { prodotto: 'coca cola', prezzo: '2.50 euro' },
    { prodotto: 'fanta', prezzo: '2.50 euro' },
    { prodotto: 'pepsi', prezzo: '2.50 euro' },
    { prodotto: 'sprite', prezzo: '2.50 euro' },
    { prodotto: 'carne', prezzo: '5 euro' },
    { prodotto: 'acqua', prezzo: '1 euro' },
    { prodotto: 'gelato', prezzo: '5 euro' },
    { prodotto: 'birra', prezzo: '3 euro' },
    { prodotto: 'pasta', prezzo: '5 euro' },
  ];

  paeseSelezionato: string = '';

  caricamento(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 7000);
  }
  ngOnInit(): void {
    this.caricamento();
  }
}
