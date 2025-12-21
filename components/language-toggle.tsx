"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-1 shadow-sm">
      <button
        onClick={() => setLanguage('pt')}
        className="relative px-3 py-1 rounded-full text-sm font-bold transition-colors"
      >
        {language === 'pt' && (
          <motion.div
            layoutId="lang-active"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className={`relative z-10 ${language === 'pt' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300'}`}>
          PT
        </span>
      </button>
      
      <button
        onClick={() => setLanguage('en')}
        className="relative px-3 py-1 rounded-full text-sm font-bold transition-colors"
      >
        {language === 'en' && (
          <motion.div
            layoutId="lang-active"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className={`relative z-10 ${language === 'en' ? 'text-blue-600' : 'text-slate-600 dark:text-slate-300'}`}>
          EN
        </span>
      </button>
    </div>
  )
}