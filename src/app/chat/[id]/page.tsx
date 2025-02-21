"use client"

import type React from "react"

import { MessageCircle, Phone, X, MoreVertical, Paperclip, Mic, Send, Home, Monitor, GraduationCap, FileText } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Message {
  id: number
  text: string
  timestamp: string
  isSent: boolean
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Привет, Вадя!\nНе успел, сделаю потом))",
      timestamp: "12:20 17.11.2024",
      isSent: false,
    },
    {
      id: 2,
      text: "Шалом, от души!",
      timestamp: "12:20 17.11.2024",
      isSent: true,
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]) //Corrected dependency

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date()
      const timestamp = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: newMessage,
          timestamp,
          isSent: true,
        },
      ])
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-screen bg-[#1a2b2b]">
      {/* Header */}
      <header className="flex items-center gap-3 p-4 border-b border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="text-gray-400 text-sm">Услуги</div>
          <div className="text-white font-medium truncate">Уроки сценическог...</div>
          <div className="text-gray-400 text-sm">Вадим Сергеевич Ровный</div>
        </div>
        <button className="p-2">
          <X className="w-6 h-6 text-white" />
        </button>
        <button className="p-2">
          <MoreVertical className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Navigation */}
      <div className="flex gap-8 px-4 py-3 border-b border-white/10">
        <button className="flex items-center gap-2 text-white">
          <MessageCircle className="w-5 h-5" />
          <span>Чат</span>
        </button>
        <button className="flex items-center gap-2 text-gray-400">
          <span className="i-document w-5 h-5" />
          <span>Домашка</span>
        </button>
        <button className="flex items-center gap-2 text-gray-400">
          <Phone className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`max-w-[80%] ${message.isSent ? "ml-auto" : ""} animate-fade-in`}>
            <div className="bg-[#1e3535] rounded-2xl p-3 text-white">
              <div className="text-sm text-gray-400 mb-1">{message.timestamp}</div>
              <div className="whitespace-pre-line">{message.text}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 bg-[#1e3535] rounded-full px-4 py-2">
          <textarea
            rows={1}
            placeholder="Введите текст"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-transparent text-white outline-none placeholder:text-gray-400 resize-none"
            style={{ height: "24px", maxHeight: "120px" }}
          />
          <button className="p-2">
            <Paperclip className="w-5 h-5 text-gray-400" />
          </button>
          {newMessage.trim() ? (
            <button className="p-2 text-white hover:text-blue-400 transition-colors" onClick={handleSendMessage}>
              <Send className="w-5 h-5" />
            </button>
          ) : (
            <button className="p-2">
              <Mic className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      
    </div>
  )
}

