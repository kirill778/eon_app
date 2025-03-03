"use client"

import React from 'react'

interface AuthorBlockProps {
  name: string
  surname: string
  isVerified?: boolean
}

export function AuthorBlock({ name, surname, isVerified = true }: AuthorBlockProps) {
  return (
    <div className="mt-6 p-4">
      <div className="flex justify-center">
        <div className="flex items-center gap-4">
          <div className="flex absolute z-10 top-[50.3%] left-[11%] h-[80px] w-[80px] items-center justify-center rounded-full text-xl font-semibold overflow-hidden bg-[url('/Ava_status.svg')] bg-no-repeat">
          </div>
          <div className="flex absolute top-[50.5%] left-[12.3%] h-[69px] w-[69px] items-center justify-center rounded-full text-xl font-semibold overflow-hidden bg-[url('/Ava_status.svg')] bg-no-repeat">
             <img src="/avatar_bl.svg" alt="Avatar" className="h-[69px] w-[69px] object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="absolute top-[49.7%] left-[35.2%] text-sm text-white/50">Автор </span>
            <h3 className="absolute top-[52.5%] left-[35%] text-[15px] font-[600] leading-[18.15px] font-inter">{name}</h3>
            <h3 className="absolute top-[54.7%] left-[35%] text-[15px] font-[600] leading-[18.15px] font-inter">{surname}</h3>
            {isVerified && (
              <div className="flex items-center gap-2">
                <img src="/group_1271.svg" alt="Verified" className="w-[2px] absolute top-[58%] left-[35.4%]" />
                <span className="absolute top-[57.6%] left-[37%] text-[13px] font-[400] leading-[15.73px] font-inter">Верифицирован</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 