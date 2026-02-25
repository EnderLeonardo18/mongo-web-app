import { Router } from "express";
import {  getAllReportes,  getReporteById,  createReporte,  deleteReporte,  updateReporte } from "../controllers/reporteController";

// Configura las rutas para la generación y consulta de reportes
const router = Router();

// Define las rutas para la administración de informes técnicos
router.get('/', getAllReportes);
router.get('/:id', getReporteById);
router.post('/', createReporte);
router.put('/:id', updateReporte);

// Ruta para la eliminación de reportes del historial
router.get('/delete/:id', deleteReporte);

export default router;