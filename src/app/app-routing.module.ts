import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { OrganismoCreateComponent } from './organismo/organismo-create/component/organismo-create.component';

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
  path: 'novo-curso',
  component: OrganismoCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
