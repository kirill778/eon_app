"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Monitor } from "lucide-react"

export default function TestResults() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen bg-[#1a1f23] text-white p-6 flex flex-col items-stretch max-w-md mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-light text-gray-400">Результат</h1>
          <p className="text-2xl font-light text-gray-400">тестирования</p>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors" aria-label="Close">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 space-y-8">
        <p className="text-xl">Вы не прошли тестирование</p>

        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-2xl">17</p>
            <p className="text-sm text-gray-400">Общее кол-во вопросов</p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl">12</p>
            <p className="text-sm text-gray-400">Кол-во правильных ответов</p>
          </div>

          <div className="space-y-1">
            <p className="text-2xl">15</p>
            <p className="text-sm text-gray-400">Необходимое кол-во правильных ответов</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <Button 
          onClick={() => router.push('/test')}
          className="w-full py-6 text-base bg-[#00875A] hover:bg-[#006644] transition-colors" 
          size="lg"
        >
          Повторить тестирование
        </Button>
        <Button
          onClick={() => router.push('/courses')}
          className="w-full py-6 text-base bg-gray-700 hover:bg-gray-600 transition-colors"
          size="lg"
        >
          Завершить
        </Button>
      </div>
    </div>
  )
}

