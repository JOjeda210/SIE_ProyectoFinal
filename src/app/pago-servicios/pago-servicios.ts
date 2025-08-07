// Componente para gestión de pagos de servicios estudiantiles
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-pago-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule, Header, Navbar],
  templateUrl: './pago-servicios.html',
  styleUrl: './pago-servicios.css'
})
export class PagoServiciosComponent {
  // Datos de servicios pendientes y pagados
  serviciosPendientes = [
    {
      id: 1,
      concepto: 'Colegiatura Cuatrimestre 9',
      monto: 8500.00,
      fechaVencimiento: '2025-08-15',
      periodo: 'Enero - Abril 2025',
      estado: 'pendiente',
      tipo: 'colegiatura'
    },
    {
      id: 2,
      concepto: 'Credencial Estudiantil',
      monto: 150.00,
      fechaVencimiento: '2025-08-20',
      periodo: 'Ciclo 2025',
      estado: 'pendiente',
      tipo: 'credencial'
    },
    {
      id: 3,
      concepto: 'Seguro Facultativo IMSS',
      monto: 450.00,
      fechaVencimiento: '2025-08-25',
      periodo: 'Enero - Abril 2025',
      estado: 'pendiente',
      tipo: 'seguro'
    },
    {
      id: 4,
      concepto: 'Examen Extraordinario - Matemáticas',
      monto: 250.00,
      fechaVencimiento: '2025-08-10',
      periodo: 'Cuatrimestre 9',
      estado: 'vencido',
      tipo: 'examen'
    }
  ];

  serviciosPagados = [
    {
      id: 5,
      concepto: 'Colegiatura Cuatrimestre 8',
      monto: 8500.00,
      fechaPago: '2024-12-15',
      periodo: 'Sept - Dic 2024',
      estado: 'pagado',
      tipo: 'colegiatura',
      referencia: 'REF001234567'
    },
    {
      id: 6,
      concepto: 'Biblioteca - Multa por atraso',
      monto: 50.00,
      fechaPago: '2024-11-20',
      periodo: 'Noviembre 2024',
      estado: 'pagado',
      tipo: 'multa',
      referencia: 'REF001234568'
    }
  ];

  totalAdeudo = 0;
  vistaActual = 'pendientes';

  constructor() {
    this.calcularTotalAdeudo();
  }

  // Calcular el total de adeudos pendientes
  calcularTotalAdeudo(): void {
    this.totalAdeudo = this.serviciosPendientes.reduce((total, servicio) => {
      return total + servicio.monto;
    }, 0);
  }

  // Cambiar vista entre pendientes e historial
  cambiarVista(vista: string): void {
    this.vistaActual = vista;
  }

  // Generar referencia de pago
  generarReferencia(servicioId: number): void {
    const servicio = this.serviciosPendientes.find(s => s.id === servicioId);
    if (servicio) {
      alert(`Referencia generada para: ${servicio.concepto}\nMonto: $${servicio.monto.toFixed(2)}\nReferencia: PAY${servicioId}${Date.now()}`);
    }
  }

  // Descargar comprobante de pago
  descargarComprobante(servicioId: number): void {
    const servicio = this.serviciosPagados.find(s => s.id === servicioId);
    if (servicio) {
      alert(`Descargando comprobante de pago:\n${servicio.concepto}\nReferencia: ${servicio.referencia}`);
    }
  }

  // Obtener clase CSS según el estado del servicio
  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'estado-pendiente';
      case 'vencido': return 'estado-vencido';
      case 'pagado': return 'estado-pagado';
      default: return '';
    }
  }

  // Obtener icono según el tipo de servicio
  getTipoIcon(tipo: string): string {
    switch (tipo) {
      case 'colegiatura': return '🎓';
      case 'credencial': return '🆔';
      case 'seguro': return '🏥';
      case 'examen': return '📝';
      case 'multa': return '⚠️';
      default: return '💰';
    }
  }
}
