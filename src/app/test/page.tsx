"use client"

import * as React from "react"
import { Timer, ChevronLeft, Computer, Bell, Heart, Home, Monitor, GraduationCap, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export default function LectureCard() {
  const [isLiked, setIsLiked] = React.useState(false)
  const [isReviewsCollapsed, setIsReviewsCollapsed] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [answers, setAnswers] = React.useState({
    q1: "",
    q2: "",
    q3: "",
  })
  const audioRef = React.useRef<HTMLAudioElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const router = useRouter()

  const reviews = [
    {
      id: 1,
      author: "Андрей Палыч Девяткин",
      rating: 4,
      date: "08.11.2024",
      text: "Купил лекцию не глядя! Автор жжет, семейные ценности подтянул за неделю, спасибо!!",
      initials: "АД",
    },
    {
      id: 2,
      author: "Алексей Михайлович Пенка",
      rating: 5,
      date: "08.11.2024",
      text: "Главное визуализировать! 5 звезд!",
      initials: "АП",
    },
    {
      id: 3,
      author: "Николас Пейдж",
      rating: 1,
      date: "08.11.2024",
      text: "",
      initials: "НП",
    },
    {
      id: 4,
      author: "Alexxx",
      rating: 5,
      date: "08.11.2024",
      text: "Cool bra! Very nice job",
      initials: "AX",
    },
  ]

  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleVideoProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(event.target.value)
    setProgress(manualChange)
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange
    }
  }

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-800 via-teal-900 to-teal-950 p-4 pb-24 text-white">
      {/* Top Icons */}
      <div className="flex justify-between mb-0">
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="Компьютер">
          <Computer className="w-6 h-6 text-[#60ffa6]" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="">
          <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.4682 31.0371C53.4682 34.493 50.7657 37.3191 47.4573 37.3191C44.1529 37.3191 41.4464 40.1451 41.4464 43.601V60.996C41.7334 64.1927 39.7603 67.0587 36.4639 67.9396" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M56.4212 67.9413C53.1248 67.0564 51.1517 64.1944 51.4387 60.9977C51.4387 57.4979 51.4387 46.4009 51.4387 45.0098" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M51.7578 55.2102C60.0965 61.544 71.8991 52.5556 66.6017 43.304C68.0925 42.2039 68.8737 40.4979 68.9854 38.764C69.097 37.05 68.5549 35.3121 67.4069 34.1123C64.9834 31.5812 60.2679 32.0156 58.4503 35.1965" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M37.5478 32.8828C37.5478 32.8828 36.5234 35.956 38.6799 37.6421" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M48.832 37.243C48.832 37.243 49.9043 37.2191 50.1952 37.2231C51.1519 37.2231 53.2166 37.6376 54.0258 39.5709" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M46.4241 67.9405V54.4518C46.4241 51.251 44.3075 48.7717 41.3459 48.2535C38.5198 47.7593 35.2712 48.2775 35.7496 43.5979C30.8747 46.8784 24.0586 43.4624 24.0586 37.4076C24.0586 32.6403 28.4591 29.1327 33.071 30.1132C31.9031 23.5443 39.7874 21.1566 42.9164 25.3061" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M62.7872 32.348C62.6795 31.9932 62.556 31.6384 62.4165 31.2917C60.4832 26.4686 55.7638 23.0605 50.2512 23.0605C45.3603 23.0605 41.0953 25.7431 38.8432 29.7132C38.1935 30.8612 37.9862 31.7221 37.5437 32.8781C36.3838 36.1705 32.7406 37.9124 29.4521 36.7485" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M60.6622 40.625C60.6622 45.6753 56.6085 49.7769 51.5781 49.8526" stroke="white" strokeMiterlimit="22.9256" strokeLinecap="square" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M42.8061 25.2513C43.5088 24.7843 43.3913 24.3931 43.1445 24.2823C42.9741 24.8027 42.911 24.7839 43.0532 24.2551C42.786 24.2128 42.4724 24.4766 42.8061 25.2513Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M60.5893 56.95C62.2031 57.4361 62.6555 56.7568 62.5114 56.2358C61.4935 56.6369 61.442 56.5158 62.4369 56.0608C62.1615 55.5956 61.356 55.4493 60.5893 56.95Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M32.471 29.3137C31.5151 29.5653 31.4972 30.0436 31.7289 30.2599C32.1149 29.7474 32.1778 29.7922 31.8198 30.3246C32.1 30.4728 32.5476 30.299 32.471 29.3137Z" fill="white"/>
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="Уведомления">
          <Bell className="w-6 h-6 text-[#60ffa6]" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors" aria-label="Избранное">
          <Heart className="w-6 h-6 text-[#60ffa6]" />
        </button>
      </div>

      {/* Header */}
      <div className="mb-4 px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-gray-400">Итоговое задание</h2>
          <button 
            onClick={() => router.back()}
            className="p-2 rounded-full hover:bg-[#0d3036] transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#60ffa6]" />
          </button>
        </div>
      </div>

      {/* Main Card */}
      <Card className="relative overflow-hidden border-0 bg-black/20 text-white shadow-2xl">
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Затемняющий оверлей */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <CardHeader className="pb-0 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-gray-400">Тест</h2>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold leading-tight">
                  Семья, как база.
                  <br />
                  Гони, но не загоняйся!
                </h3>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-4 relative z-10">
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400">
              <Timer className="h-5 w-5" />
              <span>3 часа 40 мин</span>
            </div>
            <Button className="rounded-full bg-[#0a724a] px-8 hover:bg-[#0a724a]/90">Приступить</Button>
          </div>
        </CardContent>
      </Card>

      {/* Description Section */}
      <div className="mt-6 space-y-4">
        <Card className="border-0 bg-black/20 p-6 text-white">
          <h3 className="mb-2 text-sm text-gray-400">Описание</h3>
          <p className="text-base leading-relaxed">
            Данная лекция направлена на укрепление традиционных ценностей. После прохождения материала, вы станете лучше
            ладить с тещей, и поймете, что жена – тоже друг человека! Узаете, что такое сход-развал. Получите пару
            советов о том, как ухаживать за лысиной.
          </p>
        </Card>

        {/* Quiz Section */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="rounded-lg p-6">
            <h3 className="mb-4 text-base">1. От чего/кого нельзя отворачиваться?</h3>
            <RadioGroup
              value={answers.q1}
              onValueChange={(value) => setAnswers((prev) => ({ ...prev, q1: value }))}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="q1-option1" className="border-white" />
                <Label htmlFor="q1-option1" className="text-sm">
                  От мамы
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="q1-option2" className="border-white" />
                <Label htmlFor="q1-option2" className="text-sm">
                  От автомобиля
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="q1-option3" className="border-white" />
                <Label htmlFor="q1-option3" className="text-sm">
                  Без варианта первое
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question 2 */}
          <div className="rounded-lg p-6">
            <h3 className="mb-4 text-base">2. Как верно называют типичного главу семейства?</h3>
            <RadioGroup
              value={answers.q2}
              onValueChange={(value) => setAnswers((prev) => ({ ...prev, q2: value }))}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="q2-option1" className="border-white" />
                <Label htmlFor="q2-option1" className="text-sm">
                  Батек
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="q2-option2" className="border-white" />
                <Label htmlFor="q2-option2" className="text-sm">
                  Батя
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="q2-option3" className="border-white" />
                <Label htmlFor="q2-option3" className="text-sm">
                  Папка
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Question 3 */}
          <div className="rounded-lg p-6">
            <h3 className="mb-4 text-base">3. Кто это у нас такой статный на фото?</h3>
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                alt="Статный мужчина"
                className="w-full rounded-lg object-cover h-[200px]"
              />
            </div>
            <RadioGroup
              value={answers.q3}
              onValueChange={(value) => setAnswers((prev) => ({ ...prev, q3: value }))}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="q3-option1" className="border-white" />
                <Label htmlFor="q3-option1" className="text-sm">
                  Батек
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="q3-option2" className="border-white" />
                <Label htmlFor="q3-option2" className="text-sm">
                  Батя
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="q3-option3" className="border-white" />
                <Label htmlFor="q3-option3" className="text-sm">
                  Папка
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            onClick={() => router.push('/test_done')}
            className="w-full bg-[#0a724a] hover:bg-[#0a724a]/90"
          >
            Завершить тестирование
          </Button>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#091b21] border-t border-[#ffffff]/10 px-4 py-2">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2">
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

