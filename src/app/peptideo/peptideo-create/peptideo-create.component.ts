import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PeptideoService } from '../peptideo.service';
import { Peptideo } from '../models/peptideo.model';

@Component({
  selector: 'app-peptideo-create',
  templateUrl: './peptideo-create.component.html',
  styleUrl: './peptideo-create.component.css'
})
export class PeptideoCreateComponent {
  peptideoForm!: FormGroup;
  submitted = false;

  constructor(
    private peptideoService: PeptideoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.peptideoForm = this.formBuilder.group({
      peptideo: new FormControl('', [Validators.required]),
      quantAas: new FormControl('', [Validators.required]),
      tipoPeptideo: new FormControl('', [Validators.required]),
      sequencia: new FormControl('', [Validators.required]),
      estruturaTridimensional: new FormControl('', [Validators.required]),
      massaMolecular: new FormControl('', [Validators.required]),
      impediEsterico: new FormControl('', [Validators.required]),
      hidrofobocidade: new FormControl('', [Validators.required]),
      pontoIsoeletrico: new FormControl('', [Validators.required]),
      hidropatia: new FormControl('', [Validators.required]),
      anfipaticidade: new FormControl('', [Validators.required]),
      hidrofilicidade: new FormControl('', [Validators.required]),
      cargaLiquiTotal: new FormControl('', [Validators.required]),
      indiceBoman: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      organismo: new FormControl('', [Validators.required]),
    });
  }

  save() {
    if (this.peptideoForm.valid) {
      const peptideo = this.peptideoForm.getRawValue() as Peptideo;
      this.peptideoService.save(peptideo).subscribe(
        () => (this.submitted = true),
        (error) => console.log(error)
      );
    }
  }

  addPeptideoForm() {
    this.submitted = false;
    this.peptideoForm.reset();
  }
}
