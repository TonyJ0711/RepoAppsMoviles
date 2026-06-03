import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const mockUsers = [
  {
    id: 45,
    email: 'ejemployavirac@gmail.com',
    password: '123456',
  },
];

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  const user = mockUsers.find((u) => u.email === email);
  if (!user) {
    res.status(401).json({ message: 'Credenciales inválidas' });
    return;
  }

  if (password !== user.password) {
    res.status(401).json({ message: 'Credenciales inválidas' });
    return;
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );

  res.status(200).json({ token });
}