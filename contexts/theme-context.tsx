"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Theme = "blue" | "pink" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("blue")

  const toggleTheme = () => {
    setTheme((prev) => {
      switch (prev) {
        case "blue":
          return "pink"
        case "pink":
          return "dark"
        case "dark":
          return "blue"
      }
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
