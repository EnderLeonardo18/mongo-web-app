import { Router } from "express";
import { 
    getAllReportes, 
    getReporteById, 
    createReporte, 
    deleteReporte, 
    updateReporte
} from "../controllers/reporteController";

const router = Router();

router.get('/', getAllReportes);
router.get('/:id', getReporteById);
router.post('/', createReporte);

// Se usa POST o PUT según prefieras en el form
router.put('/:id', updateReporte);
router.get('/delete/:id', deleteReporte);

export default router;