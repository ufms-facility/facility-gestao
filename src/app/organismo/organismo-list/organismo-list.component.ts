import { Component } from '@angular/core';
import { OrganismoService } from '../organismo.service';
import { Organismo } from '../models/organismo.model';

@Component({
  selector: 'app-organismo-list',
  templateUrl: './organismo-list.component.html',
  styleUrl: './organismo-list.component.css'
})

export class OrganismoListComponent {
  constructor(private organismoService: OrganismoService) { }
  organismos: Organismo[] = [];
}
