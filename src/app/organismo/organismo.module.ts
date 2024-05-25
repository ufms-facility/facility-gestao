import { OrganismoCreateComponent } from './organismo-create/component/organismo-create.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganismoListComponent } from './organismo-list/organismo-list.component';
@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   declarations: [
      OrganismoCreateComponent,
      OrganismoListComponent
   ],
   exports: [
      OrganismoCreateComponent
   ],
})
export class OrganismoModule { }