import express, { Request, Response, Router } from 'express';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/db';

const router: Router = express.Router();

// Тестовый маршрут для проверки подключения к БД
router.get('/test', async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    res.json({ serverTime: rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Маршрут для аутентификации
router.post('/auth/login', async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Проверяем обязательные поля
    if (!username || !password) {
      res.status(400).json({ error: 'Необходимо указать логин и пароль' });
      return;
    }

    // Ищем пользователя по email (username в данном случае это email)
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [username]
    );

    if (result.rows.length === 0) {
      res.status(401).json({ error: 'Неверный логин или пароль' });
      return;
    }

    const user = result.rows[0];

    // Проверяем пароль
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      res.status(401).json({ error: 'Неверный логин или пароль' });
      return;
    }

    // Создаем JWT токен
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Устанавливаем cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    // Отправляем успешный ответ
    res.json({ 
      message: 'Успешная авторизация',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для регистрации
router.post('/auth/signup', async (req: Request, res: Response): Promise<void> => {
  console.log('Получен запрос на регистрацию:', req.body);
  
  const { login, email, password, confirmPassword } = req.body;
  
  try {
    // Проверка наличия всех полей
    if (!login || !email || !password || !confirmPassword) {
      res.status(400).json({ error: 'Все поля обязательны для заполнения' });
      return;
    }

    // Проверка существования пользователя
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1 OR username = $2',
      [email, login]
    );

    if (existingUser.rows.length > 0) {
      res.status(400).json({ error: 'Пользователь с таким email или логином уже существует' });
      return;
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание пользователя
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
      [login, email, hashedPassword]
    );

    const user = result.rows[0];

    // Создание JWT токена
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Установка cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(201).json({ 
      message: 'Регистрация успешна',
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для проверки авторизации и получения данных пользователя
router.get('/auth/me', async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    console.log('Полученный токен:', token); // Для отладки

    if (!token) {
      console.log('Токен отсутствует'); // Для отладки
      res.status(401).json({ error: 'Не авторизован' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
    console.log('Декодированный токен:', decoded); // Для отладки

    const { rows } = await pool.query(
      'SELECT id, username, email FROM users WHERE id = $1',
      [decoded.userId]
    );

    if (rows.length === 0) {
      console.log('Пользователь не найден'); // Для отладки
      res.status(401).json({ error: 'Пользователь не найден' });
      return;
    }

    console.log('Найден пользователь:', rows[0]); // Для отладки
    res.json(rows[0]);
  } catch (error) {
    console.error('Ошибка при проверке авторизации:', error);
    res.status(401).json({ error: 'Не авторизован' });
  }
});

// Маршрут для получения курса по ID
router.get('/courses/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM courses WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Курс не найден' });
      return;
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка при получении курса:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

export default router;