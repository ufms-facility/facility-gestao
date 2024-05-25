import { Component } from "@angular/core";
import { OrganismoService } from "../../organismo.service";
import { Organismo } from "../../models/organismo.model";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'gc-organismo-create',
    templateUrl: './organismo-create.component.html'
})

export class OrganismoCreateComponent {
    organismoForm!: FormGroup;
    submitted = false;
    constructor(
        private organismoService: OrganismoService,
        private formBuilder: FormBuilder) { }
    ngOnInit(): void {
        this.organismoForm = this.formBuilder.group({
            especie: new FormControl('', [Validators.required]),
            origem: new FormControl('', [Validators.required]),
            familia: new FormControl('', [Validators.required]),
            nomeCientifico: new FormControl('', [Validators.required]),
        });
    }
    save() {
        if (this.organismoForm.valid) {
            const organismo = this.organismoForm.getRawValue() as Organismo;
            this.organismoService.save(organismo).subscribe(
                () => (this.submitted = true),
                (error) => console.log(error)
            );
        }
    }
    addOrganismoForm() {
        this.submitted = false;
        this.organismoForm.reset();
    }
}