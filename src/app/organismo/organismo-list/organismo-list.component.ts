import { Component, OnInit } from '@angular/core';
import { OrganismoService } from '../organismo.service';
import { Organismo } from '../models/organismo.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organismo-list',
  templateUrl: './organismo-list.component.html',
  styleUrl: './organismo-list.component.css'
})

export class OrganismoListComponent implements OnInit {
  constructor(private organismoService: OrganismoService, private router: Router, private route: ActivatedRoute) { }
  organismos: Organismo[] = [];
  deleteMessage = false;

  ngOnInit() {
    this.organismoService.listarOrganismos().subscribe(dados =>
      this.organismos = dados
    )
  }

  delete(id?: number) {
    this.organismoService.delete(id!).subscribe({
      next: dado => {
        console.log(dado);
        this.deleteMessage = true;
        this.organismoService.listarOrganismos().subscribe(dados => {
          this.organismos = dados;
        });
      },
      error: error => console.log(error)
    });
  }

  updateOrganismo(id?: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  detalheOrganismo(id?: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
