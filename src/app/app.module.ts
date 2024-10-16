import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { Esercizio1Component } from './components/esercizio1/esercizio1.component';
import { ContatoreComponent } from './components/contatore/contatore.component';
import { SommaComponent } from './components/somma/somma.component';
import { GestioneRuoloComponent } from './components/gestione-ruolo/gestione-ruolo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    Esercizio1Component,
    ContatoreComponent,
    SommaComponent,
    GestioneRuoloComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
