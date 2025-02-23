import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  
  // Защищенные маршруты
  const protectedPaths = ['/courses', '/course', '/account']
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Только перенаправляем на логин если пытаемся зайти на защищенный маршрут без токена
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/courses/:path*', '/course/:path*', '/account/:path*']
} 