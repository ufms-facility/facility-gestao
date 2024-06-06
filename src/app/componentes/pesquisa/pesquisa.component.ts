import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css',
})
export class PesquisaComponent {
  itemDePesquisa = new FormControl('nomeCientifico');
  especificacao = new FormControl('');

  itensDePesquisa = [
    { value: 'nomeCientifico', label: 'Nome Científico' },
    { value: 'especie', label: 'Espécie' },
    { value: 'origem', label: 'Origem' },
    { value: 'familia', label: 'Família' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    const params = {
      [this.itemDePesquisa.value as string]: this.especificacao.value,
    };

    this.router.navigate(['./resultado'], { queryParams: params, relativeTo: this.route });
  }
}
