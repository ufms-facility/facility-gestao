import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { OrganismoCreateComponent } from './organismo/organismo-create/organismo-create.component';
import { OrganismoListComponent } from './organismo/organismo-list/organismo-list.component';
import { OrganismoEditComponent } from './organismo/organismo-edit/organismo-edit.component';
import { OrganismoDetailComponent } from './organismo/organismo-detail/organismo-detail.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { PesquisaComponent } from './componentes/pesquisa/pesquisa.component';
import { ResultadosComponent } from './componentes/pesquisa/resultados/resultados.component';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
  data: {
    name: 'Início'
  },
},
{
  path: 'entrar',
  component: HomeComponent
},
{
  path: 'cadastrar',
  component: HomeComponent
},
{
  path: 'pesquisa',
  component: PesquisaComponent,
  data: {
    name: 'Pesquisar'
  }
},
{
  path: 'pesquisa/resultado',
  component: ResultadosComponent,
},
{
  path: 'organismo/:id',
  component: OrganismoDetailComponent
},
{
  path: 'transcriptomica',
  component: HomeComponent,
  data: {
    name: 'Transcriptômica'
  }
},
{
  path: 'proteomica',
  component: HomeComponent,
  data: {
    name: 'Proteômica'
  }
},
{
  path: 'genomica',
  component: HomeComponent,
  data: {
    name: 'Genômica'
  }
},
{
  path: 'predicao-de-peptideos',
  component: HomeComponent,
  data: {
    name: 'Predição de Peptídeos'
  }
},
{
  path: 'missao',
  component: HomeComponent,
  data: {
    name: 'Missão'
  }
},
{
  path: 'quem-somos',
  component: HomeComponent,
  data: {
    name: 'Quem Somos'
  }
},
{
  path: 'faq',
  component: HomeComponent,
  data: {
    name: 'FAQ'
  }
},
{
  path: 'fotos',
  component: HomeComponent,
  data: {
    name: 'Fotos'
  }
},
{
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: 'organismo',
      component: OrganismoListComponent
    },
    {
      path: 'organismo/novo',
      component: OrganismoCreateComponent
    },
    {
      path: 'organismo/edit/:id',
      component: OrganismoEditComponent
    },
    {
      path: 'organismo/:id',
      component: OrganismoDetailComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
