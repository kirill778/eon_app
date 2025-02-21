/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Отключаем проверку ESLint при production сборке
    ignoreDuringBuilds: true,
  },
  // Отключаем строгий режим для упрощения разработки
  reactStrictMode: false,
  // Разрешаем использование внешних изображений
  images: {
    domains: ['images.unsplash.com'], // Разрешаем загрузку изображений с unsplash
  },
}

module.exports = nextConfig 