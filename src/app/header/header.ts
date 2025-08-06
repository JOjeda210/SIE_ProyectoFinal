import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private router: Router) {}

  get pageTitle(): string {
    const url = this.router.url;
    if (url.includes('/kardex')) {
      return 'Historial Académico';
    } else if (url.includes('/dashboard')) {
      return 'Datos personales';
    }
    return 'Sistema de Integración Escolar';
  }

}
