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
import { Search } from "@/components/search"
import { Sort } from "@/components/sort"
import { Filter } from "@/components/filter"
import { ButtonCreateNewLection } from "@/components/button-create-new-lection"
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

      <div className="mt-[7%] ml-[28%]">
        <Swap />
      </div>

      <div className="mt-[8%] ml-[7%]">
        <Search />
      </div>  

      <div className="flex">
        <div className="mt-[6%] ml-[11%]">
          <Sort
            groupClassName="!shadow-[inset_0px_1px_1px_#7f72aa] !bg-[#594790]"
            polygon="filter_ico2.svg"
            polygonClassName="!h-1.5 !left-[3px] !w-2.5 !top-[5px]"
            text="По популярности"
          />
        </div>

        <div className="mt-[6%] ml-[20%]">
          <Filter
            groupClassName="!shadow-[inset_0px_1px_1px_#7f72aa] !bg-[#594790]"
            polygon="filter_ico.svg"
            polygonClassName="!h-1.5 !left-[3px] !w-2.5 !top-[5px]"
            text="Фильтры"
          />
        </div>
      </div>

      <div className="mt-[6%] ml-[7%]">
        <ButtonCreateNewLection
          btnFClassName="!border-[none] !shadow-[unset] !w-80"
          className="!justify-center !flex !w-80"
          property1="glass-btn"
          text="+ Создать новую лекцию" />
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
