import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organismo } from '../models/organismo.model';
import { OrganismoService } from '../organismo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'gc-organismo-detail',
  templateUrl: './organismo-detail.component.html',
  styleUrls: ['./organismo-detail.component.css'],
})
export class OrganismoDetailComponent implements OnInit {
  public id?: number;
  organismo?: Organismo;

  constructor(
    private organismoService: OrganismoService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.organismoService.buscarPorId(this.id!).subscribe({
      next: (dado) => {
        this.organismo = dado;
      },
      error: (error) => console.log(error),
    });
  }

  back(): void {
    this.location.back();
  }
}
