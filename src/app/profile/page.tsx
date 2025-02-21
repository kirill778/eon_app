"use client"

import { ArrowLeft, Share2, Pencil, QrCode, ChevronRight, Check } from "lucide-react"
import { Home, Monitor, GraduationCap, FileText } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

export default function ProfileScreen() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-teal-900 text-white">
      <div className="px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-gray-400">Профиль</h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-teal-600">
              <AvatarImage
                src="https://new-image-url.com/new-profile-picture.png"
                alt="Profile picture"
              />
              <AvatarFallback>ВР</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-teal-600 rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          </div>
          <div className="flex-1">
            <Button variant="ghost" size="icon" className="float-right text-gray-400">
              <Pencil className="h-5 w-5" />
            </Button>
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Вадим Сергеевич Ровный</h2>
            </div>
          </div>
        </div>

        {/* Share Profile Section */}
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <h3 className="text-sm">Поделиться профилем</h3>
            <p className="text-sm text-gray-400">@vadyk58</p>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <QrCode className="h-5 w-5" />
          </Button>
        </div>

        <Separator className="bg-gray-700" />

        {/* Menu Items */}
        <Button 
          variant="ghost" 
          className="w-full justify-between text-white hover:bg-white/10"
          onClick={() => router.push('/my_doc')}
        >
          Личные данные
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Button>

        <Button 
          variant="ghost" 
          className="w-full justify-between text-white hover:bg-white/10"
          onClick={() => router.push('/settings')}
        >
          Настройки
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Button>

        {["Безопасность", "Помощь", "Выход"].map((item, index) => (
          <Button key={index} variant="ghost" className="w-full justify-between text-white hover:bg-white/10">
            {item}
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Button>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#091b21] border-t border-[#ffffff]/10 px-4 py-2">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button 
            onClick={() => router.push('/courses')}
            className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Главная</span>
          </button>
          <button 
            onClick={() => router.push('/account')}
            className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2"
          >
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

