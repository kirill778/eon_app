const isDevelopment = process.env.NODE_ENV === 'development';
const LOCAL_IP = '192.168.1.4'; // Замените на IP вашего компьютера

export const API_URL = isDevelopment 
  ? `http://${LOCAL_IP}:5000/api`
  : 'https://eon-backend.onrender.com/api';

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
    throw new Error(error.error || 'Что-то пошло не так');
  }

  return response.json();
};