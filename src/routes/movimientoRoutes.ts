import { Router } from "express";
import { 
    getAllMovimientos, 
    createMovimiento 
} from "../controllers/movimientoController";

const router = Router();

router.get('/', getAllMovimientos);
router.post('/', createMovimiento);

export default router;