"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { apiRequest } from '@/config/api'

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const data = await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });
      
      router.push("/courses")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-login flex flex-col items-center px-4 relative">
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover" 
        style={{ backgroundImage: "url('/Enter_begin_black.svg')" }}
      />
      <div className="w-full max-w-md pt-[10px] relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-[10px]">
          <h1 className="text-white/30 font-inter text-[20px] leading-[24.2px] font-normal ml-[30px]">Вход</h1>
          <button className="rounded-full p-2 hover:bg-white/10 transition-colors">
            <svg 
              width="38" 
              height="38" 
              viewBox="0 0 38 38" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/60"
            >
              <path 
                d="M26.0068 11.998L19 19.0036L26.0068 26.0091" 
                stroke="currentColor" 
                strokeMiterlimit="22.9256" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 11.998L19.0068 19.0036L12 26.0091" 
                stroke="currentColor" 
                strokeMiterlimit="22.9256" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M8.52334 4.36112C11.4738 2.24518 15.0918 0.999993 19 0.999993C28.9411 0.999994 37 9.05886 37 19C37 28.9411 28.9411 37 19 37C9.05886 37 1 28.9411 1 19C1 16.0815 1.69371 13.3256 2.92728 10.8889" 
                stroke="currentColor" 
                strokeMiterlimit="22.9256" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-[15px]">
          <div className="relative w-[120px] h-[120px]">
            <svg width="120" height="120" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <circle cx="43.5" cy="43.5" r="43" stroke="url(#paint0_linear_border)"/>
              <defs>
                <linearGradient id="paint0_linear_border" x1="31.0714" y1="35.7321" x2="64.4732" y2="62.9196" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.15"/>
                  <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.25"/>
                </linearGradient>
              </defs>
            </svg>
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 101 101" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 text-white/60"
            >
              <path d="M59.3436 34.4473C59.3436 38.2829 56.3441 41.4195 52.6722 41.4195C49.0047 41.4195 46.0007 44.5562 46.0007 48.3918V67.6983C46.3193 71.2464 44.1294 74.4273 40.4707 75.405" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M62.6212 75.4046C58.9625 74.4225 56.7726 71.246 57.0912 67.6979C57.0912 63.8136 57.0912 51.4971 57.0912 49.9531" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M57.4453 61.2751C66.7004 68.3049 79.8 58.3287 73.9204 48.0605C75.575 46.8394 76.4421 44.946 76.566 43.0215C76.6899 41.1192 76.0882 39.1903 74.8141 37.8587C72.1243 35.0494 66.8906 35.5316 64.8733 39.062" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M41.6732 36.4941C41.6732 36.4941 40.5362 39.9051 42.9296 41.7764" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M54.1982 41.3332C54.1982 41.3332 55.3883 41.3066 55.7113 41.311C56.773 41.311 59.0647 41.7711 59.9628 43.9168" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M51.5254 75.4064V60.4355C51.5254 56.883 49.1762 54.1312 45.8892 53.5561C42.7525 53.0075 39.147 53.5826 39.6778 48.3888C34.2672 52.0298 26.7021 48.2384 26.7021 41.5183C26.7021 36.2272 31.5863 32.334 36.7049 33.4223C35.4086 26.1315 44.1594 23.4815 47.6323 28.0869" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M69.6867 35.9017C69.5672 35.508 69.4301 35.1143 69.2752 34.7294C67.1296 29.3763 61.8915 25.5938 55.7731 25.5938C50.3448 25.5938 45.6111 28.5711 43.1115 32.9775C42.3904 34.2516 42.1603 35.2072 41.6693 36.4901C40.3819 40.1444 36.3383 42.0777 32.6885 40.7859" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path d="M67.3285 45.0879C67.3285 50.6931 62.8292 55.2455 57.2461 55.3295" stroke="currentColor" strokeWidth="1.2" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M47.5093 28.025C48.2892 27.5068 48.1588 27.0725 47.8848 26.9496C47.6958 27.5272 47.6257 27.5063 47.7836 26.9194C47.487 26.8724 47.139 27.1652 47.5093 28.025Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M67.2469 63.2063C69.0381 63.7458 69.5401 62.9918 69.3802 62.4136C68.2505 62.8588 68.1933 62.7243 69.2976 62.2193C68.9919 61.703 68.0979 61.5407 67.2469 63.2063Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M36.039 32.5324C34.9781 32.8116 34.9581 33.3424 35.2153 33.5825C35.6437 33.0137 35.7135 33.0634 35.3162 33.6543C35.6272 33.8188 36.124 33.6259 36.039 32.5324Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-8 flex flex-col items-center">
          <div className="relative inline-block w-[300px] h-14">
            {/* SVG на заднем плане */}
            <svg
              width="300"
              height="56"
              viewBox="0 0 300 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              <rect
                x="0.5"
                y="0.5"
                width="299"
                height="55"
                rx="27.5"
                stroke="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="100"
                  y1="20"
                  x2="110"
                  y2="60"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.15" />
                  <stop offset="0.51" stopColor="white" stopOpacity="0.8" />
                  <stop offset="1" stopColor="white" stopOpacity="0.25" />
                </linearGradient>
              </defs>
            </svg>

            {/* Input поверх SVG */}
            <input
              type="email"
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              required
              className="absolute inset-0 bg-transparent border-none text-white placeholder:text-white/60 text-lg rounded-full text-center focus:outline-none"
            />
          </div>

          <div className="relative inline-block w-[300px] h-14">
            <svg 
              width="279" 
              height="45" 
              viewBox="0 0 279 45" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              <rect 
                x="0.5" 
                y="0.5" 
                width="278" 
                height="44" 
                rx="22" 
                stroke="url(#paint0_linear_1750_17023)"
              />
              <defs>
                <linearGradient 
                  id="paint0_linear_1750_17023" 
                  x1="99.6429" 
                  y1="18.4821" 
                  x2="106.371" 
                  y2="52.4371" 
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0.15"/>
                  <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.25"/>
                </linearGradient>
              </defs>
            </svg>

            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="absolute inset-0 bg-transparent border-none text-white placeholder:text-white/60 text-lg rounded-full text-center focus:outline-none w-full"
              disabled={isLoading}
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div className="flex justify-center">
            <Button 
              type="submit"
              className="w-[150px] bg-[#0A724A]
               hover:bg-[#22c55e]/90 text-white h-[40px]
                text-lg font-normal
                rounded-full shadow-[0_1px_1px_0_rgba(29,188,127,1)_inset]"
              disabled={isLoading}
            >
              {isLoading ? "Вход..." : "Войти"}
            </Button>
          </div>
        </form>

        {/* Social Login */}
        <div className="text-center mb-8">
          <p className="text-white/60 mb-4">Войти через</p>
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-full bg-[#229ED9] hover:opacity-90 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm5.64 8.35c-.19 1.72-.89 5.92-1.25 7.85-.17.91-.5 1.21-.82 1.24-.7.07-1.22-.46-1.89-.9-.89-.59-1.39-.96-2.25-1.54-1-.66-.35-1.02.22-1.62.15-.15 2.72-2.5 2.77-2.71.01-.03.01-.14-.07-.19s-.21-.03-.3-.02c-.13.03-2.19 1.4-6.16 4.12-.58.4-1.11.6-1.59.58-.52-.02-1.52-.29-2.27-.54-.91-.31-1.14-.46-1.09-.72.03-.14.32-.28.89-.44 3.48-1.51 5.8-2.51 6.97-2.99 3.32-1.37 4.01-1.61 4.46-1.62.1 0 .32.02.46.1.12.07.19.15.22.27.03.13.02.29.02.29z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-white hover:opacity-90 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                />
                <path
                  fill="#34A853"
                  d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
                />
                <path
                  fill="#EA4335"
                  d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-black hover:opacity-90 transition-opacity">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="space-y-4 flex flex-col items-center">
          <Button
            type="submit"
            className="w-[182px] h-[44px] bg-[rgba(10,114,74,1)] hover:bg-[#22c55e]/90 text-white font-inter font-semibold text-[15px] leading-[18.15px] text-center rounded-full shadow-[0_1px_1px_0_rgba(36,186,128,1)_inset]"
            onClick={() => router.push('/signup')}
          >
            Создать аккаунт
          </Button>
          <Button 
            variant="ghost" 
            className="w-[182px] h-[44px] bg-[rgba(255,255,255,0.05)] text-white font-inter font-semibold text-[15px] leading-[18.15px] text-center rounded-full shadow-[0_1px_1px_0_rgba(255,255,255,0.5)_inset]"
          >
            Войти как гость
          </Button>
        </div>
      </div>
    </div>
  )
}

