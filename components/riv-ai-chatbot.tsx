"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, ChevronDown } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const quickReplies = [
  "How much can I save?",
  "What's NEM 3.0?",
  "Do I need a battery?",
  "What's the tax credit?",
]

// Initial welcome message
const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hey! I'm RIV, your AI solar assistant. I can answer questions about solar panels, battery storage, California utility rates, financing options, and more. What would you like to know?",
  timestamp: new Date(),
}

export function RivAIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([welcomeMessage])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      // Prepare messages for API (exclude welcome message, only send conversation)
      const conversationMessages = [...messages.filter(m => m.id !== "welcome"), userMessage].map(m => ({
        role: m.role,
        content: m.content,
      }))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: conversationMessages }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or feel free to call us directly for immediate assistance!",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickReply = (reply: string) => {
    handleSend(reply)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 group"
          >
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-purple-500 to-purple-600 opacity-60 blur-md group-hover:opacity-80 transition-opacity" />

            {/* Icon container */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/25">
              <Image
                src="/purpleicon.jpg"
                alt="Chat with RIV"
                fill
                className="object-cover"
              />
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-white text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Chat with RIV
              <div className="absolute top-full right-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] max-h-[80vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-white/95" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent" />

            {/* Header */}
            <div className="relative z-10 px-5 py-4 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/30">
                    <Image
                      src="/purpleicon.jpg"
                      alt="RIV AI"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 flex items-center gap-1.5">
                      RIV AI
                      <Sparkles className="w-4 h-4 text-purple-500" />
                    </h3>
                    <p className="text-xs text-gray-500">Powered by Claude Sonnet</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="relative z-10 flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3",
                      message.role === "user"
                        ? "bg-purple-600 text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                    <p
                      className={cn(
                        "text-[10px] mt-1.5",
                        message.role === "user"
                          ? "text-purple-200"
                          : "text-gray-400"
                      )}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="relative z-10 px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors border border-purple-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="relative z-10 px-4 py-4 border-t border-gray-200/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend(inputValue)
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about solar..."
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </form>
              <p className="text-[10px] text-gray-400 text-center mt-2">
                Powered by Claude Sonnet • AI responses may vary
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
