import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import routes from './src/routes';

dotenv.config();

const app = express();

// Настройка CORS
app.use(cors({
  origin: function(origin, callback) {
    // В режиме разработки разрешаем все источники
    callback(null, true);
  },
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

const PORT = parseInt(process.env.PORT || '5000', 10);
const HOST = '0.0.0.0'; // Слушаем все сетевые интерфейсы

// Обработчик GET /
app.get("/", (req: express.Request, res: express.Response) => {
  res.json({ message: "Backend работает!" });
});

// Обработчик POST /api/hello
const helloHandler: express.RequestHandler = (req, res): void => {
  const { name } = req.body;
  
  if (!name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }
  
  res.json({ message: `Привет, ${name}!` });
};

app.post("/api/hello", helloHandler);

app.listen(5000, 'localhost', () => {
  console.log(`Server is running on http://localhost:5000`);
});