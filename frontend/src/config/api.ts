const API_URL = 'http://localhost:5000'; // Уберем /api из базового URL

export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  console.log('Making request to:', `${API_URL}${endpoint}`); // Добавим логирование

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Important for cookies
    });

    console.log('Response status:', response.status); // Добавим логирование

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Произошла ошибка');
    }

    return response.json();
  } catch (error) {
    console.error('API Request error:', error); // Добавим логирование
    throw error;
  }
};