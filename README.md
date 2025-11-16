# 🚀 Ingeniería LS – Plataforma de Gestión de Servicios Técnicos

Plataforma web completa para la gestión de clientes, técnicos, reservas de servicios, inventario de equipos y administración general.
Desarrollada para la empresa **Ingeniería LS**, especializada en mantenimiento de básculas, balanzas y sierras cárnicas.

---

## 🌐 Enlaces del Proyecto

### 🖥️ **Frontend (Producción – Vercel)**

👉 [https://ingenieria-ls-lrnf.vercel.app/](https://ingenieria-ls-lrnf.vercel.app/)

### ⚙️ **Backend / API (Producción – Render)**

👉 [https://ingenierials.onrender.com/](https://ingenierials.onrender.com/)

---

# 📁 Estructura del Proyecto

El proyecto está dividido en:

```
/frontend
/backend
```

Ambos funcionan de manera independiente, pero integrados mediante API REST.

---

# 🎨 FRONTEND – React + TypeScript + Vite

### 🔧 Tecnologías principales

- **React 18**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **Axios**
- **Context API (manejo de autenticación)**
- **CSS Modules / Estilos personalizados**

### 📌 Funcionalidades del Frontend

### 👤 **Autenticación**

- Registro de usuarios
- Inicio de sesión
- Cambio de contraseña
- Recuperación de contraseña por correo
- Edición de perfil
- Manejo de roles y rutas protegidas

### 📅 **Gestión de Reservas**

- Cliente: crear y ver sus reservas
- Técnico: ver sus reservas asignadas y cambiar estado
- Admin: ver todas las reservas

Estados disponibles:

- Pendiente
- Confirmada
- Finalizada
- Cancelada

### 🛠️ **Inventario de Equipos**

- CRUD completo de equipos
- Código autogenerado (EQ-001, EQ-002, ...)
- Campos: nombre, marca, modelo, estado
- Ventanas modales para editar y eliminar

### 👥 **Gestión de Usuarios (Administrador)**

- Listar usuarios
- Cambiar roles
- Activar / desactivar usuarios
- Edición de datos

### 🔐 **Rutas protegidas por roles**

- cliente
- técnico
- asesor
- administrador (acceso total)

---

# ⚙️ BACKEND – Node.js + Express + MongoDB

### 🔧 Tecnologías principales

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT (autenticación)**
- **bcryptjs (hash de contraseñas)**
- **Nodemailer (recuperación por correo)**
- **CORS**
- **Dotenv**

---

# 📌 Funcionalidades del Backend

## 🔐 Autenticación y Seguridad

- Registro de usuarios
- Login con JWT
- Cambio de contraseña (requiere token)
- Recuperación de contraseña mediante enlace por correo
- Restablecimiento usando token temporal

## 📅 API de Reservas

Rutas:

```
POST    /reservas
GET     /reservas
GET     /reservas?clienteId=
GET     /reservas?tecnicoAsignado=
PUT     /reservas/:id
DELETE  /reservas/:id
```

## 🛠️ API de Inventario (Equipos)

Rutas:

```
GET     /equipos
POST    /equipos
PUT     /equipos/:id
DELETE  /equipos/:id
```

Incluye autogeneración de código:

```
EQ-001
EQ-002
EQ-003 ...
```

## 👥 API de Usuarios

Rutas:

```
GET     /usuarios
POST    /usuarios
PUT     /usuarios/:id
DELETE  /usuarios/:id
```

Roles:

- cliente
- técnico
- asesor
- administrador

---

# 🧪 Cómo ejecutar el proyecto localmente

## 1️⃣ Clonar repositorio

```
git clone https://github.com/tu-repo/IngenieriaLS.git
cd IngenieriaLS
```

---

# ⚙️ BACKEND – Instalación y ejecución

### 📁 Entrar a la carpeta backend:

```
cd backend
```

### 📦 Instalar dependencias:

```
npm install
```

### ▶️ Ejecutar el servidor:

```
npm start
```

El backend corre en:

```
http://localhost:4000
```

---

# 🎨 FRONTEND – Instalación y ejecución

### 📁 Entrar a la carpeta frontend:

```
cd frontend
```

### 📦 Instalar dependencias:

```
npm install
```

### ▶️ Ejecutar la app:

```
npm run dev
```

Frontend disponible en:

```
http://localhost:5173
```

---

# 🌍 Despliegue

### 🚀 Frontend – Vercel

- Deploy automático desde GitHub
- Manejo de SPA para rutas protegidas
- Configuración de `vercel.json` para evitar errores 404

### 🛠️ Backend – Render

- Deploy automático por GitHub
- Servidor siempre activo (modo web service)
- Variables de entorno seguras

---

# 🤝 Contribuciones

¡Las contribuciones son bienvenidas!
Abre un **issue** o **pull request** en GitHub para mejoras o errores.

---

# 📄 Licencia

Proyecto bajo licencia **MIT**.
Libre para uso personal y comercial.

---
