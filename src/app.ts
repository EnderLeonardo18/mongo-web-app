import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"
import userRoutes from './routes/userRoutes';
import methodOverride from "method-override";
import  indexRoutes from '../src/routes/index'

import connectDB from "./config/db";

// Configuración para __dirname en ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Cargar las variables de entorno
dotenv.config();
const app = express();

// Conexión a la BD
connectDB()


// Motor de vistas
app.set('view engine', 'ejs');app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, '../views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method')); // Permite usar PUT y DELETE en formularios
app.use(express.static(path.join(__dirname, '../public')));


// Registra el enrutador central que coordina todos los módulos del sistema
app.use(indexRoutes);
// Establece la redirección inicial para enviar al usuario a la pantalla principal
app.use('/', (req, res) => res.redirect('/usuarios'));


// Inicia el servidor en el puerto configurado y muestra el enlace de acceso
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}/usuarios`);
})