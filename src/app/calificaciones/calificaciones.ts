import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-calificaciones',
  standalone: true,
  imports: [CommonModule, Header, Navbar],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.css'
})
export class CalificacionesComponent {
  navbarAbierta = true;

  // Datos del alumno
  datosAlumno = {
    nombreCompleto: 'Jesús Alberto Ojeda Rosas',
    numeroControl: '20230040',
    carrera: 'Ingeniería en Tecnologías de la Información',
    cuatrimestre: 3,
    creditos: 72
  };

  // Calificaciones del cuatrimestre 3
  materias = [
    {
      codigo: 'MAT301',
      nombre: 'Matemáticas Discretas',
      creditos: 8,
      calificacion: 95,
      estado: 'Aprobada'
    },
    {
      codigo: 'PRG301',
      nombre: 'Programación Orientada a Objetos',
      creditos: 10,
      calificacion: 92,
      estado: 'Aprobada'
    },
    {
      codigo: 'BD301',
      nombre: 'Base de Datos',
      creditos: 8,
      calificacion: 88,
      estado: 'Aprobada'
    },
    {
      codigo: 'RED301',
      nombre: 'Redes de Computadoras',
      creditos: 6,
      calificacion: 90,
      estado: 'Aprobada'
    },
    {
      codigo: 'WEB301',
      nombre: 'Desarrollo Web',
      creditos: 8,
      calificacion: 94,
      estado: 'Aprobada'
    },
    {
      codigo: 'ING301',
      nombre: 'Inglés III',
      creditos: 4,
      calificacion: 87,
      estado: 'Aprobada'
    }
  ];

  toggleNavbar(): void {
    this.navbarAbierta = !this.navbarAbierta;
  }

  get promedioGeneral(): number {
    const suma = this.materias.reduce((total, materia) => total + materia.calificacion, 0);
    return Math.round((suma / this.materias.length) * 100) / 100;
  }

  get totalCreditos(): number {
    return this.materias.reduce((total, materia) => total + materia.creditos, 0);
  }
}
