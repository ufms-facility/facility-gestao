import { Component } from "@angular/core";
import { OrganismoService } from "../../organismo.service";
import { Organismo } from "../../models/organismo.model";

@Component({
    selector: 'gc-organismo-create',
    templateUrl: './organismo-create.component.html'
})

export class OrganismoCreateComponent {
    especie!: string;
    origem!: string;
    familia!: string;
    nomeCientifico!: string;
    constructor(private organismoService: OrganismoService) { }
    save() {
        const organismo: Organismo = {
            especie: this.especie,
            origem: this.origem,
            familia: this.familia,
            nomeCientifico: this.nomeCientifico
        };
        this.organismoService.save(organismo).subscribe((res) => {
            console.log(res);
        },
            error => console.log(error));
    }
}