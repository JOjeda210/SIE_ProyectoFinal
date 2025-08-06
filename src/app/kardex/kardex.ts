import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-kardex',
  standalone: true,
  imports: [CommonModule, Header, Navbar],
  templateUrl: './kardex.html',
  styleUrl: './kardex.css'
})
export class KardexComponent {
  navbarAbierta = true;

  toggleNavbar(): void {
    this.navbarAbierta = !this.navbarAbierta;
  }

  // Datos de ejemplo para el historial académico
  semestres = [
    {
      cuatrimestre: 1,
      materias: [
        { nombre: 'Fundamentos de Programación', calificacion: 9.5 },
        { nombre: 'Matemáticas Discretas', calificacion: 8.0 },
        { nombre: 'Introducción a la Ingeniería', calificacion: 9.0 }
      ]
    },
    {
      cuatrimestre: 2,
      materias: [
        { nombre: 'Estructuras de Datos', calificacion: 8.5 },
        { nombre: 'Cálculo Diferencial', calificacion: 7.5 },
        { nombre: 'Electrónica Básica', calificacion: 9.0 }
      ]
    },
    {
      cuatrimestre: 3,
      materias: [
        { nombre: 'Bases de Datos', calificacion: 10.0 },
        { nombre: 'Programación Orientada a Objetos', calificacion: 9.0 },
        { nombre: 'Cálculo Integral', calificacion: 8.5 }
      ]
    }
  ];

  constructor() {}
}