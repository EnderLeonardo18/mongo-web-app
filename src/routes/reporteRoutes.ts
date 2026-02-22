import { Router } from "express";
import { 
    getAllReportes, 
    getReporteById, 
    createReporte, 
    deleteReporte 
} from "../controllers/reporteController";

const router = Router();

router.get('/', getAllReportes);
router.get('/:id', getReporteById);
router.post('/', createReporte);
router.get('/delete/:id', deleteReporte);

export default router;