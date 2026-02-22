import { Router } from "express";
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController";


const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);

// AJUSTAR EN CASO DE ERROR
// router.delete('/:id', deleteUser);
router.get('/delete/:id', deleteUser);

export default router;