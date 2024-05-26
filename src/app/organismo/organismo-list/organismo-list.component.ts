import { Component, OnInit } from '@angular/core';
import { OrganismoService } from '../organismo.service';
import { Organismo } from '../models/organismo.model';

@Component({
  selector: 'app-organismo-list',
  templateUrl: './organismo-list.component.html',
  styleUrl: './organismo-list.component.css'
})

export class OrganismoListComponent implements OnInit {
  constructor(private organismoService: OrganismoService) { }
  organismos: Organismo[] = [];

  ngOnInit() {
    this.organismoService.listarOrganismos().subscribe(dados =>
      this.organismos = dados
    )
  }
}
