import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Aggiungi questo

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { Esercizio1Component } from './components/esercizio1/esercizio1.component';
import { ContatoreComponent } from './components/contatore/contatore.component';
import { SommaComponent } from './components/somma/somma.component';
import { GestioneRuoloComponent } from './components/gestione-ruolo/gestione-ruolo.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    Esercizio1Component,
    ContatoreComponent,
    SommaComponent,
    GestioneRuoloComponent,
    HomePageComponent,
    ProductListComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
