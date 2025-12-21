// @/contexts/language-context.tsx
"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { dictionary, Language } from "@/lib/dictionary"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof dictionary.pt // This gives you autocomplete for 't.hero.title'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t: dictionary[language] 
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}