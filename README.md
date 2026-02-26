# 🌾 AgroSistema - Control de Inventario y Semillas

Sistema integral para la gestión de stock, bitácora de movimientos y control técnico de semillas certificadas. Desarrollado utilizando el stack Node.js, TypeScript, MongoDB y Tailwind CSS v4.

---

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

Node.js (v18 o superior)

MongoDB (Local o MongoDB Atlas)

npm (Incluido con Node.js)

---

# 🚀 Guía de Instalación y Uso

## 1. Clonar el repositorio

```bash
git clone [https://github.com/EnderLeonardo18/mongo-web-app](https://github.com/EnderLeonardo18/mongo-web-app)
```

```bash
cd mongo-web-app
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Configurar variables de entorno

Crea un archivo llamado **.env** en la raíz del proyecto y pega el siguiente contenido:

### Puerto donde correrá el servidor
``` env
PORT=3000
```
### URL de conexión a MongoDB
```env
MONGO_URI=mongodb://localhost:27017/web_app_db
```

## 4. Ejecutar la aplicación

#### **Modo desarrollo**

Ideal para programar, incluye recarga automática al detectar cambios:
```env
npm run dev
```

### **Modo producción**

Para ejecutar la aplicación de forma optimizada:

### Compilar el código TypeScript
```bash
npm run build
```

## Iniciar el servidor compilado
```bash
npm start
```

### 🛠️ Tecnologías utilizadas


- **Backend:** Node.js & Express
- **Lenguaje:** TypeScript
- **Base de Datos:** MongoDB (Mongoose)
- **Frontend:** HTML5 (ejx) & Tailwind CSS v4