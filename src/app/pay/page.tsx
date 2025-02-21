"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home, Monitor, GraduationCap, FileText } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function PaymentScreen() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("")

  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error("Выберите метод оплаты")
      return
    }

    // Показываем уведомление об успешной оплате
    toast.success("Оплата произведена успешно!")
    
    // Редирект на страницу курса через небольшую задержку
    setTimeout(() => {
      router.push('/course')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-teal-900 text-white p-4 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl text-gray-400">Покупка</h1>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-400"
            onClick={() => router.back()}
        >
          <ArrowLeft className="h-6 w-6" />
            </Button>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-8">
        <h2 className="text-xl text-gray-400 mb-6">Выбирете метод оплаты</h2>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
          <div className="flex items-center space-x-4 border-b border-gray-700 pb-4">
            <div className="h-5 w-5 rounded-full border-2 border-teal-600 flex items-center justify-center group">
              <RadioGroupItem
                value="sberpay"
                id="sberpay"
                className="h-5 w-5 data-[state=checked]:bg-emerald-500 before:hidden border-0 rounded-full transition-colors"
              />
            </div>
            <Label htmlFor="sberpay" className="text-lg">
              СберPay
            </Label>
          </div>
          <div className="flex items-center space-x-4 border-b border-gray-700 pb-4">
            <div className="h-5 w-5 rounded-full border-2 border-teal-600 flex items-center justify-center group">
              <RadioGroupItem
                value="card"
                id="card"
                className="h-5 w-5 data-[state=checked]:bg-emerald-500 before:hidden border-0 rounded-full transition-colors"
              />
            </div>
            <Label htmlFor="card" className="text-lg">
              Банковская карта
            </Label>
          </div>
          <div className="flex items-center space-x-4 border-b border-gray-700 pb-4">
            <div className="h-5 w-5 rounded-full border-2 border-teal-600 flex items-center justify-center group">
              <RadioGroupItem
                value="usdt"
                id="usdt"
                className="h-5 w-5 data-[state=checked]:bg-emerald-500 before:hidden border-0 rounded-full transition-colors"
              />
            </div>
            <Label htmlFor="usdt" className="text-lg">
              USDT (криптовалюта)
            </Label>
          </div>
        </RadioGroup>

        {/* Payment Amount and Button */}
        <div className="mt-8 px-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold">2500 руб</div>
              <div className="text-sm text-gray-400">к оплате</div>
            </div>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full"
              onClick={handlePayment}
              disabled={!paymentMethod}
            >
              Оплатить
            </Button>
          </div>
        </div>
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

