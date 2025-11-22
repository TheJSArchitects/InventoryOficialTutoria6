# 📚 Guía Completa: Cómo Replicar el Proyecto Inventario Pro

## 🎯 ¿Qué vamos a hacer?

Vamos a crear una aplicación de inventario paso a paso, como si estuviéramos construyendo con bloques LEGO. Cada pieza tiene su lugar y función.

---

## 📋 Tabla de Contenidos

1. [Preparar tu computadora](#1-preparar-tu-computadora)
2. [Crear el proyecto](#2-crear-el-proyecto)
3. [Entender la estructura](#3-entender-la-estructura)
4. [Crear los servicios](#4-crear-los-servicios)
5. [Crear el menú lateral (Sidebar)](#5-crear-el-menú-lateral-sidebar)
6. [Crear el diseño principal (Layout)](#6-crear-el-diseño-principal-layout)
7. [Crear las páginas](#7-crear-las-páginas)
8. [Conectar todo con rutas](#8-conectar-todo-con-rutas)
9. [Ejecutar el proyecto](#9-ejecutar-el-proyecto)

---

## 1. 🛠️ Preparar tu computadora

### ¿Qué necesitas instalar?

#### a) Node.js (El motor que hace funcionar todo)

1. Ve a: https://nodejs.org
2. Descarga la versión "LTS" (es la más estable)
3. Ejecuta el instalador
4. Sigue los pasos (solo dale "Siguiente, Siguiente, Instalar")

**¿Cómo saber si está instalado?**

```powershell
node --version
# Debe mostrar algo como: v20.x.x
```

#### b) Angular CLI (La herramienta para crear proyectos Angular)

```powershell
npm install -g @angular/cli
```

**¿Cómo saber si está instalado?**

```powershell
ng version
# Debe mostrar la versión de Angular
```

---

## 2. 🎨 Crear el proyecto

### Paso 1: Crear el proyecto Angular

```powershell
# 1. Ve a la carpeta donde quieres crear tu proyecto
cd C:\Users\TuUsuario\Proyectos

# 2. Crea el proyecto
ng new InventoryOficialService

# 3. Te hará preguntas, responde:
# - Would you like to add Angular routing? → YES (presiona Y)
# - Which stylesheet format? → CSS (presiona Enter)
```

### Paso 2: Entrar al proyecto

```powershell
cd InventoryOficialService
```

### Paso 3: Instalar Bootstrap y Bootstrap Icons

```powershell
npm install bootstrap bootstrap-icons
```

### Paso 4: Configurar Bootstrap

Abre el archivo `angular.json` y busca `"styles"`, debe verse así:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css",
  "src/styles.css"
]
```

---

## 3. 📁 Entender la estructura

Tu proyecto se verá así (como un árbol):

```
InventoryOficialService/
│
├── src/                          ← Aquí está TODO tu código
│   ├── app/                      ← La aplicación principal
│   │   ├── core/                 ← Servicios importantes (cerebro)
│   │   │   └── services/         ← Servicios específicos
│   │   │       ├── auth.ts       ← Maneja el login
│   │   │       └── menu.ts       ← Maneja el menú
│   │   │
│   │   ├── features/             ← Las páginas de tu app
│   │   │   ├── auth/             ← Login y Registro
│   │   │   ├── compras/          ← Página de compras
│   │   │   ├── proveedores/      ← Página de proveedores
│   │   │   └── ...               ← Más páginas
│   │   │
│   │   ├── shared/               ← Cosas compartidas
│   │   │   └── component/        ← Componentes reutilizables
│   │   │       ├── layout/       ← Diseño principal
│   │   │       └── sidebar/      ← Menú lateral
│   │   │
│   │   ├── app.config.ts         ← Configuración de la app
│   │   ├── app.routes.ts         ← Las rutas (direcciones)
│   │   ├── app.ts                ← Componente principal
│   │   └── app.html              ← HTML principal
│   │
│   ├── index.html                ← Página principal HTML
│   └── styles.css                ← Estilos globales
│
├── angular.json                  ← Configuración de Angular
└── package.json                  ← Lista de dependencias
```

---

## 4. 🧠 Crear los servicios

Los servicios son como ayudantes que hacen tareas específicas.

### Servicio de Autenticación (auth.ts)

**¿Qué hace?** Maneja el login y registro de usuarios.

```powershell
# Crear el servicio
ng generate service core/services/auth
```

**Código completo:**

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private currentUser: string = '';

  // Iniciar sesión
  login(username: string, password: string): boolean {
    if (username && password) {
      this.currentUser = username;
      return true;
    }
    return false;
  }

  // Registrar usuario
  register(username: string, email: string, password: string): boolean {
    if (username && email && password) {
      console.log('Usuario registrado:', username);
      return true;
    }
    return false;
  }

  // Obtener usuario actual
  getUser(): string {
    return this.currentUser;
  }
}
```

### Servicio de Menú (menu.ts)

**¿Qué hace?** Guarda los items del menú lateral.

```powershell
# Crear el servicio
ng generate service core/services/menu
```

**Código completo:**

```typescript
import { Injectable } from '@angular/core';

// Interfaz: Define cómo se ve cada item del menú
export interface MenuItem {
  icon: string; // Ícono del item
  label: string; // Texto que se muestra
  route: string; // Ruta a la que va
  active?: boolean; // Si está activo o no
  badge?: string; // Número de notificaciones
  section?: string; // Sección a la que pertenece
}

@Injectable({
  providedIn: 'root',
})
export class Menu {
  // Lista de items del menú
  private menuItems: MenuItem[] = [
    {
      icon: 'bi bi-grid',
      label: 'Dashboard',
      route: '/dashboard',
      active: false,
      section: 'PRINCIPAL',
    },
    {
      icon: 'bi bi-cart',
      label: 'Compras',
      route: '/compras',
      active: true,
      badge: '3',
      section: 'PRINCIPAL',
    },
    {
      icon: 'bi bi-truck',
      label: 'Proveedores',
      route: '/proveedores',
      active: false,
      section: 'PRINCIPAL',
    },
    {
      icon: 'bi bi-box-seam',
      label: 'Almacenamiento',
      route: '/almacenamiento',
      active: false,
      section: 'PRINCIPAL',
    },
    {
      icon: 'bi bi-calendar',
      label: 'Calendario',
      route: '/calendario',
      active: false,
      section: 'PRINCIPAL',
    },
    {
      icon: 'bi bi-people',
      label: 'Contactos',
      route: '/contactos',
      active: false,
      section: 'PRINCIPAL',
    },
    {
      icon: 'bi bi-shield-check',
      label: 'Permisos',
      route: '/permisos',
      active: false,
      section: 'PRINCIPAL',
    },
    {
      icon: 'bi bi-bar-chart',
      label: 'Reportes',
      route: '/reportes',
      active: false,
      section: 'CONFIGURACIÓN',
    },
    {
      icon: 'bi bi-gear',
      label: 'Ajustes',
      route: '/ajustes',
      active: false,
      section: 'CONFIGURACIÓN',
    },
  ];

  constructor() {}

  // Obtener todos los items del menú
  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  // Marcar un item como activo
  setActiveItem(route: string): void {
    this.menuItems.forEach((item) => {
      item.active = item.route === route;
    });
  }
}
```

---

## 5. 🎨 Crear el menú lateral (Sidebar)

El Sidebar es el menú que se ve a la izquierda.

### Paso 1: Crear el componente

```powershell
ng generate component shared/component/sidebar --standalone
```

### Paso 2: Renombrar archivos

- Cambia `sidebar.component.ts` → `sidebar-module.ts`
- Cambia `sidebar.component.css` → `siderbar.component.css` (sí, con esa ortografía)

### Paso 3: Código del componente (sidebar-module.ts)

```typescript
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu, MenuItem } from '../../../core/services/menu';
import { Auth } from '../../../core/services/auth';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./siderbar.component.css'],
})
export class SidebarModule implements OnInit {
  menuItems: MenuItem[] = [];
  username: string = '';
  isMenuOpen: boolean = window.innerWidth >= 992; // Abierto en desktop

  constructor(private menuService: Menu, private authService: Auth, private router: Router) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.username = this.authService.getUser() || 'usuario';
  }

  // Navegar a una ruta
  navigateTo(route: string): void {
    this.menuService.setActiveItem(route);
    this.router.navigate([route]);
  }

  // Abrir/cerrar menú en móvil
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cerrar sesión
  logaut(): void {
    if (confirm('¿Seguro que quieres cerrar sesión?')) {
      this.router.navigate(['/login']);
    }
  }
}
```

### Paso 4: HTML del Sidebar (sidebar.component.html)

```html
<div
  class="sidebar bg-white d-flex flex-column"
  [class.show]="isMenuOpen"
  [class.collapsed]="!isMenuOpen"
>
  <!-- Header del Sidebar -->
  <div class="sidebar-header px-3 py-4">
    <div class="d-flex align-items-center">
      <div
        class="logo-circle bg-primary d-flex align-items-center justify-content-center me-3"
        style="width: 48px; height: 48px; border-radius: 12px"
      >
        <span class="fw-bold text-white" style="font-size: 1.2rem">INV</span>
      </div>
      <div>
        <div class="fw-bold" style="font-size: 1rem; color: #1a1a1a">Inventario Pro</div>
        <small class="text-muted" style="font-size: 0.75rem">v2.0.1</small>
      </div>
    </div>
  </div>

  <!-- Menú Items -->
  <nav class="sidebar-menu flex-grow-1 px-3 py-2">
    @for (item of menuItems; track item.label) { @if (item.section && (menuItems.indexOf(item) === 0
    || menuItems[menuItems.indexOf(item) - 1].section !== item.section)) {
    <div
      class="section-title text-uppercase text-muted px-3 mt-3 mb-2"
      style="font-size: 0.7rem; font-weight: 600; letter-spacing: 0.5px"
    >
      {{ item.section }}
    </div>
    }
    <div
      class="menu-item d-flex align-items-center justify-content-between px-3 py-2 mb-1 rounded"
      [class.active]="item.active"
      (click)="navigateTo(item.route)"
      style="cursor: pointer"
    >
      <div class="d-flex align-items-center">
        <i [class]="item.icon" class="me-3" style="font-size: 1.1rem"></i>
        <span class="menu-label">{{ item.label }}</span>
      </div>
      @if (item.badge) {
      <span class="badge bg-danger rounded-pill" style="font-size: 0.7rem"> {{ item.badge }} </span>
      }
    </div>
    }
  </nav>

  <!-- Usuario al final -->
  <div class="sidebar-footer p-3 border-top">
    <div class="d-flex align-items-center">
      <div
        class="user-avatar text-white rounded-circle me-3 d-flex align-items-center justify-content-center"
        style="width: 40px; height: 40px; font-size: 1rem; 
               background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      >
        {{ username.substring(0, 2).toUpperCase() }}
      </div>
      <div class="flex-grow-1">
        <div class="fw-semibold" style="font-size: 0.9rem; color: #1a1a1a">{{ username }}</div>
        <small class="text-muted" style="font-size: 0.75rem">Administrador</small>
      </div>
      <button class="btn btn-link text-muted p-0" (click)="logaut()" title="Cerrar sesión">
        <i class="bi bi-box-arrow-right" style="font-size: 1.1rem"></i>
      </button>
    </div>
  </div>
</div>

<!-- Overlay para cerrar menú en móvil -->
<div class="sidebar-overlay" [class.show]="isMenuOpen" (click)="toggleMenu()"></div>
```

### Paso 5: CSS del Sidebar (siderbar.component.css)

```css
.sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  z-index: 1000;
  background: #ffffff;
}

.section-title {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.menu-item {
  transition: all 0.2s ease;
  color: #64748b;
  font-size: 0.9rem;
}

.menu-item:hover {
  background-color: #f1f5f9;
  color: #334155;
}

.menu-item.active {
  background-color: #eff6ff;
  color: #2563eb;
  font-weight: 500;
}

.menu-item.active i {
  color: #2563eb;
}

.menu-item i {
  color: #94a3b8;
  transition: color 0.2s ease;
}

.menu-item:hover i {
  color: #64748b;
}

.menu-label {
  font-size: 0.9rem;
}

.user-avatar {
  font-weight: 600;
}

.sidebar-footer {
  background: #fafafa;
}

/* Responsive - Móvil */
@media (max-width: 991px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.show {
    transform: translateX(0);
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;
  }

  .sidebar-overlay.show {
    display: block;
  }
}

/* Desktop */
@media (min-width: 992px) {
  .sidebar.collapsed {
    transform: translateX(-100%);
  }
}
```

---

## 6. 🏗️ Crear el diseño principal (Layout)

El Layout es el contenedor que tiene el sidebar y el contenido.

### Paso 1: Crear el componente

```powershell
ng generate component shared/component/layout --standalone
```

### Paso 2: Renombrar

- Cambia `layout.component.ts` → `layout-module.ts`

### Paso 3: Código del Layout (layout-module.ts)

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar-module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutModule {}
```

### Paso 4: HTML del Layout (layout.component.html)

```html
<div class="layout-container">
  <app-sidebar></app-sidebar>
  <!-- contenido principal -->
  <div class="main-container">
    <router-outlet></router-outlet>
  </div>
</div>
```

### Paso 5: CSS del Layout (layout.component.css)

```css
.layout-container {
  display: flex;
  min-height: 100vh;
}

.main-container {
  flex: 1;
  margin-left: 260px;
  padding: 20px;
  transition: margin-left 0.3s ease;
  background-color: #f8fafc;
}

/* Responsive */
@media (max-width: 991px) {
  .main-container {
    margin-left: 0;
    width: 100%;
  }
}

/* Desktop - cuando sidebar está colapsado */
@media (min-width: 992px) {
  .main-container.sidebar-collapsed {
    margin-left: 0;
  }
}
```

---

## 7. 📄 Crear las páginas

Cada página es un componente. Vamos a crear todas:

### Páginas de Autenticación

```powershell
# Login
ng generate component features/auth/login --standalone

# Register
ng generate component features/auth/register --standalone
```

### Páginas Principales

```powershell
ng generate component features/compras --standalone
ng generate component features/proveedores --standalone
ng generate component features/almacenamiento --standalone
ng generate component features/calendario --standalone
ng generate component features/contactos --standalone
ng generate component features/permisos --standalone
```

### Ejemplo: Página de Login (login.ts)

```typescript
import { Component } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class Login {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  error: string = '';

  constructor(private authService: Auth, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/compras']);
    } else {
      this.error = 'Completa todos los campos';
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
```

### HTML del Login (login.component.html)

```html
<div class="login-container">
  <div class="login-card">
    <h2>Iniciar Sesión</h2>

    <form (ngSubmit)="onLogin()">
      <div class="mb-3">
        <label>Usuario</label>
        <input type="text" class="form-control" [(ngModel)]="username" name="username" />
      </div>

      <div class="mb-3">
        <label>Contraseña</label>
        <input
          [type]="showPassword ? 'text' : 'password'"
          class="form-control"
          [(ngModel)]="password"
          name="password"
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">Entrar</button>

      @if (error) {
      <div class="alert alert-danger mt-3">{{ error }}</div>
      }
    </form>
  </div>
</div>
```

### Páginas simples (ejemplo: compras.ts)

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css',
})
export class Compras {}
```

```html
<!-- compras.component.html -->
<h1>Página de Compras</h1>
<p>Aquí irá el contenido de compras</p>
```

---

## 8. 🛣️ Conectar todo con rutas

Las rutas son como direcciones que le dicen a Angular qué página mostrar.

### Archivo: app.routes.ts

```typescript
import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login.component';
import { Register } from './features/auth/register/register.component';
import { LayoutModule } from './shared/component/layout/layout-module';
import { Compras } from './features/compras/compras.component';
import { Proveedores } from './features/proveedores/proveedores.component';
import { Almacenamiento } from './features/almacenamiento/almacenamiento.component';
import { Calendario } from './features/calendario/calendario.component';
import { Contactos } from './features/contactos/contactos.component';
import { Permisos } from './features/permisos/permisos.component';

export const routes: Routes = [
  // Rutas sin layout (login, register)
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Rutas con layout (páginas principales)
  {
    path: '',
    component: LayoutModule,
    children: [
      { path: 'compras', component: Compras },
      { path: 'proveedores', component: Proveedores },
      { path: 'almacenamiento', component: Almacenamiento },
      { path: 'calendario', component: Calendario },
      { path: 'contactos', component: Contactos },
      { path: 'permisos', component: Permisos },
      { path: '', redirectTo: 'compras', pathMatch: 'full' },
    ],
  },
];
```

### Archivo: app.config.ts

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)],
};
```

### Archivo: app.ts

```typescript
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('InventoryOficial');
}
```

### Archivo: app.html

```html
<router-outlet></router-outlet>
```

### Archivo: index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>InventoryOficial</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

---

## 9. ▶️ Ejecutar el proyecto

### Iniciar el servidor de desarrollo

```powershell
ng serve
```

o

```powershell
npm start
```

### Abrir en el navegador

Ve a: `http://localhost:4200`

---

## 🎉 ¡Listo!

Tu aplicación está funcionando. Ahora puedes:

1. **Ir a `/login`** para ver la página de login
2. **Ir a `/compras`** para ver la página principal con el sidebar

---

## 📝 Resumen de comandos

```powershell
# 1. Crear proyecto
ng new InventoryOficialService
cd InventoryOficialService

# 2. Instalar dependencias
npm install bootstrap bootstrap-icons

# 3. Crear servicios
ng generate service core/services/auth
ng generate service core/services/menu

# 4. Crear componentes compartidos
ng generate component shared/component/sidebar --standalone
ng generate component shared/component/layout --standalone

# 5. Crear páginas de auth
ng generate component features/auth/login --standalone
ng generate component features/auth/register --standalone

# 6. Crear páginas principales
ng generate component features/compras --standalone
ng generate component features/proveedores --standalone
ng generate component features/almacenamiento --standalone
ng generate component features/calendario --standalone
ng generate component features/contactos --standalone
ng generate component features/permisos --standalone

# 7. Ejecutar
ng serve
```

---

## 🆘 Problemas comunes

### Error: "Cannot find module..."

**Solución:** Ejecuta `npm install`

### Error: "Port 4200 is already in use"

**Solución:** Ejecuta en otro puerto: `ng serve --port 4201`

### No se ven los estilos de Bootstrap

**Solución:** Verifica que agregaste Bootstrap en `angular.json`

### Los íconos no se muestran

**Solución:** Verifica que agregaste Bootstrap Icons en `index.html`

---

## 📚 Glosario (Palabras importantes)

- **Componente**: Una pieza de la interfaz (como un botón o una página)
- **Servicio**: Un ayudante que hace tareas específicas
- **Ruta**: Una dirección (como `/login` o `/compras`)
- **Standalone**: Componente independiente que no necesita módulos
- **RouterOutlet**: Espacio donde se muestran las páginas
- **ngOnInit**: Función que se ejecuta cuando el componente se carga
- **Constructor**: Función que se ejecuta al crear el componente

---

## 🎓 Próximos pasos

1. Agregar más funcionalidad a las páginas
2. Conectar con una base de datos
3. Agregar autenticación real
4. Crear formularios para agregar datos
5. Agregar tablas para mostrar información

---

**¡Felicidades! Has completado la guía. 🎊**

Si tienes dudas, revisa cada sección paso a paso.
