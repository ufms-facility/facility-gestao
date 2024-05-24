import { OrganismoCreateComponent } from './organismo-create/component/organismo-create.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
@NgModule({
 imports: [
 CommonModule,
 FormsModule
 ],
 declarations: [
    OrganismoCreateComponent
 ],
 exports: [
    OrganismoCreateComponent
 ],
})
export class OrganismoModule {}