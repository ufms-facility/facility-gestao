import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organismo } from '../models/organismo.model';
import { OrganismoService } from '../organismo.service';

@Component({
  selector: 'gc-organismo-detail',
  templateUrl: './organismo-detail.component.html',
  styleUrls: ['./organismo-detail.component.css']
})

export class OrganismoDetailComponent implements OnInit {
  public id?: number;
  organismo?: Organismo;

  constructor(private organismoService: OrganismoService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.organismoService.buscarPorId(this.id!).subscribe({
      next: dado => {
        this.organismo = dado;
      },
      error: error => console.log(error)
    });
  }
}