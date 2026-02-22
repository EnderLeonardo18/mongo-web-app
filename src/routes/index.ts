// En src/app.ts
import { Router } from 'express';
import userRoutes from '../routes/userRoutes';
import sacoRoutes from '../routes/inventarioSacoRoutes';
import semillaRoutes from '../routes/semillaRoutes';
import movimientoRoutes from '../routes/movimientoRoutes';
import reporteRoutes from '../routes/reporteRoutes';

const router = Router();

// Rutas unificadas
router.use('/usuarios', userRoutes);
router.use('/sacos', sacoRoutes);
router.use('/semillas', semillaRoutes);
router.use('/movimientos', movimientoRoutes);
router.use('/reportes', reporteRoutes)

export default router;