import type { Request, Response } from 'express';

export async function createTransfer(req: Request, res: Response): Promise<void> {
  // ✅ userId extraído del JWT verificado por el middleware
  // ❌ NUNCA usar req.body.userId
  const { userId, email } = req.user!;
  const { monto, cuentaDestino } = req.body;

  console.log(`Transferencia autorizada — userId del token: ${userId}`);

  res.status(200).json({
    message: 'Transferencia procesada exitosamente',
    detalles: {
      usuarioOrigen: userId,
      cuentaDestino,
      monto,
    },
  });
}