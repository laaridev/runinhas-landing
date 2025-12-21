"use client"

import { motion } from "framer-motion"
import { Download, Github, Palette, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context" // <--- Import Language Context
import { LanguageToggle } from "@/components/language-toggle" // <--- Import Toggle Button
import Image from "next/image"
import { useState } from "react"
import { DownloadModal } from "@/components/download-modal"

export function Hero() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage() // <--- This gives us the dictionary based on current language
  const [downloadOpen, setDownloadOpen] = useState(false)
  
  const repoUrl = "https://github.com/laaridev/runinhas"
  const downloadUrl = "https://github.com/laaridev/runinhas/releases/download/v1.0.0/runinhas.exe"

  const themeColors = {
    blue: {
      bg: "from-blue-50 via-indigo-50 to-purple-50",
      text: "from-blue-600 via-indigo-600 to-purple-600",
      button: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
      buttonOutline: "border-blue-600 text-blue-600 hover:bg-blue-50",
      icon: "text-blue-600",
      logo: "/logo-runinha-blue.svg",
    },
    pink: {
      bg: "from-pink-50 via-rose-50 to-purple-50",
      text: "from-pink-600 via-rose-600 to-purple-600",
      button: "from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700",
      buttonOutline: "border-pink-600 text-pink-600 hover:bg-pink-50",
      icon: "text-pink-600",
      logo: "/logo-runinha-pink.svg", 
    },
    dark: {
      bg: "from-slate-900 via-gray-900 to-black",
      text: "from-blue-400 via-indigo-400 to-purple-400",
      button: "from-slate-700 to-gray-800 hover:from-slate-600 hover:to-gray-700",
      buttonOutline: "border-gray-400 text-gray-200 hover:bg-gray-800/50",
      icon: "text-gray-100",
      logo: "/logo-runinha-blue.svg", 
    }
  }

  const colors = themeColors[theme] || themeColors.blue

  const getTogglePosition = () => {
    if (theme === 'blue') return 4;
    if (theme === 'pink') return 34;
    return 64;
  }

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${colors.bg} transition-colors duration-700`}>
      
      <div className="fixed top-8 right-8 z-50 flex items-center gap-4">
        
        <LanguageToggle />

        <div className="flex items-center gap-3">
          <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white/80' : 'text-slate-700'}`}>
            {t.hero.theme}
          </span>
          
          <motion.button
            onClick={toggleTheme}
            className={`relative w-24 h-10 rounded-full border border-white/20 backdrop-blur-md shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-black/40' : 'bg-white/70'}`}
            whileTap={{ scale: 0.96 }}
            title="Alternar tema"
          >
            <div className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-500
              ${theme === 'blue' ? 'from-blue-500/20 to-purple-500/20 opacity-100' : 'opacity-0'}
              ${theme === 'pink' ? 'from-pink-500/20 to-rose-500/20 opacity-100' : ''}
            `} />

            <div className="absolute inset-0 flex items-center justify-between px-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400/50" />
            </div>

            <motion.div
              className="absolute top-1 w-8 h-8 rounded-full bg-white shadow-md grid place-items-center"
              animate={{ x: getTogglePosition() }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
               {theme === 'blue' && <Palette className="w-4 h-4 text-blue-500" />}
               {theme === 'pink' && <Palette className="w-4 h-4 text-pink-500" />}
               {theme === 'dark' && <Moon className="w-4 h-4 text-slate-800" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-12 lg:gap-16">
          
          {/* Left: Logo */}
          <motion.div
            className="flex justify-center lg:justify-start relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`absolute inset-0 rounded-full blur-3xl opacity-0
                ${theme === 'blue' ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : ''}
                ${theme === 'pink' ? 'bg-gradient-to-r from-pink-400 to-rose-400' : ''}
                ${theme === 'dark' ? 'bg-gradient-to-r from-slate-700 to-gray-600' : ''}
              `}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
              animate={{
                y: [-8, 8, -8],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src={colors.logo}
                alt="Runinhas Logo"
                fill
                className="object-contain select-none drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r ${colors.text} bg-clip-text text-transparent tracking-tight leading-none`}>
                {t.hero.title}
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => setDownloadOpen(true)}
                size="lg"
                className={`bg-gradient-to-r ${colors.button} text-white shadow-lg hover:shadow-xl transition-shadow group`}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {t.hero.ctaDownload} 
              </Button>
              <Button
                onClick={() => window.open(repoUrl, "_blank", "noopener,noreferrer")}
                variant="outline"
                size="lg"
                className={`border-2 ${colors.buttonOutline} ${theme === 'dark' ? 'bg-black/20 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'} backdrop-blur transition-colors`}
              >
                <Github className="w-5 h-5 mr-2" />
                {t.hero.ctaGithub}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${theme === 'dark' ? 'border-gray-500' : colors.icon.replace('text-', 'border-')}`}>
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-gray-200' : colors.icon.replace('text-', 'bg-')}`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <DownloadModal
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        downloadUrl={downloadUrl}
      />

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-24 md:h-32 lg:h-40" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
            className={theme === 'dark' ? "fill-black" : "fill-white"} 
            style={{ opacity: 1 }}
          />
        </svg>
      </div>
    </section>
  )
}