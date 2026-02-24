import { Router } from "express";
import { getAllSacos, getSacoById ,createSaco, updateSaco, deleteSaco } from "../controllers/inventarioSacoController";

// Inventario Sacos
const router = Router();

router.get('/', getAllSacos);
router.get('/:id', getSacoById);
router.post('/', createSaco);

// Se usa POST o PUT según prefieras en el form
router.put('/:id', updateSaco); 
router.get('/delete/:id', deleteSaco);
export default router;