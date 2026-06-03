import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middleware';
import { createTransfer } from '../controllers/tasks.controllers';

const router = Router();

// authenticateToken se ejecuta primero — si falla, createTransfer nunca corre
router.post('/transfer', authenticateToken, createTransfer);

export default router;