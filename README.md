# 📚 PF Ovejero — Plataforma de Cursos Online

Proyecto final desarrollado con **Angular 17**, **NgRx** y **json-server**. Plataforma de gestión de cursos con panel de administración, usuarios, productos, ventas y profesores.

---

## 🔗 Demo en vivo

- **Frontend:** [https://pf-ovejero.vercel.app](https://pf-ovejero.vercel.app) ← *(actualizar con tu URL de Vercel)*
- **Backend:** [https://pf-ovejero-backend.onrender.com](https://pf-ovejero-backend.onrender.com) ← *(actualizar con tu URL de Render)*

---

## 🔐 Credenciales de demo

| Rol   | Email            | Contraseña  |
|-------|------------------|-------------|
| Admin | admin@test.com   | Admin1234   |
| User  | sasuke@test.com  | Sasuke123   |

---

## 🛠️ Tecnologías

- Angular 17 con lazy loading
- NgRx (Store, Effects, Selectors)
- json-server como API REST mock
- Angular Material
- SweetAlert2
- SCSS

---

## 💻 Correr localmente

### 1. Clonar el repositorio
```bash
git clone https://github.com/ovejero92/PF-Ovejero.git
cd PF-Ovejero
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar el backend (json-server)
```bash
npx json-server --watch db.json
```
> El servidor queda corriendo en `http://localhost:3000`

### 4. Levantar el frontend (en otra terminal)
```bash
ng serve
```
> La app queda disponible en `http://localhost:4200`

---

## 🏗️ Build para producción

```bash
ng build
```
Los archivos generados quedan en el directorio `dist/`.

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── core/              # Guards, servicios globales
│   ├── layout/
│   │   ├── auth/          # Login y registro
│   │   ├── dashboard/     # Panel principal (users, products, sales, teachers)
│   │   ├── paintboard/    # Módulo de carts
│   │   └── statistics/    # Estadísticas
│   └── store/             # NgRx (auth)
└── environments/          # Variables de entorno
```
<!-- # PfGustavo53200

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Back `json-server --watch db.json` to start.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
