import { Router } from "express";
import { getAllSacos, createSaco, updateSaco, deleteSaco } from "../controllers/inventarioSacoController";

const router = Router();
router.get('/', getAllSacos);
router.post('/', createSaco);
router.put('/:id', updateSaco);
router.get('/delete/:id', deleteSaco);
export default router;