// Определяем базовый URL API в зависимости от окружения
const getApiUrl = () => {
  // Проверяем, что мы в браузере
  if (typeof window === 'undefined') {
    return 'http://185.197.75.250:5000';
  }
  
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:5000';
  }
  return 'http://185.197.75.250:5000';
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://185.197.75.250:5000/api';

export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Произошла ошибка');
  }

  return response.json();
};