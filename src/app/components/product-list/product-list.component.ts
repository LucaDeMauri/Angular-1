import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() prodotto!: { nome: string; prezzo: string };
  @Output() messaggioInviato: EventEmitter<string> = new EventEmitter<string>();

  inviaMessaggio() {
    const messaggio = 'spero vivamente che funzioni';
    this.messaggioInviato.emit(messaggio);
  }
}
