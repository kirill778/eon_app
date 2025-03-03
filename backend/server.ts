import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import routes from './src/routes';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import pool from './src/config/db';

dotenv.config();

const app = express();

// Настройка CORS
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://185.197.75.250',
    'http://185.197.75.250:3000',
    'https://185.197.75.250',
    'https://185.197.75.250:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With'],
  exposedHeaders: ['Set-Cookie']
}));

// Добавляем парсер для cookies
app.use(cookieParser());

// Парсер для JSON
app.use(express.json());

// Добавим middleware для логирования запросов
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  if (req.method === 'POST') console.log('Body:', req.body);
  next();
});

// Подключаем маршруты
app.use('/api', routes);

// Обработчик GET /
app.get("/", (req: express.Request, res: express.Response) => {
  res.json({ status: "ok", message: "Backend API is running" });
});

app.post('/api/auth/guest', (req: Request, res: Response) => {
  try {
    // Создаем временный токен для гостя
    const token = jwt.sign(
      { userId: 'guest', role: 'guest' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Устанавливаем токен в куки
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.json({ 
      message: 'Гостевой вход выполнен успешно',
      user: { id: 'guest', role: 'guest' }
    });
  } catch (error) {
    console.error('Guest login error:', error);
    res.status(500).json({ error: 'Ошибка при создании гостевой сессии' });
  }
});

// Обработчик для всех остальных маршрутов
app.use('*', (req: express.Request, res: express.Response) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

// Запуск сервера
const PORT = parseInt(process.env.PORT || '5000', 10);

const server = app.listen(PORT, '0.0.0.0', async () => {
  console.log(`Server is running on port ${PORT}`);

  // Проверяем подключение к базе данных
  try {
    await pool.query('SELECT NOW()');
    console.log('Successfully connected to PostgreSQL');
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
});

export default app;