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

const API_URL = getApiUrl();

export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  console.log('Making request to:', `${API_URL}${endpoint}`);

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Произошла ошибка');
    }

    return response.json();
  } catch (error) {
    console.error('API Request error:', error);
    throw error;
  }
};