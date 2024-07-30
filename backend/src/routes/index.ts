import { Router } from 'express';
import authRoutes from './auth/authRoutes';
import panelRoutes from './protected/panelRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/panel', panelRoutes);

export default router;
