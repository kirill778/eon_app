"use client"

import { ArrowLeft } from "lucide-react"
import { Home, Monitor, GraduationCap, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-teal-900 to-emerald-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-light text-gray-400">Личные данные</h1>
          <button 
            className="rounded-full p-2 text-gray-400 hover:bg-gray-800" 
            aria-label="Go back" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
        </div>

        <Card className="mx-auto max-w-2xl space-y-6 bg-transparent p-6 shadow-2xl border-0">
          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Имя</Label>
            <p className="text-xl text-white">Вадим Сергеевич Ровный</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Пол</Label>
            <RadioGroup defaultValue="m" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="m" id="m" />
                <Label htmlFor="m" className="text-white">
                  М
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="f" id="f" />
                <Label htmlFor="f" className="text-white">
                  Ж
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Ник-нейм</Label>
            <p className="text-xl text-white">vadyk58</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Дата рождения</Label>
            <p className="text-xl text-white">12.07.1997</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Номер телефона</Label>
            <p className="text-xl text-white">+ 7 933 258-33-28</p>
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-gray-400">Электронная почта</Label>
            <p className="text-xl text-white">Vadyk58@diesel.com</p>
          </div>
        </Card>

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
    </div>
  )
}

