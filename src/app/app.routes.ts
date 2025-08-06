import { Routes } from '@angular/router';
import { Login } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { KardexComponent } from './kardex/kardex';
import { CalificacionesComponent } from './calificaciones/calificaciones';
import { HorarioComponent } from './horario/horario';
import { MensajesComponent } from './mensajes/mensajes';


export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'kardex',
    component: KardexComponent
  },
  {
    path: 'calificaciones',
    component: CalificacionesComponent
  },
  {
    path: 'horario',
    component: HorarioComponent
  },
  {
    path: 'mensajes',
    component: MensajesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];