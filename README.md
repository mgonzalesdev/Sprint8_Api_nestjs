# 🚀 API de Usuarios y Productos - NestJS & MySQL

API construida con **NestJS**, **TypeORM** y **MySQL**. Incluye un sistema completo de Autenticación (JWT) y Autorización basada en Roles (RBAC).

## 📌 Características
- 🔐 **Autenticación:** Login seguro con JWT y cifrado de contraseñas con Bcrypt.
- 🛡️ **Autorización:** Control de acceso por roles (`admin`, `user`, `editor`).
- 👥 **Gestión de Usuarios:** Registro único por email y perfiles.
- 📦 **Gestión de Productos:** Catálogo público y gestión privada (CRUD).
- 🗄️ **Base de Datos:** Relaciones relacionales con MySQL y TypeORM.

---

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/mgonzalesdev/Sprint8_Api_nestjs
cd <nombre-de-la-carpeta> 
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Variables de Entorno  
Crea un archivo .env en la raíz del proyecto y configura tus credenciales:
```bash
env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_password
DB_DATABASE=nombre_de_tu_bd
JWT_SECRET=tu_firma_secreta
```

### 4. Ejecución del proyecto  
```bash
# Modo desarrollo
npm run start:dev
```

## 🛣️ Endpoints Principales

### Autenticación & Usuarios

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| **POST** | `/users` | Registrar un nuevo usuario | Público |
| **POST** | `/auth/login` | Iniciar sesión y obtener JWT | Público |
| **GET** | `/users` | Listar todos los usuarios | Admin |

### Productos

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| **GET** | `/products` | Ver catálogo de productos | Público |
| **POST** | `/products` | Registrar un nuevo producto | Admin / User |
| **PATCH** | `/products/:id` | Editar un producto | Propietario / Admin |
| **DELETE** | `/products/:id` | Eliminar un producto | Propietario / Admin |
| **GET** | `/products/categories` | Lista de categorías | Público |
| **GET** | `/products/statuses` | Listar estados de productos | Público |
| **GET** | `/products/conditions` | Listar condiciones de productos | Público |


### Estadisticas  
| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |  
| **GET** | `/stats/pie-category` | Datos para grafico pastel  | Público |  
| **GET** | `/stats/bar-trends` | Datos grafico de barras | Público |  
| **GET** | `/stats/summary` | Datos consolidados | Público |  
---  


## 🔐 Seguridad (Roles)
*   **`user`**: Rol por defecto al registrarse. Puede ver el catálogo y gestionar sus propios productos.
*   **`admin`**: Acceso total. Puede gestionar cualquier usuario y cualquier producto del sistema.

> **Nota:** Para crear el primer Admin, registra un usuario normal y cambia manualmente el campo `role` a `admin` en la base de datos MySQL.

---

## 🚀 Pruebas en Postman
1. Importa la colección en **Postman**.
2. En el login, el `access_token` recibido debe enviarse en el **Header** de las rutas protegidas como:
   `Authorization: Bearer <tu_token>`

---

## 🧰 Tecnologías utilizadas
*   **NestJS** - Framework Node.js
*   **TypeORM** - ORM para SQL
*   **MySQL** - Motor de base de datos
*   **Passport.js** - Middleware de autenticación
*   **Bcrypt** - Cifrado de contraseñas




