"use client"

import { Bell, ChevronLeft, Heart, LayoutDashboard, MessageCircle, Shield } from "lucide-react"
import { ArrowLeft, Home, Monitor, GraduationCap, FileText } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardHeader } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-teal-900 text-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-gray-300">Чат</h1>
        <div className="flex gap-4">
          <LayoutDashboard className="w-6 h-6 text-gray-400" />
          <MessageCircle className="w-6 h-6 text-gray-400" />
          <Bell className="w-6 h-6 text-gray-400" />
          <Heart className="w-6 h-6 text-gray-400" />
        </div>
        <button className="rounded-full p-2 bg-gray-800/30">
          <ChevronLeft className="w-6 h-6" />
        </button>
      </header>

      {/* Course Cards */}
      <div className="space-y-4">
        {/* Course Card */}
        <Card 
          className="bg-teal-800/30 border-0 text-white cursor-pointer hover:bg-teal-800/40 transition-colors"
          onClick={() => router.push('/chat/1')}
        >
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60"
                alt="Instructor"
              />
              <AvatarFallback>ГА</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-300">Курс</span>
              </div>
              <h2 className="text-lg font-semibold">Уроки сценического мастерства</h2>
              <p className="text-sm text-gray-300">Группа курса</p>
            </div>
          </CardHeader>
        </Card>

        {/* Lecture Card */}
        <Card 
          className="bg-teal-800/30 border-0 text-white cursor-pointer hover:bg-teal-800/40 transition-colors"
          onClick={() => router.push('/chat/1')}
        >
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60"
                alt="Instructor"
              />
              <AvatarFallback>ГА</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-300">Лекция</span>
              </div>
              <h2 className="text-lg font-semibold">Уроки сценического мастерства</h2>
              <p className="text-sm text-gray-300">Группа курса</p>
            </div>
          </CardHeader>
        </Card>

        {/* Services Card */}
        <Card 
          className="bg-teal-800/30 border-0 text-white cursor-pointer hover:bg-teal-800/40 transition-colors"
          onClick={() => router.push('/chat/1')}
        >
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60"
                  alt="Instructor"
                />
                <AvatarFallback>ГА</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-0.5">
                <Shield className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-300">Услуги</span>
              <h2 className="text-lg font-semibold">Уроки сценического мастерства</h2>
              <div className="flex items-center gap-2 text-sm">
                <span>Гоген Аинрейх</span>
                <span className="text-teal-400">⎮</span>
                <span className="text-teal-400">Верифицирован</span>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center text-sm text-gray-400 space-y-4">
        <p>Чаты создаются автоматически:</p>
        <ul className="space-y-2">
          <li>
            после покупки лекции / курса появляется общий чат, где можно обсудить любые вопросы с другими
            преобретателями
          </li>
          <li>после подтверждения оказания услуги исполнителем</li>
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#091b21] border-t border-[#ffffff]/10 px-4 py-2">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
            <Home className="w-6 h-6" />
            <span className="text-xs">Главная</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
            <Monitor className="w-6 h-6" />
            <span className="text-xs">Кабинет</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
            <GraduationCap className="w-6 h-6" />
            <span className="text-xs">Мои курсы</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
            <FileText className="w-6 h-6" />
            <span className="text-xs">Домашка</span>
          </button>
        </div>
      </div>
    </div>
  )
}
