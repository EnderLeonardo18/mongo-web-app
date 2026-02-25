import { Router } from "express";
import { getAllSemillas, createSemilla, getSemillaById, updateSemilla, deleteSemilla } from "../controllers/semillaController";

// Configura las rutas para el control de semillas certificadas
const router = Router();

// Define las rutas para el manejo de variedades y lotes de semillas
router.get('/', getAllSemillas);
router.get('/:id', getSemillaById);
router.post('/', createSemilla);
router.put('/:id', updateSemilla);

// Ruta para descartar registros de lotes de semillas
router.get('/delete/:id', deleteSemilla);

export default router;