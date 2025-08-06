import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [CommonModule, Navbar, Header],
  templateUrl: './horario.html',
  styleUrls: ['./horario.css']
})
export class HorarioComponent {
  // Información del estudiante
  estudiante = {
    nombre: 'Jesús Eduardo Ojeda Ochoa',
    numeroControl: '20230040',
    carrera: 'Ingeniería en Sistemas Computacionales',
    cuatrimestre: 3
  };

  // Horario de clases para el cuatrimestre 3
  horario = [
    {
      dia: 'Lunes',
      clases: [
        {
          hora: '14:00 - 15:30',
          materia: 'Fundamentos de Programación',
          profesor: 'M.C. Ana García López',
          aula: 'Lab-1'
        },
        {
          hora: '15:30 - 17:00',
          materia: 'Álgebra Lineal',
          profesor: 'Ing. Carlos Mendoza',
          aula: 'A-203'
        },
        {
          hora: '17:00 - 18:30',
          materia: 'Cálculo Diferencial',
          profesor: 'Dr. María Rodríguez',
          aula: 'A-105'
        },
        {
          hora: '18:30 - 20:00',
          materia: 'Inglés III',
          profesor: 'Lic. Patricia Silva',
          aula: 'B-301'
        }
      ]
    },
    {
      dia: 'Martes',
      clases: [
        {
          hora: '14:00 - 15:30',
          materia: 'Estructura de Datos',
          profesor: 'M.C. Roberto Flores',
          aula: 'Lab-2'
        },
        {
          hora: '15:30 - 17:00',
          materia: 'Fundamentos de Programación',
          profesor: 'M.C. Ana García López',
          aula: 'Lab-1'
        },
        {
          hora: '17:00 - 18:30',
          materia: 'Física I',
          profesor: 'Ing. Luis Hernández',
          aula: 'A-208'
        },
        {
          hora: '18:30 - 20:00',
          materia: 'Desarrollo Humano',
          profesor: 'Psic. Elena Morales',
          aula: 'C-102'
        }
      ]
    },
    {
      dia: 'Miércoles',
      clases: [
        {
          hora: '14:00 - 15:30',
          materia: 'Álgebra Lineal',
          profesor: 'Ing. Carlos Mendoza',
          aula: 'A-203'
        },
        {
          hora: '15:30 - 17:00',
          materia: 'Cálculo Diferencial',
          profesor: 'Dr. María Rodríguez',
          aula: 'A-105'
        },
        {
          hora: '17:00 - 18:30',
          materia: 'Estructura de Datos',
          profesor: 'M.C. Roberto Flores',
          aula: 'Lab-2'
        },
        {
          hora: '18:30 - 20:00',
          materia: 'Inglés III',
          profesor: 'Lic. Patricia Silva',
          aula: 'B-301'
        }
      ]
    },
    {
      dia: 'Jueves',
      clases: [
        {
          hora: '14:00 - 15:30',
          materia: 'Física I',
          profesor: 'Ing. Luis Hernández',
          aula: 'A-208'
        },
        {
          hora: '15:30 - 17:00',
          materia: 'Fundamentos de Programación',
          profesor: 'M.C. Ana García López',
          aula: 'Lab-1'
        },
        {
          hora: '17:00 - 18:30',
          materia: 'Álgebra Lineal',
          profesor: 'Ing. Carlos Mendoza',
          aula: 'A-203'
        },
        {
          hora: '18:30 - 20:00',
          materia: 'Desarrollo Humano',
          profesor: 'Psic. Elena Morales',
          aula: 'C-102'
        }
      ]
    },
    {
      dia: 'Viernes',
      clases: [
        {
          hora: '14:00 - 15:30',
          materia: 'Cálculo Diferencial',
          profesor: 'Dr. María Rodríguez',
          aula: 'A-105'
        },
        {
          hora: '15:30 - 17:00',
          materia: 'Estructura de Datos',
          profesor: 'M.C. Roberto Flores',
          aula: 'Lab-2'
        },
        {
          hora: '17:00 - 18:30',
          materia: 'Física I',
          profesor: 'Ing. Luis Hernández',
          aula: 'A-208'
        },
        {
          hora: '18:30 - 20:00',
          materia: 'Inglés III',
          profesor: 'Lic. Patricia Silva',
          aula: 'B-301'
        }
      ]
    }
  ];

  // Obtener el día actual para resaltarlo
  getDiaActual(): string {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const hoy = new Date();
    return dias[hoy.getDay()];
  }

  // Verificar si es el día actual
  esDiaActual(dia: string): boolean {
    return this.getDiaActual() === dia;
  }

  // Obtener la clase actual (si hay alguna)
  getClaseActual(): any {
    const ahora = new Date();
    const horaActual = ahora.getHours();
    const minutosActuales = ahora.getMinutes();
    const diaActual = this.getDiaActual();
    
    const horarioDia = this.horario.find(h => h.dia === diaActual);
    
    if (horarioDia) {
      return horarioDia.clases.find(clase => {
        const [horaInicio, horaFin] = clase.hora.split(' - ');
        const [horaInicioH, horaInicioM] = horaInicio.split(':').map(Number);
        const [horaFinH, horaFinM] = horaFin.split(':').map(Number);
        
        const minutosInicio = horaInicioH * 60 + horaInicioM;
        const minutosFin = horaFinH * 60 + horaFinM;
        const minutosActual = horaActual * 60 + minutosActuales;
        
        return minutosActual >= minutosInicio && minutosActual <= minutosFin;
      });
    }
    
    return null;
  }

  // Verificar si es la clase actual
  esClaseActual(clase: any): boolean {
    const claseActual = this.getClaseActual();
    return claseActual && claseActual.hora === clase.hora && claseActual.materia === clase.materia;
  }
}
