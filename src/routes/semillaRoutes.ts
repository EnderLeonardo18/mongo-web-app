import { Router } from "express";
import { getAllSemillas, createSemilla } from "../controllers/semillaController";

const router = Router();
router.get('/', getAllSemillas);
router.post('/', createSemilla);
export default router;