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
      console.log('Attempting login with:', { username, password });

      await apiRequest('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });
      
      console.log('Login successful');
      router.push("/courses")
    } catch (err) {
      console.error('Login error:', err);
      setError(err instanceof Error ? err.message : "Произошла ошибка")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-login flex flex-col items-center pl-[48px] pr-[48px] relative">
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover" 
        style={{ backgroundImage: "url('/Enter_begin_black.svg')" }}
      />
      <div className="w-full max-w-md pt-[0px] relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mt-[44px] mb-[5px]">
          <h1 className="text-white/30 font-normal text-[20px] leading-[24px] absolute w-[48px] h-[24px] left-[0%] top-[8%]">Вход</h1>
          <button className="rounded-full p-2 pt-[0px] pr-[0px] transition-colors absolute right-[0%] top-[7.1%]">
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
        <div className="flex justify-center items-center mb-[10.5%] mt-[12.5%] relative">
          <div className="w-[101px] h-[101px]">
            <svg 
              width="101" 
              height="101" 
              viewBox="0 0 101 101" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute text-white/60"
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
              <circle cx="51.5" cy="49.5" r="43" stroke="url(#paint0_linear_2603_33118)"/>
              <defs>
                <linearGradient id="paint0_linear_2603_33118" x1="39.0714" y1="41.7321" x2="72.4732" y2="68.9196" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.15"/>
                  <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.25"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[28px] mb-[11.5%] flex flex-col items-center w-full">
          <div className="relative inline-block w-full h-[45px]">
            <svg
              width="100%"
              height="45"
              viewBox="0 0 100% 45"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-[45px]"
            >
              <rect
                x="0.5"
                y="0.5"
                width="99%"
                height="44"
                rx="22.5"
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
            <input
              type="text"
              placeholder="Почта"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              required
              className="absolute inset-0 bg-transparent border-none text-white placeholder:text-white/50 rounded-full text-center focus:outline-none w-full h-[45px] font-inter font-normal text-[15px] leading-[18px]"
            />
          </div>

          <div className="relative inline-block w-full h-[45px]">
            <svg
              width="100%"
              height="45"
              viewBox="0 0 100% 45"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-[45px]"
            >
              <rect
                x="0.5"
                y="0.5"
                width="99%"
                height="44"
                rx="22.5"
                stroke="url(#paint1_linear)"
              />
              <defs>
                <linearGradient
                  id="paint1_linear"
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
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="absolute inset-0 bg-transparent border-none text-white placeholder:text-white/50 rounded-full text-center focus:outline-none w-full h-[45px] font-inter font-normal text-[15px] leading-[18px]"
              disabled={isLoading}
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div className="flex justify-center mb-[28px]">
            <Button 
              type="submit"
              className="w-[150px] bg-[#0A724A] hover:bg-[#22c55e]/90 text-white h-[40px] rounded-full shadow-[0_1px_1px_0_rgba(29,188,127,1)_inset] font-normal text-[15px] leading-[18px] text-center"
              disabled={isLoading}
            >
              {isLoading ? "Вход..." : "Войти"}
            </Button>
          </div>
        </form>

        {/* Social Login */}
        <div className="text-center mb-[34px]">
          <p className="text-white/50 mb-[18px] font-normal text-[13px] leading-[16px] text-center">Войти через</p>
          <div className="flex justify-center gap-4">
            <button className="w-[42px] h-[42px] rounded-full hover:opacity-90 transition-opacity">
              <img src="/tg.png" alt="Telegram" className="w-[42px] h-[42px]" />
            </button>
            <button className="w-[42px] h-[42px] rounded-full hover:opacity-90 transition-opacity">
              <img src="/g.svg" alt="Google" className="w-[42px] h-[42px]" />
            </button>
            <button className="w-[42px] h-[42px] rounded-full hover:opacity-90 transition-opacity">
              <img src="/x.svg" alt="X" className="w-[42px] h-[42px]" />
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="space-y-[28px] flex flex-col items-center">
          <Button
            type="submit"
            className="w-[182px] h-[44px] bg-[rgba(10,114,74,1)] hover:bg-[#22c55e]/90 text-white font-inter font-normal text-[15px] leading-[18px] text-center rounded-full shadow-[0_1px_1px_0_rgba(36,186,128,1)_inset] flex-none order-1 flex-grow-0 z-[1]"
            onClick={() => router.push('/signup')}
          >
            Создать аккаунт
          </Button>
          <Button 
            variant="ghost" 
            className="w-[182px] h-[44px] bg-[rgba(255,255,255,0.05)] text-white font-inter font-normal text-[15px] leading-[18px] text-center rounded-full shadow-[0_1px_1px_0_rgba(255,255,255,0.5)_inset] flex-none order-1 flex-grow-0 z-[1]"
          >
            Войти как гость
          </Button>
        </div>
      </div>
    </div>
  )
}

