"use client"

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function SignupEmailPage() {
  const router = useRouter();
  const [countdown, setCountdown] = React.useState(60);
  const email = "VadyaRovny@gmail.com"; // В реальном приложении получайте из состояния/параметров

  React.useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 relative">
      {/* Background SVG */}
      <svg 
        className="absolute inset-0 w-full h-full -z-10" 
        viewBox="0 0 375 800" 
        fill="none" 
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="375" height="800" fill="#091B21" fillOpacity="0.98"/>
        <path d="M0 0H375V667H0V0Z" fill="url(#paint0_radial_0_4)"/>
        <defs>
          <radialGradient 
            id="paint0_radial_0_4" 
            cx="0" 
            cy="0" 
            r="1" 
            gradientUnits="userSpaceOnUse" 
            gradientTransform="translate(187.5 333.5) rotate(90) scale(333.5 336.021)"
          >
            <stop stopColor="#0B8D5C"/>
            <stop offset="0.675" stopColor="#0F373F"/>
            <stop offset="0.805" stopColor="#0C2B32"/>
            <stop offset="1" stopColor="#091B21" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>

      {/* Header */}
      <div className="w-full max-w-md flex justify-between items-center mt-6">
        <h1 className="text-white/30 font-normal text-[20px] leading-[24px] absolute left-[12.8%] right-[43.73%] top-[6.25%] bottom-[90.75%]">Создать аккаунт</h1>
        <button 
          onClick={() => router.back()}
          className="rounded-full hover:bg-white/10 transition-colors absolute w-[36px] h-[36px] left-[77.6%] top-[5.5%]"
        >
          <Image 
            src="/back_btn.svg" 
            alt="Back" 
            width={38} 
            height={38}
            className="text-white/60"
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center mt-20 w-full max-w-md">
        <div className="text-center space-y-2 mb-8">
          <h2 className="absolute w-[180px] left-[calc(50%-90px)] top-[12.9%] bottom-[84.25%] font-inter font-semibold text-[15px] leading-[18px] text-center text-white">{email}</h2>
          <p className="absolute w-[180px] left-[calc(50%-90px)] top-[14.7%] font-inter font-normal text-[13px] leading-[16px] text-center text-white/50">
            На почту отправлено<br />письмо для подтверждения
          </p>
        </div>

        {/* Resend Button */}
        <div className="absolute w-[279px] h-[45px] left-[calc(50%-279px/2)] top-[190px]">
          <svg
            width="100%"
            height="45"
            viewBox="0 0 100% 45"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-[45px]"
          >
            <rect
              x="0.5"
              y="0.5"
              width="99%"
              height="44"
              rx="22.5"
              fill="rgba(255, 255, 255, 0.05)"
              stroke="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="100"
                y1="20"
                x2="110"
                y2="60"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.15" />
                <stop offset="0.51" stopColor="white" stopOpacity="0.8" />
                <stop offset="1" stopColor="white" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>
          <button
            disabled={countdown > 0}
            onClick={() => setCountdown(60)}
            className="absolute inset-0 bg-transparent border-none text-white/50 rounded-full text-center focus:outline-none w-full h-[45px] font-inter font-normal text-[15px] leading-[18px] disabled:opacity-50"
          >
            {countdown > 0 
              ? `Повторить через: ${countdown} сек.`
              : "Отправить повторно"
            }
          </button>
        </div>
      </div>
    </div>
  );
}
