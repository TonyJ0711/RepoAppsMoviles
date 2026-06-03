import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './features/auth/auth.routes';
import taskRoutes from './routes/tasks.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', taskRoutes); // ← agrega esta línea

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});