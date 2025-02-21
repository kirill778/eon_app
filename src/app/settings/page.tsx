"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Monitor, Home } from "lucide-react"

// Available languages
const languages = [
  { code: "ru", name: "Руский" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
]

export default function SettingsScreen() {
  // State for settings
  const [settings, setSettings] = useState({
    language: "ru",
    sound: false,
    vibration: true,
  })

  const router = useRouter()

  // Handlers for settings changes
  const handleLanguageChange = (code: string) => {
    setSettings((prev) => ({ ...prev, language: code }))
  }

  const handleSoundToggle = (checked: boolean) => {
    setSettings((prev) => ({ ...prev, sound: checked }))
  }

  const handleVibrationToggle = (checked: boolean) => {
    setSettings((prev) => ({ ...prev, vibration: checked }))
  }

  const handleApply = () => {
    // Here you would typically save the settings
    console.log("Settings applied:", settings)
    // You could also add some visual feedback, like a toast notification
  }

  // Get current language name
  const currentLanguage = languages.find((lang) => lang.code === settings.language)?.name

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 to-emerald-900/80 text-gray-300 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl text-gray-400">Настройки</h1>
        <button 
          className="rounded-full p-2 border border-gray-600/30 hover:bg-gray-800/20 transition-colors"
          onClick={() => window.history.back()}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </header>

      <div className="space-y-8">
        <div className="space-y-1">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-800/20 rounded-lg transition-colors">
              <div>
                <div className="font-medium">{currentLanguage}</div>
                <p className="text-sm text-gray-500 text-left">Язык</p>
              </div>
              <ChevronLeft className="h-4 w-4 rotate-[270deg] text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] bg-gray-900/95 border-gray-800">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  className={`
                    cursor-pointer transition-colors text-white
                    ${settings.language === language.code ? "bg-emerald-900/50" : "hover:bg-gray-800/50"}
                  `}
                  onClick={() => handleLanguageChange(language.code)}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="pt-4">
          <h2 className="text-lg font-medium mb-4">Уведомление и звуки</h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Звук</p>
                <p className="text-sm text-gray-500">{settings.sound ? "Вкл" : "Выкл"}</p>
              </div>
              <Switch
                checked={settings.sound}
                onCheckedChange={handleSoundToggle}
                className="data-[state=checked]:bg-emerald-600"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Вибрация</p>
                <p className="text-sm text-gray-500">{settings.vibration ? "Вкл" : "Выкл"}</p>
              </div>
              <Switch
                checked={settings.vibration}
                onCheckedChange={handleVibrationToggle}
                className="data-[state=checked]:bg-emerald-600"
              />
            </div>
          </div>
        </div>

        <Button onClick={handleApply} className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white">
          Применить
        </Button>

        <button 
          onClick={() => router.push('/account')}
          className="flex flex-col items-center gap-1 text-[#ffffff]/60 hover:text-[#ffffff] transition-colors px-2"
        >
          <Monitor className="w-6 h-6" />
          <span className="text-xs">Кабинет</span>
        </button>
      </div>
    </div>
  )
}

