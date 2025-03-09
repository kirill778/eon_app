"use client"

import { useRouter } from "next/navigation"

interface HeaderProps {
  title?: string
  showBackButton?: boolean
}

export function Header({ title = "Создать лекцию", showBackButton = true }: HeaderProps) {
  const router = useRouter()

  return (
    <>
      {/* Top Icons */}
      <div className="flex justify-between mb-0">
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors absolute top-[2.5%] left-[22%] " aria-label="Компьютер">
          <img src="/icon_dashboard.svg" className="w-6 h-6 w-[42px] h-[42px]" alt="Dashboard" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors absolute top-[1.9%] left-[41%]" aria-label="">
          <img src="/icon_home.svg" className="w-6 h-6 w-[50px] h-[41.1px]" alt="Dashboard" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#0d3036] transition-colors absolute top-[2.5%] left-[58%]" aria-label="Уведомления">
          <img src="/notifications_btn_title_black.svg" className="w-6 h-6 w-[42px] h-[42px]" alt="Dashboard" />
        </button>
      </div>

      {/* Title with Back Button */}
      <div className="mb-[43%] px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-medium text-gray-400 absolute top-[12.5%] left-[13%]">{title}</h2>
          {showBackButton && (
            <button 
              onClick={() => router.back()}
              className="p-2 rounded-full hover:bg-[#0d3036] transition-colors absolute top-[11.1%] right-[11%]"
            >
              <img src="/back_btn_2.svg" className="w-6 h-6 w-[35px] h-[35px]" alt="Back" />
            </button>
          )}
        </div>
      </div>
      
    </>
  )
} 