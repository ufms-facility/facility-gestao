import { OrganismoCreateComponent } from './organismo-create/component/organismo-create.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   declarations: [
      OrganismoCreateComponent
   ],
   exports: [
      OrganismoCreateComponent
   ],
})
export class OrganismoModule { }