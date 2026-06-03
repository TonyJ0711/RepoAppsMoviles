import { Router } from 'express';
import { login } from './auth.controller';

const router = Router();

// POST /api/auth/login — endpoint público, no requiere token
router.post('/login', login);

export default router;