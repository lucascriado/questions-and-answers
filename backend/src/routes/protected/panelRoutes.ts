import { Router } from 'express';
import { users } from '../../controllers/panelController';
import { verifyToken } from '../../middlewares/verifyToken';

const router = Router();

router.get('/users', verifyToken, users);

export default router;
