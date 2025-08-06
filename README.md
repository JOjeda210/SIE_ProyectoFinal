# SIE - Sistema de Información Estudiantil

Un sistema completo de información estudiantil desarrollado con Angular 18+ que permite a los estudiantes consultar sus datos académicos, calificaciones, horarios y gestionar mensajes.

## 📋 Descripción del Proyecto

El Sistema de Información Estudiantil (SIE) es una aplicación web moderna diseñada para facilitar el acceso a la información académica de los estudiantes. La aplicación cuenta con una interfaz intuitiva y responsive que se adapta a diferentes dispositivos.

## 🏗️ Estructura del Proyecto

```
SIETopicos/
├── src/
│   ├── app/
│   │   ├── login/                 # Módulo de autenticación
│   │   │   ├── login.ts
│   │   │   ├── login.html
│   │   │   └── login.css
│   │   ├── dashboard/             # Panel principal del estudiante
│   │   │   ├── dashboard.ts
│   │   │   ├── dashboard.html
│   │   │   └── dashboard.css
│   │   ├── kardex/                # Historial académico
│   │   │   ├── kardex.ts
│   │   │   ├── kardex.html
│   │   │   └── kardex.css
│   │   ├── calificaciones/        # Calificaciones del cuatrimestre actual
│   │   │   ├── calificaciones.ts
│   │   │   ├── calificaciones.html
│   │   │   └── calificaciones.css
│   │   ├── horario/               # Horario de clases
│   │   │   ├── horario.ts
│   │   │   ├── horario.html
│   │   │   └── horario.css
│   │   ├── mensajes/              # Centro de mensajes
│   │   │   ├── mensajes.ts
│   │   │   ├── mensajes.html
│   │   │   └── mensajes.css
│   │   ├── navbar/                # Barra de navegación
│   │   │   ├── navbar.ts
│   │   │   ├── navbar.html
│   │   │   └── navbar.css
│   │   ├── header/                # Encabezado dinámico
│   │   │   ├── header.ts
│   │   │   ├── header.html
│   │   │   └── header.css
│   │   ├── app.config.ts          # Configuración principal
│   │   ├── app.routes.ts          # Configuración de rutas
│   │   └── app.ts                 # Componente raíz
│   ├── styles.css                 # Estilos globales
│   ├── index.html                 # Archivo HTML principal
│   └── main.ts                    # Punto de entrada de la aplicación
├── public/                        # Archivos estáticos
│   ├── favicon.ico
│   └── UPQRO_logo.png            # Logo de la universidad
├── angular.json                   # Configuración de Angular
├── package.json                   # Dependencias del proyecto
├── tsconfig.json                  # Configuración de TypeScript
└── README.md                      # Este archivo
```

## 🚀 Características Principales

### ✅ Funcionalidades Implementadas

- **🔐 Sistema de Autenticación**: Login seguro con validación de credenciales
- **📊 Dashboard**: Panel principal con información general del estudiante
- **📚 Kardex**: Historial académico completo por cuatrimestres
- **🎓 Calificaciones**: Calificaciones del cuatrimestre actual con estadísticas
- **📅 Horario**: Horario de clases semanal con detalle de materias y profesores
- **💬 Mensajes**: Centro de mensajes con filtros y búsqueda
- **🧭 Navegación**: Barra de navegación responsive con diseño adaptativo
- **🎨 Diseño Responsive**: Compatible con desktop, tablet y móvil

### 🎨 Características de Diseño

- **Paleta de Colores Institucional**:
  - Primario: `#521C0D` (Marrón universitario)
  - Secundario: `#D5451B` (Naranja institucional)
  - Acento: `#FF9B45` (Naranja claro)
  - Fondo: `#F4E7E1` (Beige suave)

- **Tipografía**: Segoe UI para una experiencia de lectura óptima
- **Iconografía**: Emojis descriptivos para mejor UX
- **Animaciones**: Transiciones suaves y efectos hover

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 18+ (Standalone Components)
- **Lenguaje**: TypeScript 5.x
- **Estilos**: CSS3 con diseño responsive
- **Routing**: Angular Router
- **Forms**: Angular Reactive Forms
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📋 Estándares de Código

### 🏛️ Arquitectura

