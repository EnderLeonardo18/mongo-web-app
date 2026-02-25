import { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController";

// Configura las rutas para la administración de usuarios y accesos
const router = Router();

// Define las rutas para el CRUD completo de la gestión de personal
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);

// Ruta para dar de baja o eliminar usuarios del sistema
router.get('/delete/:id', deleteUser);

export default router;