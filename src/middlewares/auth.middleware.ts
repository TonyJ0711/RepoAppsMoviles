import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extensión del tipo Request de Express para incluir req.user
declare global {
  namespace Express {
    interface Request {
      user?: { userId: number; email: string };
    }
  }
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // El token viaja en el header, no en el body
  // Formato estándar Bearer: "Authorization: Bearer <token>"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token requerido' });
    return;
  }

  try {
    // jwt.verify lanza una excepción si:
    // - La firma no coincide con JWT_SECRET
    // - El token está expirado
    // - El token fue manipulado
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as { userId: number; email: string };

    // req.user queda disponible para todos los middlewares y controladores siguientes
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
}