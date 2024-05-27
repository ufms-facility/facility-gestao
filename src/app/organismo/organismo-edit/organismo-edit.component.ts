import { Component } from '@angular/core';
import { Organismo } from '../models/organismo.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrganismoService } from '../organismo.service';

@Component({
  selector: 'app-organismo-edit',
  templateUrl: './organismo-edit.component.html',
  styleUrl: './organismo-edit.component.css'
})

export class OrganismoEditComponent {
  public id?: number;
  organismo?: Organismo;
  organismoForm!: FormGroup;
  updated = false;

  constructor(private route: ActivatedRoute,
    private organismoService: OrganismoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.organismoService.buscarPorId(this.id!).subscribe({
      next: dado => {
        this.organismo = dado;
      },
      error: error => console.log(error)
    });
    this.createForm();
  }

  createForm() {
    this.organismoForm = this.formBuilder.group({
      id: new FormControl(this.id),
      especie: new FormControl(this.organismo?.especie),
      familia: new FormControl(this.organismo?.familia),
      origem: new FormControl(this.organismo?.origem),
      nomeCientifico: new FormControl(this.organismo?.nomeCientifico),
    });
  }

  update() {
    if (this.organismoForm.valid) {
      this.organismoService.update(this.id, this.organismo).subscribe({
        next: () => (this.updated = true),
        error: (error) => console.log(error)
      });
    }
  }
}
