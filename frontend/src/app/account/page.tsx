"use client"

import {
  Bell,
  Heart,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  User,
  MessageCircle,
  Clock,
  GraduationCap,
  ClipboardCheck,
  BookOpen,
  TreesIcon as Tree,
  Home,
  Monitor,
  FileText,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function StudentDashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-teal-900 text-gray-300 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-light">Кабинет</h1>
        <div className="flex gap-4">
          <Bell className="w-6 h-6" />
          <Heart className="w-6 h-6" />
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-4 mb-2">
          <ChevronLeft className="w-6 h-6" />
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <GraduationCap className="w-8 h-8" />
          </div>
          <ChevronRight className="w-6 h-6" />
        </div>
        <span className="text-lg">Ученик</span>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { icon: <User className="w-8 h-8" />, label: "Профиль", link: "/profile" },
          { icon: <MessageCircle className="w-8 h-8" />, label: "Чат", link: "/chat" },
          { icon: <Clock className="w-8 h-8" />, label: "Расписание", link: "/schedule" },
          { icon: <GraduationCap className="w-8 h-8" />, label: "Мои курсы", link: "/courses" },
          { icon: <ClipboardCheck className="w-8 h-8" />, label: "Проф. тесты", link: "/tests" },
          { icon: <BookOpen className="w-8 h-8" />, label: "Домашка", link: "/homework" },
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.link)}
            className="aspect-square rounded-3xl border border-gray-600 flex flex-col items-center justify-center gap-2 bg-gray-800/10 backdrop-blur-sm hover:bg-gray-700 transition"
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-center">
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
          <button className="flex flex-col items-center gap-1 text-[#ffffff] transition-colors px-2">
            <Monitor className="w-6 h-6 text-[#60ffa6]" />
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

