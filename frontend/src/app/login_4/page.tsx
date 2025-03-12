"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Heart,
  MessageCircle,
  Share2,
  Timer,
  ChevronUp,
  ChevronDown,
  Star,
  ChevronLeft,
  ChevronRight,
  RouteIcon as Course,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Computer,
  Bell,
  Home,
  Monitor,
  GraduationCap,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Header } from "@/components/header_t_2"
import { Complexity } from "@/components/component_lecture/complexity"
import { CourseName } from "@/components/component_lecture/course-name"
import { Cover } from "@/components/component_lecture/cover"
import { CourseNamePay } from "@/components/component_lecture/course-name-pay"
import { DropDownList } from "@/components/component_lecture/drop-down-list"
import { Block } from "@/components/component_lecture/block"

export default function LecturePage() {
  const router = useRouter()
  const [isLiked, setIsLiked] = React.useState(false)
  const [isReviewsCollapsed, setIsReviewsCollapsed] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const audioRef = React.useRef<HTMLAudioElement>(null)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  // Новые состояния для времени прохождения
  const [duration, setDuration] = React.useState("0");
  const [durationUnit, setDurationUnit] = React.useState<"мин" | "час">("мин");

  // Новые состояния для времени прохождения
  const [duration_2, setDuration_2] = React.useState("0");
  const [durationUnit_2, setDurationUnit_2] = React.useState<"руб" | "$">("руб");

  // Обновленное состояние для языка - только единица измерения, без текстового поля
  const [language, setLanguage] = React.useState<"рус" | "англ">("рус");

  // Новое состояние для способа оплаты
  const [paymentMethod, setPaymentMethod] = React.useState("Выберите способ оплаты");

  const reviews = [
    {
      id: 1,
      author: "Андрей Палыч Девяткин",
      rating: 4,
      date: "08.11.2024",
      text: "Купил лекцию не глядя! Автор жжет, семейные ценности подтянул за неделю, спасибо!!",
      initials: "АД",
      avatar: "/avatar_bl_jason.png"
    },
    {
      id: 2,
      author: "Алексей Михайлович Пенка",
      rating: 5,
      date: "08.11.2024",
      text: "Главное визуализировать! 5 звезд!",
      initials: "АП",
      avatar: "/avatar_bl_jason.png"
    },
    {
      id: 3,
      author: "Николас Пейдж",
      rating: 1,
      date: "08.11.2024",
      text: "",
      initials: "НП",
      avatar: "/avatar_bl_jason.png"
    },
    {
      id: 4,
      author: "Alexxx",
      rating: 5,
      date: "08.11.2024",
      text: "Cool bra! Very nice job",
      initials: "AX",
      avatar: "/avatar_bl_jason.png"
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
    <div className="min-h-screen bg-[#14141F] bg-[url('/background_gradient_purple.svg')] bg-top bg-no-repeat bg-[length:100%_auto] text-white">
      <Header />

      <div className="mt-[8%] ml-[7%]">
        <CourseName 
          placeholder="Введите название курса" 
          defaultValue="" 
        />
      </div>  

      <div className="mt-[8%] ml-[0%]">
        <Cover
          className="!relative"
          lectureNotification="lecture_notification_ico.svg"
          lectureNotificationClassName="!h-[62px] !w-[62px] !left-[85px]"
          property1="lec"
        />
      </div>

      <div className="mt-[7%] ml-[7%]">
        <CourseName 
          placeholder="Введите описание лекции" 
          defaultValue="" 
        />
      </div> 

      <div className="mt-[7%] ml-[7%]">
        <CourseName 
          placeholder="Требуемые навыки" 
          defaultValue="" 
        />
      </div>

      <div className="mt-[8%] ml-[7%]">
        <CourseName 
          placeholder="Приобретаемые навыки" 
          defaultValue="" 
        />
      </div>

      <div className="mt-[8%] ml-[13%] flex items-center">
        <span className="text-white text-right text-[13px] font-normal mr-4">Время прохождения</span>
        <CourseNamePay 
          value={duration}
          unit={durationUnit}
          onValueChange={(value) => {
            setDuration(value);
          }}
          onUnitChange={(unit) => {
            setDurationUnit(unit);
          }}
        />
      </div>

      <div className="mt-[9%] ml-[7%]">
        <DropDownList 
          placeholder="Выберите способ оплаты" 
          defaultValue={paymentMethod} 
          onChange={(value) => {
            setPaymentMethod(value);
            console.log("Выбран способ оплаты:", value);
          }}
        />
      </div>

      <div className="mt-[10%] ml-[6%] flex items-center">
        <span className="text-white text-right text-[13px] font-normal mr-4 w-[150px]">Стоимость лекции отдельно</span>
        <CourseNamePay 
          value={duration_2}
          unit={durationUnit_2}
          onValueChange={(value) => {
            setDuration_2(value);
          }}
          onUnitChange={(unit: "руб" | "$") => {
            setDurationUnit_2(unit);
          }}
        />
      </div>

      <div className="mt-[9%] ml-[13%]">
        <Complexity />
      </div>

      <div className="mt-[10%] ml-[0%] flex items-center">
        <span className="text-white text-right text-[13px] font-normal mr-4 w-[150px]">Язык</span>
        
        {/* Компонент для выбора языка */}
        <div className="relative inline-block ml-[6%]">
          <div className="relative">
            <svg width="90" height="44" viewBox="0 0 90 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="89" height="43" rx="21.5" stroke="url(#paint0_linear_125_1813)"/>
              <defs>
                <linearGradient id="paint0_linear_125_1813" x1="22" y1="18.0714" x2="33.9" y2="42.123" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.15"/>
                  <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.25"/>
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <select 
                  className="appearance-none bg-transparent border-none text-white text-[13px] focus:outline-none cursor-pointer pr-5"
                  onChange={(e) => setLanguage(e.target.value as "рус" | "англ")}
                  value={language}
                >
                  <option value="рус">Рус</option>
                  <option value="Англ">Англ</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-white">
                  <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[9%] ml-[0%]">
        <Block />
      </div>
      {/* Footer Navigation */}
    {/*  <div className="fixed bottom-0 left-0 right-0 bg-[#091b21] border-t border-[#ffffff]/10 px-4 py-2">
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
      </div> */}
    </div>
  )
}
