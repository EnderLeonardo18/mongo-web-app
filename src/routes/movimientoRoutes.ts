import { Router } from "express";
import { getAllMovimientos, createMovimiento, getMovimientoById,updateMovimiento, deleteMovimiento } from "../controllers/movimientoController";

// Configura las rutas para la bitácora de movimientos de almacén
const router = Router();

// Define las rutas para el control de flujo de entradas y salidas
router.get('/', getAllMovimientos);
router.get('/:id', getMovimientoById);
router.post('/', createMovimiento);
router.put('/:id', updateMovimiento);

// Ruta para remover registros de la bitácora de movimientos
router.get('/delete/:id', deleteMovimiento);

export default router;