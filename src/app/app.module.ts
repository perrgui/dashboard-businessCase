import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { RechercheDateComponent } from './dash-board/recherche-date/recherche-date.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CammenbertComponent } from './dash-board/cammenbert/cammenbert.component';
import { DonneesGroupComponent } from './dash-board/donnees-group/donnees-group.component';
import { ListeProduitComponent } from './dash-board/liste-produit/liste-produit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    RechercheDateComponent,
    DashBoardComponent,
    CammenbertComponent,
    DonneesGroupComponent,
    ListeProduitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
