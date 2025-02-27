"use client"

import type React from "react"
import { useRouter } from "next/navigation"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { apiRequest } from '@/config/api'

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setIsLoading(true)

    // Валидация на фронтенде
    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают")
      setIsLoading(false)
      return
    }

    console.log('Отправляемые данные:', formData) // Для отладки

    try {
      await apiRequest('/auth/signup', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      setSuccess("Регистрация успешна!")
      setTimeout(() => {
        router.push("/login")
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[url('/Enter_begin_black.svg')] bg-cover bg-center px-[48px] pt-0 flex flex-col items-center font-inter">
      <div className="w-full max-w-md relative mt-[0px]">
        <button 
          className="absolute right-[0px] top-[44px] text-white/80 hover:text-white transition-colors"
          onClick={() => router.push('/login')} 
        >
          <img src="/back_btn.svg" alt="Back" className="h-[36px] w-[36px]" />
        </button>

        <h1 className="text-2xl font-light text-white/30 mb-[12%] mt-[16%] font-inter text-[20px]">Создать аккаунт</h1>

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
              placeholder="Логин"
              value={formData.login}
              onChange={(e) => setFormData({ ...formData, login: e.target.value })}
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
              type="email"
              placeholder="Почта"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                stroke="url(#paint2_linear)"
              />
              <defs>
                <linearGradient
                  id="paint2_linear"
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                stroke="url(#paint3_linear)"
              />
              <defs>
                <linearGradient
                  id="paint3_linear"
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
              placeholder="Подтвердите пароль"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="absolute inset-0 bg-transparent border-none text-white placeholder:text-white/50 rounded-full text-center focus:outline-none w-full h-[45px] font-inter font-normal text-[15px] leading-[18px]"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-100/10 p-2 rounded w-full">
              {error}
            </div>
          )}
          
          {success && (
            <div className="text-green-500 text-sm text-center bg-green-100/10 p-2 rounded w-full">
              {success}
            </div>
          )}

          <Button
            type="submit"
            className="absolute font-inter font-semibold text-[15px] leading-[18px] text-center text-white"
            disabled={isLoading}
            style={{
              width: "180px",
              height: "45px",
              left: "calc(50% - 180px/2 - 0.5px)",
              top: "68%",
              background: "#0A724A",
              boxShadow: "inset 0px 1px 1px #1DBC7F",
              borderRadius: "30px"
            }}
          >
            {isLoading ? "Создание..." : "Создать"}
          </Button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-white/50 mb-[16px] mt-[118px] font-inter text-[13px] leading-[16px] text-center font-normal">Войти через</p>
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
      </div>
    </div>
  )
}

