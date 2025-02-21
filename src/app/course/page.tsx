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

export default function LectureCard() {
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-800 via-teal-900 to-teal-950 p-4 text-white">
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

      {/* Title with Back Button */}
      <div className="mb-4 px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-gray-400">Лекция</h2>
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
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Затемняющий оверлей */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <CardHeader className="pb-0 relative z-10">
          <div className="flex items-start gap-2">
            <div className="flex-1">
              <h3 className="text-2xl font-bold leading-tight">
                Семья, как база.
                <br />
                Гони, но не загоняйся!
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5" />
              </Button>
              <span className="text-xs text-gray-400">Рус</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-4 relative z-10">
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span>★</span>
              <span>(58)</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-400" />
            <span>130</span>
            <div className="h-1 w-1 rounded-full bg-gray-400" />
            <div className="flex items-center gap-1">
              <Timer className="h-4 w-4" />
              <span>40 мин</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end relative z-10">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`h-5 w-5 ${isLiked ? "fill-white" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button className="rounded-full bg-emerald-600 px-8 hover:bg-emerald-700">Оценить</Button>
          </div>
        </CardFooter>
      </Card>

      {/* Author block */}
      <div className="mt-6 p-4">
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-700 text-xl font-semibold">
              ВР
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-emerald-500">Автор</span>
              <h3 className="text-xl font-semibold">Вадим Сергеевич</h3>
              <h3 className="text-xl font-semibold">Ровный</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Верифицирован</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        {/* Required Skills Section */}
        <Card className="border-0 bg-black/20 p-6 text-white">
          <h3 className="mb-2 text-sm text-gray-400">Требуемые навыки</h3>
          <div className="space-y-2">
            <p className="text-base leading-relaxed">
              Необходимо иметь низкий тембр, говорить размеренно.
              <br />
              Желательно быть лысым.
            </p>
          </div>
        </Card>

        {/* Acquired Skills Section */}
        <Card className="border-0 bg-black/20 p-6 text-white">
          <h3 className="mb-2 text-sm text-gray-400">Приобретаемые навыки</h3>
          <ul className="list-inside space-y-2 text-base leading-relaxed">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Сможете уверенно носить майку-алкушку в обществе</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Узнаете как гнать и не загоняться</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Станете ровным пацанчиком</span>
            </li>
          </ul>
        </Card>

        {/* Text Block */}
        <div className="mt-4 text-white">
          <p className="text-base leading-relaxed">
            Короткий гудок тебе, бро! Начать лекцию хотелось бы со вступительного слова. Хотелось бы, но слов не
            находится. Чтобы не задерживаться долго, предлагаю жать на педаль. Ниже представленны медиа-материалы,
            которые помогут тебе сделать жизнь быстрее, но интересней. Поехали!
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Если ты здесь, значит тебе не все равно. Ты хочешь двигаться вперед, и это правильно. Не каждый готов
            признать, что пора что-то менять. А ты – молодец! Давай вместе сделаем твою жизнь лучше, а семью крепче.
          </p>
        </div>

        {/* Start Text */}
        <div className="mt-4 text-white">
          <p className="text-base leading-relaxed">
            Начнем лекцию с прослушивания звуков мотора. Что может быть лучше рева любимой ласточки? Чего же ты ждешь?
            Запускай!
          </p>
        </div>

        {/* Audio Player */}
        <div className="mt-4">
          <h3 className="mb-2 text-sm text-gray-400 text-center w-full">Аудио</h3>
          <audio 
            ref={audioRef} 
            className="hidden" 
            src="https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3"
            preload="auto"
            crossOrigin="anonymous"
          />
          <div className="flex items-center justify-center gap-4 rounded-lg bg-black/20 p-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => {
                if (audioRef.current) {
                  if (isPlaying) {
                    audioRef.current.pause()
                  } else {
                    audioRef.current.play()
                  }
                  setIsPlaying(!isPlaying)
                }
              }}
            >
              {isPlaying ? (
                <div className="h-4 w-4 rounded-sm bg-white" />
              ) : (
                <div className="h-0 w-0 border-y-[8px] border-l-[16px] border-y-transparent border-l-white" />
              )}
            </Button>
            <div className="text-sm text-gray-400">
              {isPlaying ? "Нажмите, чтобы остановить" : "Нажмите, чтобы послушать"}
            </div>
          </div>
        </div>

        {/* Start Text */}
        <div className="mt-4 text-white">
          <p className="text-base leading-relaxed">
            Начнем лекцию с прослушивания звуков мотора. Что может быть лучше рева любимой ласточки? Чего же ты ждешь?
            Запускай!
          </p>
        </div>

        {/* Video Player */}
        <div className="mt-4">
          <h3 className="mb-2 text-sm text-gray-400 text-center w-full">Видео</h3>
          <div className="rounded-lg overflow-hidden bg-black/20">
            <div className="relative">
              {/* Превью изображение */}
              <div 
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <video
                ref={videoRef}
                className="w-full relative z-10"
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                onTimeUpdate={handleVideoTimeUpdate}
                poster="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Button variant="ghost" size="icon" onClick={handleVideoPlayPause}>
                  {isVideoPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isNaN(progress) ? 0 : progress}
                  onChange={handleVideoProgress}
                  className="w-full mx-4"
                />
                <Button variant="ghost" size="icon" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Test Section */}
        <div className="mt-8 space-y-4">
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

