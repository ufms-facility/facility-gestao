import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { OrganismoCreateComponent } from './organismo/organismo-create/component/organismo-create.component';
import { OrganismoListComponent } from './organismo/organismo-list/organismo-list.component';
import { OrganismoEditComponent } from './organismo/organismo-edit/organismo-edit.component';
import { OrganismoDetailComponent } from './organismo/organismo-detail/organismo-detail.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home',
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'novo-organismo',
  component: OrganismoCreateComponent
},
{
  path: 'lista-organismos',
  component: OrganismoListComponent
},
{
  path: 'edit-organismo/:id',
  component: OrganismoEditComponent
},
{
  path: 'detail-organismo/:id',
  component: OrganismoDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
