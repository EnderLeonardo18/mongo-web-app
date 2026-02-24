import { Router } from "express";
import { 
    getAllMovimientos, 
    createMovimiento, 
    getMovimientoById,
    updateMovimiento,
    deleteMovimiento
} from "../controllers/movimientoController";

const router = Router();

router.get('/', getAllMovimientos);
router.get('/:id', getMovimientoById);
router.post('/', createMovimiento);

// Se usa POST o PUT según prefieras en el form
router.put('/:id', updateMovimiento);
router.get('/delete/:id', deleteMovimiento);
export default router;