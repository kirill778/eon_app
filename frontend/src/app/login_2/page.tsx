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
import { Header } from "@/components/header"
import { LectureCard } from "@/components/lecture-card"
import { AuthorBlock } from "@/components/author-block"
import { DescriptionCard } from "@/components/description-card"
import { TextBlock } from "@/components/text-block"
import { LectureAttribute } from "@/components/lecture-attribute"
import { PlayerMusic } from "@/components/player_music"
import { VideoSimpleVideo } from "@/components/video_block"
import { Image } from "@/components/picter_block"

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
    <div className="min-h-screen bg-[#091B21] bg-[url('/background_gradient.svg')] bg-top bg-no-repeat bg-[length:100%_auto] text-white">
      <Header />
      
      <div className="mt-4">
        <LectureCard 
          title="Семья, как база."
          subtitle="Гони, но не загоняйся!"
          rating="4.1"
          reviewCount="83"
          viewCount="328"
          duration="40 мин"
          imageUrl="/f1.png"
        />
      </div>

      <div className="mt-6">
        <AuthorBlock 
          name="Вадим Сергеевич"
          surname="Ровный"
          isVerified={true}
        />
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

        <div style={{marginTop: '18%', marginLeft: '22px'}}>
          <TextBlock 
            paragraphs={[
              "Короткий гудок тебе, бро! Начать лекцию хотелось бы со вступительного слова. Хотелось бы, но слов не находится. Чтобы не задерживаться долго, предлагаю жать на педаль.",
              "Ниже представленны медиа-материалы, которые помогут тебе сделать жизнь быстрее, но интересней. Поехали!",
            ]} 
          />
        </div>

        {/* Test Section */}
        <div className="pt-[100%] space-y-4">
          <h3 className="text-lg font-medium text-gray-400 text-center">Итоговое задание</h3>
          <div className="flex justify-center">
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full flex items-center gap-2"
              onClick={() => router.push('/test')}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 3H11C9.89543 3 9 3.89543 9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5C15 3.89543 14.1046 3 13 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Тест
            </Button>
          </div>
        </div>

        {/* Start Text */}
        <div className="mt-4 text-white">
          <p className="text-base leading-relaxed">
            Рекомендую ознакомиться со следующими фильмами: rovnyezametki.com/vadua23/234rfdasf
            giguli.ru/vadua233/fwerwegr234fr23
          </p>
        </div>

        {/* Rating Section */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-black/20 p-6">
            <h3 className="text-lg font-medium">Оценить лекцию</h3>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button key={star} variant="ghost" size="icon" className="h-8 w-8 hover:bg-black/20">
                  <Star className="h-6 w-6" />
                </Button>
              ))}
            </div>
            <textarea
              className="w-full rounded-lg bg-black/20 p-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Оставить отзыв"
              rows={3}
            />
            <Button variant="ghost" className="w-full border border-white/10">
              Добавить отзыв
            </Button>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Завершить лекцию</Button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">153 отзыва</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-white" />
                  <span className="text-sm text-gray-400">{`4 (58)`}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">Оставить отзыв можно только после покупки</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400"
              onClick={() => setIsReviewsCollapsed(!isReviewsCollapsed)}
            >
              <span className="mr-2">Свернуть</span>
              {isReviewsCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
            </Button>
          </div>

          {!isReviewsCollapsed && (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="rounded-lg bg-black/20 p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 shrink-0 border border-white/10">
                      <AvatarFallback className="bg-black/40 text-sm">{review.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{review.date}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-white" />
                          <span className="ml-1 text-sm">{review.rating}</span>
                        </div>
                      </div>
                      <h4 className="font-medium">{review.author}</h4>
                      {review.text && <p className="text-sm text-gray-200">{review.text}</p>}
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-center pt-4">
                <Button variant="ghost" size="sm" className="text-gray-400">
                  <ChevronUp className="mr-2 h-4 w-4" />К началу отзывов
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Other Courses Section */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Другие курсы автора</h2>
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="overflow-hidden">
              <div className="relative">
                <div
                  className="relative aspect-[2/1] w-full overflow-hidden rounded-lg bg-cover bg-center bg-black/40"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))",
                  }}
                >
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Course className="h-4 w-4" />
                        <span>Курс</span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold">
                        Семья, как база.
                        <br />
                        Гони, но не загоняйся!
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span>Вадим Ровный</span>
                        <div className="h-1 w-1 rounded-full bg-gray-400" />
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          <span>(58)</span>
                        </div>
                        <div className="h-1 w-1 rounded-full bg-gray-400" />
                        <span>130</span>
                        <div className="h-1 w-1 rounded-full bg-gray-400" />
                        <div className="flex items-center gap-1">
                          <Timer className="h-4 w-4" />
                          <span>1 час 30 мин</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Не верифицирован</span>
                        <span className="text-xl font-bold">12 000 руб</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
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
