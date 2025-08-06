import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private router: Router) {}

  // Función para cerrar sesión
  cerrarSesion() {
    // Mostrar confirmación
    const confirmacion = confirm('¿Está seguro que desea cerrar sesión?');
    
    if (confirmacion) {
      // Aquí puedes agregar lógica adicional como limpiar localStorage, sessionStorage, etc.
      // localStorage.clear();
      // sessionStorage.clear();
      
      // Redireccionar al login
      this.router.navigate(['']);
      
      // Mensaje opcional de confirmación
      alert('Sesión cerrada exitosamente');
    }
  }
}