- **Standalone Components**: Uso de componentes independientes sin módulos
- **Separación de Responsabilidades**: Cada componente tiene su lógica, template y estilos separados
- **Reutilización**: Componentes compartidos como navbar y header
- **Lazy Loading**: Carga bajo demanda de componentes

### 📝 Convenciones de Nomenclatura

- **Archivos**: `kebab-case` (ej: `kardex.component.ts`)
- **Clases**: `PascalCase` (ej: `KardexComponent`)
- **Variables**: `camelCase` (ej: `estudianteData`)
- **Constantes**: `UPPER_SNAKE_CASE` (ej: `API_URL`)
- **CSS Classes**: `kebab-case` (ej: `.student-info-card`)

### 🎯 Estructura de Componentes

```typescript
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './component-name.html',
  styleUrls: ['./component-name.css']
})
export class ComponentNameComponent {
  // Propiedades públicas
  // Métodos públicos
  // Constructor
  // Lifecycle hooks
}
```

### 🎨 Estándares CSS

- **BEM Methodology**: Para nomenclatura de clases CSS
- **Mobile First**: Diseño responsive desde móvil hacia desktop
- **Flexbox y Grid**: Para layouts modernos y flexibles
- **Custom Properties**: Variables CSS para consistencia

## 🚀 Cómo Levantar el Proyecto

### 📋 Prerrequisitos

Asegúrate de tener instalado:

- **Node.js**: Versión 18 o superior
- **npm**: Versión 9 o superior
- **Angular CLI**: Versión 17 o superior

```bash
# Verificar versiones instaladas
node --version
npm --version
ng --version
```

### 📦 Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/JOjeda210/SIE_ProyectoFinal.git
cd SIE_ProyectoFinal/SIETopicos
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Verificar la instalación**:
```bash
ng version
```

### 🔧 Comandos de Desarrollo

- **Servidor de desarrollo**:
```bash
ng serve
# o
npm start
```
La aplicación estará disponible en `http://localhost:4200`

- **Build de producción**:
```bash
ng build --prod
```

- **Ejecutar tests**:
```bash
ng test
```

- **Linting**:
```bash
ng lint
```

### 🌐 Datos de Prueba

Para probar la aplicación, utiliza las siguientes credenciales:

- **Número de Control**: `20230040`
- **Contraseña**: `Upqro2023`

## 📱 Responsive Design

La aplicación está optimizada para diferentes tamaños de pantalla:

- **Desktop** (1024px+): Layout completo con navbar lateral
- **Tablet** (768px - 1024px): Layout adaptativo con navbar reducido
- **Mobile** (< 768px): Navbar horizontal en la parte inferior con botón toggle

### 🔧 Breakpoints CSS

```css
/* Tablet */
@media (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## 🎯 Funcionalidades por Módulo

### 🔐 Login
- Validación de credenciales
- Redirección automática al dashboard
- Mensajes de error informativos
- Diseño responsive con logo institucional

### 📊 Dashboard
- Información personal del estudiante
- Datos académicos generales
- Estadísticas de progreso
- Acceso rápido a otras secciones

### 📚 Kardex
- Historial académico por cuatrimestres
- Calificaciones y créditos por materia
- Promedio general y por periodo
- Estados de materias (Aprobada/Reprobada)

### 🎓 Calificaciones
- Calificaciones del cuatrimestre actual
- Cálculo automático de promedios
- Visualización de créditos
- Estadísticas de rendimiento

### 📅 Horario
- Horario semanal completo
- Información de profesores y aulas
- Destacado del día y clase actual
- Vista responsive para móviles

### 💬 Mensajes
- Bandeja de entrada de mensajes
- Filtros por tipo y estado
- Búsqueda por contenido
- Vista detallada de mensajes
- Acciones (responder, archivar, marcar importante)

## 🤝 Contribución

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit los cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Jesús Eduardo Ojeda Ochoa** - *Desarrollo Full Stack* - [JOjeda210](https://github.com/JOjeda210)

## 🏫 Universidad

**Universidad Politécnica de Querétaro (UPQRO)**
- Carrera: Ingeniería en Sistemas Computacionales
- Cuatrimestre: 3
- Materia: Tópicos de Calidad

---

⭐️ Si este proyecto te fue útil, ¡dale una estrella!

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
