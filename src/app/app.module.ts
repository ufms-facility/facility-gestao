import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganismoModule } from './organismo/organismo.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { ResultadosComponent } from './componentes/pesquisa/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    PesquisaComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganismoModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
