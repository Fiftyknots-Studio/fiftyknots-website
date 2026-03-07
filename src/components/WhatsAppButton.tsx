import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/27738100350?text=Hi%20FiftyKnots!'

export function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-white text-dark-grey text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2"
          >
            Chat with us
            <button onClick={() => setTooltip(false)} className="text-dark-grey/40 hover:text-dark-grey transition-colors">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
    </div>
  )
}
