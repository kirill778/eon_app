import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Create a real PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Successfully connected to PostgreSQL');
  }
});

// Define interfaces for different types of database rows
interface TimeRow {
  now: string;
}

interface UserRow {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface UserBasicRow {
  id: number;
  username: string;
  email: string;
}

interface CourseRow {
  id: number;
  title: string;
  description: string;
}

// SQL для создания таблицы пользователей
const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );
`;

// Создаем таблицу при инициализации
pool.query(createUsersTable)
  .then(() => console.log('Users table created or already exists'))
  .catch(err => console.error('Error creating users table:', err));

export default pool;