"use client"

import type React from "react"
import { useRouter } from "next/navigation"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      })

      const data = await response.json()
      console.log('Ответ сервера:', data) // Для отладки

      if (!response.ok) {
        throw new Error(data.error || "Ошибка при регистрации")
      }

      setSuccess("Регистрация успешна!")
      // Перенаправляем на страницу логина
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

        <h1 className="text-2xl font-light text-white/30 mb-[35px] mt-[50px] font-inter text-[20px]">Создать аккаунт</h1>

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center w-full">
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
              top: "370px",
              background: "#0A724A",
              boxShadow: "inset 0px 1px 1px #1DBC7F",
              borderRadius: "30px"
            }}
          >
            {isLoading ? "Создание..." : "Создать"}
          </Button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-white/50 mb-[14px] mt-[120px] font-inter text-[13px] leading-[16px] text-center font-normal">Войти через</p>
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
      </div>
    </div>
  )
}

