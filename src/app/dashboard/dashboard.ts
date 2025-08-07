import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header} from '../header/header';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, Header, Navbar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  navbarAbierta = true;

  datosAlumno = {
    nombreCompleto: 'Jesús Alberto Ojeda Rosas',
    curp: 'OARJ990101HUPQXX00',
    carrera: 'Ingeniería en Tecnologías de la Información',
    especialidad: 'Desarrollo de Software',
    cuatrimestre: 9,
    creditos: 240,
    ingreso: 2023
  };

  toggleNavbar(): void {
    this.navbarAbierta = !this.navbarAbierta;
  }

  modificarDatos(): void {
    // Aquí se implementaría la lógica para abrir un modal o redirigir a una página de edición
    console.log('Abriendo editor de datos del estudiante...');
    alert('Funcionalidad de edición de datos en desarrollo. Pronto estará disponible.');
  }
}