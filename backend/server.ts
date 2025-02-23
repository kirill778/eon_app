import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import routes from './src/routes';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

dotenv.config();

const app = express();

// Настройка CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://185.197.75.250:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

// Добавляем парсер для cookies
app.use(cookieParser());

// Парсер для JSON
app.use(express.json());

// Подключаем маршруты
app.use('/api', routes);

// Обновляем обработчик логина
app.post('/auth/login', async (req: Request, res: Response): Promise<void> => {
  console.log('Login attempt:', req.body);

  const { username, password } = req.body;
  
  // Hardcoded credentials for testing
  const ADMIN_USERNAME = 'admin@yandex.ru';
  const ADMIN_PASSWORD = '1234';

  try {
    if (!username || !password) {
      res.status(400).json({ error: 'Необходимо указать логин и пароль' });
      return;
    }

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      console.log('Invalid credentials');
      res.status(401).json({ error: 'Неверный логин или пароль' });
      return;
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: 1, username: ADMIN_USERNAME },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Set token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.json({ 
      message: 'Успешная авторизация',
      user: { id: 1, username: ADMIN_USERNAME }
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

const PORT = parseInt(process.env.PORT || '5000', 10);

// Обработчик GET /
app.get("/", (req: express.Request, res: express.Response) => {
  res.json({ status: "ok", message: "Backend API is running" });
});

// Обработчик для всех остальных маршрутов
app.use('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

// Запуск сервера
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;