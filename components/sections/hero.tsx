"use client"

import { motion } from "framer-motion"
import { Download, Github, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"
import { useState } from "react"
import { DownloadModal } from "@/components/download-modal"

export function Hero() {
  const { theme, toggleTheme } = useTheme()
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
  }

  const colors = themeColors[theme]

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${colors.bg}`}>
      {/* Theme toggle */}
      <div className="absolute top-8 right-8 z-20 flex items-center gap-3">
        <span className="text-sm font-medium text-slate-700">Tema</span>
        <motion.button
          onClick={toggleTheme}
          className="relative w-20 h-10 rounded-full border border-white/60 bg-white/70 backdrop-blur shadow-lg overflow-hidden"
          whileTap={{ scale: 0.96 }}
          title="Alternar tema"
          aria-label="Alternar tema"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'blue' ? 'from-blue-500/20 via-indigo-500/20 to-purple-500/20' : 'from-pink-500/20 via-rose-500/20 to-purple-500/20'}`} />
          <div className="absolute inset-0 flex items-center justify-between px-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
          </div>
          <motion.div
            className="absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md grid place-items-center"
            animate={{ x: theme === 'blue' ? 0 : 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <Palette className="w-4 h-4 text-slate-600" />
          </motion.div>
        </motion.button>
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
            {/* Animated glow */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${theme === 'blue' ? 'from-blue-400 to-indigo-400' : 'from-pink-400 to-rose-400'} rounded-full blur-3xl opacity-0`}
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
            
            {/* Logo with float & rotate */}
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

          {/* Right: Text & CTAs */}
          <div className="text-center lg:text-left space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r ${colors.text} bg-clip-text text-transparent tracking-tight leading-none`}>
                runinhas
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
                O assistente de voz que te lembra de todos os tempos essenciais do Dota 2.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => setDownloadOpen(true)}
                size="lg"
                className={`bg-gradient-to-r ${colors.button} text-white shadow-lg hover:shadow-xl transition-shadow group`}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Baixe Grátis v1.0.0
              </Button>
              <Button
                onClick={() => window.open(repoUrl, "_blank", "noopener,noreferrer")}
                variant="outline"
                size="lg"
                className={`border-2 ${colors.buttonOutline} bg-white/40 backdrop-blur hover:bg-white/60 transition-colors`}
              >
                <Github className="w-5 h-5 mr-2" />
                Ver no GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className={`w-6 h-10 border-2 ${colors.icon.replace('text-', 'border-')} rounded-full flex items-start justify-center p-2`}>
          <motion.div
            className={`w-1.5 h-1.5 ${colors.icon.replace('text-', 'bg-')} rounded-full`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Download Modal */}
      <DownloadModal
        open={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        downloadUrl={downloadUrl}
      />

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-24 md:h-32 lg:h-40" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
            className={`fill-white`}
            style={{ opacity: 1 }}
          />
        </svg>
      </div>
    </section>
  )
}
