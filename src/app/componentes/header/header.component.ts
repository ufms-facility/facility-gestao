import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  routes: { path: string | undefined; name: string; }[] = [];
  admin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.routes = this.router.config
        .filter(route => route.data && route.data['name'])
        .map(route => ({ path: route.path, name: route.data!['name'] }));

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.admin = this.router.url.startsWith('/admin');
    });
  }
}
