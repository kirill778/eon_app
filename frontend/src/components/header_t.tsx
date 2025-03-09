"use client"

import { useRouter } from "next/navigation"

interface HeaderProps {
  title?: string
  showBackButton?: boolean
}

export function Header({ title = "Лекция", showBackButton = true }: HeaderProps) {
  const router = useRouter()

  return (
    <>
      {/* Top Icons */}
      <div className="flex justify-between mb-0">
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors absolute top-[2.5%] left-[22%] " aria-label="Компьютер">
          <img src="/icon_dashboard.svg" className="w-6 h-6 w-[42px] h-[42px]" alt="Dashboard" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors absolute top-[-1%] left-[35%]" aria-label="">
          <img src="/icon_home_logo.svg" className="w-6 h-6 w-[91px] h-[91px]" alt="Dashboard" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors absolute top-[2.5%] left-[58%]" aria-label="Уведомления">
          <img src="/notifications_btn_title_black.svg" className="w-6 h-6 w-[42px] h-[42px]" alt="Dashboard" />
        </button>
      </div>

      {/* Title with Back Button */}
      
    </>
  )
} 