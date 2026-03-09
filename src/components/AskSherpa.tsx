import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { IconBrain } from './BrandIcons'

const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000/api/v1/public/chat'
  : 'https://platform.fiftyknots.com/api/v1/public/chat'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi! I'm the FiftyKnots AI assistant. Ask me anything about our venture studio - how it works, pricing, our portfolio, or how to get started.",
}

export function AskSherpa() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  async function handleSend() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      // Send only user/assistant messages (skip welcome if it was the only one)
      const apiMessages = updated.filter((_, i) => i > 0 || updated[0].role === 'user')
        .map(({ role, content }) => ({ role, content }))

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data.success && data.data?.content) {
          setMessages(prev => [...prev, { role: 'assistant', content: data.data.content }])
        } else {
          setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't process that. Try asking something else, or start a free brief at app.fiftyknots.com!" }])
        }
      } else if (res.status === 429) {
        setMessages(prev => [...prev, { role: 'assistant', content: "I've hit my message limit for now. Start a free brief at app.fiftyknots.com for unlimited AI coaching!" }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Feel free to reach out at info@fiftyknots.com or start a brief at app.fiftyknots.com." }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting. Visit app.fiftyknots.com to chat with our full AI Sherpa!" }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-orange to-orange-light text-white shadow-lg shadow-orange/25 flex items-center justify-center hover:shadow-xl hover:shadow-orange/30 transition-shadow"
            aria-label="Ask our AI assistant"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 flex flex-col"
            style={{ height: '520px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange to-orange-light px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <IconBrain size={32} />
                <div>
                  <p className="text-white font-semibold text-sm">Ask FiftyKnots</p>
                  <p className="text-white/70 text-xs">AI-powered answers</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-dark-grey">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-orange/90 text-white rounded-br-md'
                        : 'bg-white/8 text-white/80 rounded-bl-md border border-white/5'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/8 border border-white/5 px-4 py-2.5 rounded-2xl rounded-bl-md">
                    <Loader2 size={16} className="animate-spin text-white/40" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 bg-dark-grey border-t border-white/5 shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend() }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about FiftyKnots..."
                  maxLength={500}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-orange/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-xl bg-orange flex items-center justify-center text-white disabled:opacity-30 hover:bg-orange-light transition-colors shrink-0"
                >
                  <Send size={16} />
                </button>
              </form>
              <p className="text-[10px] text-white/20 mt-2 text-center">
                Powered by AI Sherpa  -  <a href="https://app.fiftyknots.com" className="text-orange-light/50 hover:text-orange-light">Start your free brief</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
