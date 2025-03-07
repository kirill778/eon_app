"use client"

import * as React from "react"
import { Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface PlayerMusicProps {
  audioSrc: string
  title?: string
}

export function PlayerMusic({ 
  audioSrc = "/test-audio.mp3",
  title = "Test Audio"
}: PlayerMusicProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(31)
  const [currentTime, setCurrentTime] = React.useState("00:00")
  const [duration, setDuration] = React.useState("00:00")
  const audioRef = React.useRef<HTMLAudioElement>(null)

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      const total = audioRef.current.duration
      if (!isNaN(total)) {
        setCurrentTime(formatTime(current))
        setDuration(formatTime(total))
        const progressValue = 31 + ((current / total) * (94 - 31))
        setProgress(Math.min(progressValue, 94))
      }
    }
  }

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (!isNaN(value)) {
      setProgress(value)
      if (audioRef.current && !isNaN(audioRef.current.duration)) {
        const normalizedProgress = (value - 31) / (94 - 31)
        audioRef.current.currentTime = audioRef.current.duration * normalizedProgress
      }
    }
  }

  return (
    <div className="relative w-full max-w-[375px] h-[78px] mt-[34px]">
      {/* Background line */}
      <div className="absolute top-[29px] w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      
      {/* Start and end markers */}
      <div className="absolute left-[31%] top-[24px] w-[1px] h-[12px] bg-white/50" />
      <div className="absolute right-[6%] top-[24px] w-[1px] h-[12px] bg-white/50" />
      
      {/* Player circle */}
      <div className="absolute left-[7%] top-0">
        <div className="relative w-[60px] h-[60px]">
          {/* Play button with gradient border and blur effect */}
          <button onClick={handlePlayPause}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <foreignObject x="-4" y="-4" width="68" height="68">
                <div style={{
                  backdropFilter: 'blur(2px)',
                  clipPath: 'url(#bgblur_0_47_305_clip_path)',
                  height: '100%',
                  width: '100%'
                }} />
              </foreignObject>
              <circle 
                data-figma-bg-blur-radius="4" 
                cx="30" 
                cy="30" 
                r="29.5" 
                fill="#D9D9D9" 
                fillOpacity="0.05" 
                stroke="url(#paint0_linear_47_305)"
              />
              {/* Play/Pause icon in center */}
              <circle 
                cx="29" 
                cy="30" 
                r="19" 
                fill="rgba(255, 253, 253, 0.30)" 
                style={{ filter: 'drop-shadow(0px 2px 2px rgba(255, 255, 255, 0.50))' }} 
              />
              <path
                d={isPlaying 
                  ? "M26 24H29V36H26V24ZM31 24H34V36H31V24Z"
                  : "M39 30L23 39V21L39 30Z"
                }
                fill="white"
                fillOpacity="0.8"
              />
              <defs>
                <clipPath id="bgblur_0_47_305_clip_path" transform="translate(4 4)">
                  <circle cx="30" cy="30" r="29.5"/>
                </clipPath>
                <linearGradient id="paint0_linear_47_305" x1="21.4286" y1="24.6429" x2="44.4643" y2="43.3929" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.08"/>
                  <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.15"/>
                </linearGradient>
              </defs>
            </svg>
          </button>
          
        </div>
      </div>

      

      {/* Progress bar with line thumb */}
      <input
        type="range"
        min="0"
        max="94"
        value={isNaN(progress) ? 0 : Math.min(progress, 94)}
        onChange={handleProgressChange}
        className="absolute top-[28px] left-0 w-[94%] appearance-none bg-transparent 
          [&::-webkit-slider-runnable-track]:h-[2px] [&::-webkit-slider-runnable-track]:bg-white/20 
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[1px] [&::-webkit-slider-thumb]:h-[28px] 
          [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:mt-[-13px] [&::-webkit-slider-thumb]:ml-[0%] cursor-pointer
          [&::-webkit-slider-runnable-track]:transition-all [&::-webkit-slider-runnable-track]:duration-150 [&::-webkit-slider-runnable-track]:ease-out"
      />

      {/* Audio info */}
      <div className="absolute left-[46%] bottom-[1%] right-0 bottom-[8px] px-4">
        <div className="flex justify-between text-white/50 text-[11px]">
          <span>{title}</span>
          <span>{currentTime} / {duration}</span>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}
