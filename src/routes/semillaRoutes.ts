import { Router } from "express";
import { getAllSemillas, createSemilla, getSemillaById, updateSemilla, deleteSemilla } from "../controllers/semillaController";

const router = Router();

router.get('/', getAllSemillas);
router.get('/:id', getSemillaById);
router.post('/', createSemilla);

// Se usa POST o PUT según prefieras en el form
router.put('/:id', updateSemilla);
router.get('/delete/:id', deleteSemilla);

export default router;