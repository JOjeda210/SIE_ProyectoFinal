import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  credenciales = {
    numeroControl: '',
    password: ''
  }
  // Inyección de dependencias, constructor del router
   constructor(private router: Router) { } 
  onLogin(): void{
    console.log('formulario enviado', this.credenciales)

    if (this.credenciales.numeroControl === "20230040" && this.credenciales.password === "Upqro2023") {
      console.log('Credenciales correctas, redirigiendo...');
      this.router.navigate(['/dashboard']).then(
        (success) => console.log('Navegación exitosa:', success),
        (error) => console.error('Error en navegación:', error)
      );
    }
    else{
      console.log('Credenciales incorrectas')
      alert('Credenciales incorrectas. Número de control: 20230040, Password: Upqro2023');
    }
  }
}
