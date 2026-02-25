import { Router } from "express";
import { getAllSacos, getSacoById ,createSaco, updateSaco, deleteSaco } from "../controllers/inventarioSacoController";

// Configura las rutas para la gestión de inventario de sacos
const router = Router();

// Define las rutas para listar, visualizar, crear y actualizar registros de stock
router.get('/', getAllSacos);
router.get('/:id', getSacoById);
router.post('/', createSaco);
router.put('/:id', updateSaco); 

// Ruta para la eliminación lógica o física de sacos mediante método GET
router.get('/delete/:id', deleteSaco);

export default router;