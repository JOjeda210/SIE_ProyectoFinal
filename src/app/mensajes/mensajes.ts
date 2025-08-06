import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar, Header],
  templateUrl: './mensajes.html',
  styleUrls: ['./mensajes.css']
})
export class MensajesComponent {
  // Información del estudiante
  estudiante = {
    nombre: 'Jesús Eduardo Ojeda Ochoa',
    numeroControl: '20230040',
    carrera: 'Ingeniería en Sistemas Computacionales'
  };

  // Lista de mensajes del estudiante
  mensajes = [
    {
      id: 1,
      remitente: 'M.C. Ana García López',
      cargo: 'Docente - Fundamentos de Programación',
      asunto: 'Entrega de Proyecto Final',
      mensaje: 'Estimado estudiante, le recuerdo que la fecha límite para la entrega del proyecto final de la materia es el viernes 15 de diciembre a las 23:59 hrs. El proyecto debe incluir código fuente, documentación y presentación.',
      fecha: '2024-12-10 14:30',
      leido: false,
      tipo: 'academico',
      prioridad: 'alta'
    },
    {
      id: 2,
      remitente: 'Servicios Escolares',
      cargo: 'Departamento Administrativo',
      asunto: 'Proceso de Reinscripción',
      mensaje: 'Le informamos que el proceso de reinscripción para el próximo cuatrimestre estará disponible del 18 al 22 de diciembre. Debe completar el proceso en línea y realizar el pago correspondiente.',
      fecha: '2024-12-08 10:15',
      leido: true,
      tipo: 'administrativo',
      prioridad: 'media'
    },
    {
      id: 3,
      remitente: 'Dr. María Rodríguez',
      cargo: 'Docente - Cálculo Diferencial',
      asunto: 'Examen Parcial Reprogramado',
      mensaje: 'Por motivos de fuerza mayor, el examen parcial programado para el miércoles 13 de diciembre se reprograma para el viernes 15 de diciembre a la misma hora. Temas: derivadas y aplicaciones.',
      fecha: '2024-12-07 16:45',
      leido: true,
      tipo: 'academico',
      prioridad: 'alta'
    },
    {
      id: 4,
      remitente: 'Biblioteca Central',
      cargo: 'Servicios Bibliotecarios',
      asunto: 'Renovación de Préstamo',
      mensaje: 'Le recordamos que tiene libros pendientes de devolución. Puede renovar su préstamo en línea o acudir directamente a la biblioteca. Libros: "Algoritmos y Estructuras de Datos", "Cálculo de una Variable".',
      fecha: '2024-12-05 09:20',
      leido: false,
      tipo: 'biblioteca',
      prioridad: 'baja'
    },
    {
      id: 5,
      remitente: 'Coordinación Académica',
      cargo: 'Departamento Académico',
      asunto: 'Beca de Excelencia Académica',
      mensaje: 'Felicitaciones por su excelente desempeño académico. Ha sido seleccionado para la Beca de Excelencia Académica del cuatrimestre. Para más información sobre el proceso, favor de acudir a Coordinación Académica.',
      fecha: '2024-12-03 11:30',
      leido: true,
      tipo: 'beca',
      prioridad: 'alta'
    }
  ];

  // Filtros
  filtroTipo = 'todos';
  filtroLeido = 'todos';
  busqueda = '';

  // Mensaje seleccionado para vista detallada
  mensajeSeleccionado: any = null;

  // Obtener mensajes filtrados
  getMensajesFiltrados() {
    return this.mensajes.filter(mensaje => {
      const cumpleTipo = this.filtroTipo === 'todos' || mensaje.tipo === this.filtroTipo;
      const cumpleLeido = this.filtroLeido === 'todos' || 
                         (this.filtroLeido === 'leidos' && mensaje.leido) ||
                         (this.filtroLeido === 'no_leidos' && !mensaje.leido);
      const cumpleBusqueda = this.busqueda === '' || 
                            mensaje.asunto.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                            mensaje.remitente.toLowerCase().includes(this.busqueda.toLowerCase()) ||
                            mensaje.mensaje.toLowerCase().includes(this.busqueda.toLowerCase());
      
      return cumpleTipo && cumpleLeido && cumpleBusqueda;
    }).sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
  }

  // Seleccionar mensaje
  seleccionarMensaje(mensaje: any) {
    this.mensajeSeleccionado = mensaje;
    if (!mensaje.leido) {
      mensaje.leido = true;
    }
  }

  // Cerrar vista de mensaje
  cerrarMensaje() {
    this.mensajeSeleccionado = null;
  }

  // Marcar como leído/no leído
  toggleLeido(mensaje: any, event: Event) {
    event.stopPropagation();
    mensaje.leido = !mensaje.leido;
  }

  // Obtener contadores
  getContadores() {
    return {
      total: this.mensajes.length,
      noLeidos: this.mensajes.filter(m => !m.leido).length,
      academicos: this.mensajes.filter(m => m.tipo === 'academico').length,
      administrativos: this.mensajes.filter(m => m.tipo === 'administrativo').length
    };
  }

  // Obtener clase de prioridad
  getClasePrioridad(prioridad: string): string {
    switch(prioridad) {
      case 'alta': return 'prioridad-alta';
      case 'media': return 'prioridad-media';
      case 'baja': return 'prioridad-baja';
      default: return '';
    }
  }

  // Obtener clase de tipo
  getClaseTipo(tipo: string): string {
    switch(tipo) {
      case 'academico': return 'tipo-academico';
      case 'administrativo': return 'tipo-administrativo';
      case 'biblioteca': return 'tipo-biblioteca';
      case 'beca': return 'tipo-beca';
      default: return '';
    }
  }

  // Formatear fecha
  formatearFecha(fecha: string): string {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Limpiar filtros
  limpiarFiltros() {
    this.filtroTipo = 'todos';
    this.filtroLeido = 'todos';
    this.busqueda = '';
  }
}
