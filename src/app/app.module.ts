import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule


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
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';


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
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DettagliComponent,
    PageNotFoundComponent,
    FormUserComponent,
    LoginComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
