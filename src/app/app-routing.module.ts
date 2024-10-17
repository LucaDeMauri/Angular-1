import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Esercizio1Component } from './components/esercizio1/esercizio1.component';
import { UserComponent } from './components/user/user.component';
import { SommaComponent } from './components/somma/somma.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { GestioneRuoloComponent } from './components/gestione-ruolo/gestione-ruolo.component';
import { ContatoreComponent } from './components/contatore/contatore.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'esercizio1', component: Esercizio1Component },
  { path: 'user', component: UserComponent},
  { path: 'somma', component: SommaComponent},
  { path: 'contatore', component: ContatoreComponent},
  { path: 'hello-world', component: HelloWorldComponent},
  { path: 'gestione-ruolo', component: GestioneRuoloComponent}, 
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'dettagli/:id', component: DettagliComponent},
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
