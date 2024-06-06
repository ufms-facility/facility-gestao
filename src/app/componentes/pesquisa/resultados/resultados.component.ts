import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganismoService } from '../../../organismo/organismo.service';
import { Organismo } from '../../../organismo/models/organismo.model';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css',
})
export class ResultadosComponent implements OnInit {
  resultados: Array<Organismo> = [];

  constructor(
    private route: ActivatedRoute,
    private organismoService: OrganismoService,
    private router: Router
  ) {}

  ngOnInit() {
    let queryParams = {};
    this.route.queryParams.subscribe((params) => (queryParams = params));

    this.organismoService
      .query(queryParams)
      .subscribe((resultados) => resultados.forEach((r) => this.resultados.push(r)));
  }

  detalheOrganismo(id?: number) {
    this.router.navigate(['/organismo', id]);
  }
}
