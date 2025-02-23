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