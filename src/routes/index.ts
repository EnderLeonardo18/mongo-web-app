// Este es el enrutador principal
import { Router } from 'express';
import userRoutes from '../routes/userRoutes';
import sacoRoutes from '../routes/inventarioSacoRoutes';
import semillaRoutes from '../routes/semillaRoutes';
import movimientoRoutes from '../routes/movimientoRoutes';
import reporteRoutes from '../routes/reporteRoutes';

// Inicializa el enrutador principal de la aplicación
const router = Router();

// Puntos de entrada globales para cada módulo del sistema
router.use('/usuarios', userRoutes);
router.use('/sacos', sacoRoutes);
router.use('/semillas', semillaRoutes);
router.use('/movimientos', movimientoRoutes);
router.use('/reportes', reporteRoutes)

export default router;