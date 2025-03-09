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
import { Header } from "@/components/header_t"
import { TopBar } from "@/components/top-bar"
import { Swap } from "@/components/swap"
import { LectureCard } from "@/components/lecture-card"
import { AuthorBlock } from "@/components/author-block"
import { DescriptionCard } from "@/components/description-card"
import { TextBlock } from "@/components/text-block"
import { LectureAttribute } from "@/components/lecture-attribute"
import { PlayerMusic } from "@/components/player_music"
import { VideoSimpleVideo } from "@/components/video_block"
import { Image } from "@/components/picter_block"
import { FinalJob } from "@/components/final_job"
import { TextBlock_liter } from "@/components/text-block_liter"
import { Box } from "@/components/rating_section"
import { ReviewsSection } from "@/components/reviews_section"
import { OtherCourses } from "@/components/other_courses"


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
      
      <div className="mt-[23.5%] ml-[7%]">
        <TopBar  />
      </div>

      <div className="mt-[8%] ml-[28%]">
        <Swap />
      </div>

      {/* Description Section */}
      <div className="mt-[78px] mx-[28px] space-y-[12px]">
        <DescriptionCard 
          title="Описание"
          description="Данная лекция направлена на укрепление традиционных ценностей. После прохождения материала, вы станете лучше ладить с тещей, и поймете, что жена - тоже друг человека! Узаете, что такое сход-развал. Получите пару советов о том, как ухаживать за лысиной."
        />

        {/* Required Skills Section */}
        <div className="mt-3">
          <DescriptionCard 
            title="Требуемые навыки"
            description="Необходимо иметь низкий тембр, говорить размеренно.Желательно быть лысым."
          />
        </div>

        {/* Acquired Skills Section */}
        <div className="mt-3">
          <DescriptionCard 
            title="Приобретаемые навыки"
            description="• Сможете уверенно носить майку-алкушку в обществе • Узнаете как гнать и не загоняться • Станете ровным пацанчиком"
          />
        </div>

        {/* Atribut lection in course */}
       <div className="" style={{marginTop: '18px', marginLeft: '34px'}}>
        <LectureAttribute text="Лекция доступна в составе курса" />
       </div>

        {/* Text Block */}
        <div style={{marginTop: '26px', marginLeft: '22px'}}>
          <TextBlock 
            paragraphs={[
              "Короткий гудок тебе, бро! Начать лекцию хотелось бы со вступительного слова. Хотелось бы, но слов не находится. Чтобы не задерживаться долго, предлагаю жать на педаль.",
              "Ниже представленны медиа-материалы, которые помогут тебе сделать жизнь быстрее, но интересней. Поехали!",
            ]} 
          />
        </div>


        {/* Audio Player */}
        <div className="mt-4">
          <PlayerMusic 
            audioSrc="/test-audio.mp3"
            title="audio156.mp3"
          />
        </div>

        {/* Text Block */}
        <div style={{marginTop: '20%', marginLeft: '22px'}}>
          <TextBlock 
            paragraphs={[
              "Короткий гудок тебе, бро! Начать лекцию хотелось бы со вступительного слова. Хотелось бы, но слов не находится. Чтобы не задерживаться долго, предлагаю жать на педаль.",
              "Ниже представленны медиа-материалы, которые помогут тебе сделать жизнь быстрее, но интересней. Поехали!",
            ]} 
          />
        </div>

        {/* Video Player */}
        <div className="pt-[7%] ml-[7%]">
          <VideoSimpleVideo />
        </div>

        {/* Picture Block */}
        <div className="pt-[7%] ml-[7%]">
          <Image />
        </div>


        {/* Text Block */}
        <div style={{marginTop: '18%', marginLeft: '22px'}}>
          <TextBlock 
            paragraphs={[
              "Короткий гудок тебе, бро! Начать лекцию хотелось бы со вступительного слова. Хотелось бы, но слов не находится. Чтобы не задерживаться долго, предлагаю жать на педаль.",
              "Ниже представленны медиа-материалы, которые помогут тебе сделать жизнь быстрее, но интересней. Поехали!",
            ]} 
          />
        </div>

        {/* Test Section */}
        <div className="pt-[0%]">
          <FinalJob />
        </div>

         {/* Text Block */}
         <div style={{marginTop: '12%', marginLeft: '10%'}}>
          <TextBlock_liter 
            paragraphs={[
              "Рекомендую ознакомиться со следующими фильмами:\nrovnyezametki.com/vadua23/234rfdasf\ngiguli.ru/vadua233/fwerwegr234fr23",
            ]} 
          />
          </div>

        {/* Rating Section */}
        <div className="pt-[7%] ml-[7%]">
          <Box />
        </div>

        {/* Reviews Section */}
        <div className="pt-[78%]">
          <ReviewsSection reviews={reviews} />
        </div>

        {/* Other Courses Section */}
        <OtherCourses
          title="Другие курсы автора"
          title2="Похожие курсы"
          courseTitle={<>Семья, как база.<br />Гони, но не загоняйся!</>}
          author="Вадим Ровный"
          rating="(58)"
          students="130"
          duration="1 час 30 мин"
          price="12 000 руб"
          isVerified={false}
          imageUrl="/bg_4.png"
        />
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
