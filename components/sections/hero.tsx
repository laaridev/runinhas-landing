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
      orb1: "bg-blue-300",
      orb2: "bg-indigo-300",
      orb3: "bg-purple-300",
      text: "from-blue-600 via-indigo-600 to-purple-600",
      accent: "from-blue-600 to-indigo-600",
      button: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
      buttonOutline: "border-blue-600 text-blue-600 hover:bg-blue-50",
      icon: "text-blue-600",
      glow: "from-blue-400 to-indigo-400",
      logo: "/logo-runinha-blue.svg",
    },
    pink: {
      bg: "from-pink-50 via-rose-50 to-purple-50",
      orb1: "bg-pink-300",
      orb2: "bg-rose-300",
      orb3: "bg-purple-300",
      text: "from-pink-600 via-rose-600 to-purple-600",
      accent: "from-pink-600 to-rose-600",
      button: "from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700",
      buttonOutline: "border-pink-600 text-pink-600 hover:bg-pink-50",
      icon: "text-pink-600",
      glow: "from-pink-400 to-rose-400",
      logo: "/logo-runinha-pink.svg",
    },
  }

  const colors = themeColors[theme]
  // Per-letter wave fade config
  const brand = "runinhas"
  const letters = brand.split("")
  const letterBaseDuration = 4.6
  const letterDelay = 0.12
  const logoDuration = letterBaseDuration + letterDelay * (letters.length - 1)

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${colors.bg} py-12 lg:py-16`}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 ${colors.orb1} rounded-full mix-blend-multiply filter blur-xl opacity-30`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute top-40 right-10 w-96 h-96 ${colors.orb2} rounded-full mix-blend-multiply filter blur-xl opacity-30`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-1/2 w-80 h-80 ${colors.orb3} rounded-full mix-blend-multiply filter blur-xl opacity-30`}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Radial soft light overlay (even softer) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.75)_0%,_rgba(219,234,254,0.3)_35%,_transparent_70%)]" />
          {/* Theme toggle - compact with label */}
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 text-xs text-slate-700/80">
          <span className="font-medium select-none">Tema</span>
          <motion.button
            onClick={toggleTheme}
            className="relative w-[86px] h-9 rounded-full border border-white/60 bg-white/65 backdrop-blur shadow-lg overflow-hidden"
            whileTap={{ scale: 0.97 }}
            title="Alternar tema (Azul ↔ Rosa)"
            aria-label="Alternar tema"
          >
            {/* track gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'blue' ? 'from-blue-500/30 via-indigo-500/30 to-purple-500/30' : 'from-pink-500/30 via-rose-500/30 to-purple-500/30'}`} />
            {/* dots hint */}
            <div className="absolute inset-0 flex items-center justify-between px-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
            </div>
            {/* knob */}
            <motion.div
              className="absolute top-1 left-1 w-7 h-7 rounded-full bg-white shadow-md grid place-items-center"
              animate={{ x: theme === 'blue' ? 0 : 46 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            >
              <Palette className="w-4 h-4 text-slate-500" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      <div className="container mx-auto px-8 sm:px-10 md:px-12 lg:px-16 xl:px-24 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Content */}
          <motion.div
            className="flex-1 text-center lg:text-left relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div className="flex items-baseline justify-center lg:justify-start gap-3 md:gap-4">
                <motion.h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r ${colors.text} bg-clip-text text-transparent tracking-tight leading-none select-none`}
                  whileHover={{ scale: 1.02 }}
                >
                  {letters.map((ch, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: letterBaseDuration, delay: i * letterDelay, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.div
                  className="relative w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9"
                  animate={{ y: [-2, 2], rotate: [-2, 2], scale: [1, 1.03, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: logoDuration, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                >
                  <Image src={colors.logo} alt="Runinhas" fill className="object-contain drop-shadow-[0_0_6px_rgba(255,111,207,0.5)] select-none" />
                </motion.div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-2xl lg:text-3xl text-slate-700 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Porque esquecer o timing é coisa do passado.
            </motion.p>

            {/* Sub subtitle */}
            <motion.p
              className="text-lg lg:text-xl text-slate-600/90 tracking-wide mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              O assistente de voz que te lembra de todos os tempos essenciais do Dota 2.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={() => setDownloadOpen(true)}
                variant="gradient"
                size="lg"
                className={`group bg-gradient-to-r ${colors.button} shadow-inner ring-1 ring-white/50 shadow-xl`}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Baixe Grátis v1.0.0
              </Button>
              <Button
                onClick={() => window.open(repoUrl, "_blank", "noopener,noreferrer")}
                variant="outline"
                size="lg"
                className={`group border-2 ${colors.buttonOutline} bg-white/30 backdrop-blur-md hover:bg-white/40 ring-1 ring-inset ring-white/40` }
              >
                <Github className="w-5 h-5 mr-2" />
                Ver no GitHub
              </Button>
            </motion.div>

            {/* Less visual noise: removed platform badges and extra note */}
          </motion.div>

          {/* Right side - App Screenshot/Demo */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.glow} rounded-3xl blur-3xl opacity-30 animate-glow`} />
              
              {/* Screenshot placeholder - usando uma das imagens fornecidas */}
              <motion.div
                className="relative glass-dark rounded-3xl p-8 shadow-2xl"
                whileHover={{ rotate: -0.6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl overflow-hidden">
                  <div className="space-y-4">
                    {/* Simulating the app interface */}
                    <motion.div className="flex items-center justify-between" animate={{ y: [0, -2, 0] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}>
                      <div className="flex items-center gap-3">
                        <motion.div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center" animate={{ rotate: [-6, 6, -6] }} transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}>
                          💧
                        </motion.div>
                        <div>
                          <h3 className="text-white font-bold text-lg">Runa de Água</h3>
                          <p className="text-white/70 text-sm">Regeneração instantânea de HP/Mana</p>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-full px-3 py-1">
                        <motion.span className="text-white font-bold" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
                          40s
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-center justify-between" animate={{ y: [0, -2, 0] }} transition={{ duration: 6.6, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}>
                      <div className="flex items-center gap-3">
                        <motion.div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center" animate={{ rotate: [6, -6, 6] }} transition={{ duration: 8.5, ease: "easeInOut", repeat: Infinity }}>
                          ⚡
                        </motion.div>
                        <div>
                          <h3 className="text-white font-bold text-lg">Runa de Poder</h3>
                          <p className="text-white/70 text-sm">Runas de utilidade ou dano</p>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-full px-3 py-1">
                        <motion.span className="text-white font-bold" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}>
                          50s
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-center justify-between" animate={{ y: [0, -2, 0] }} transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 0.35 }}>
                      <div className="flex items-center gap-3">
                        <motion.div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center" animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}>
                          📦
                        </motion.div>
                        <div>
                          <h3 className="text-white font-bold text-lg">Stack Timing</h3>
                          <p className="text-white/70 text-sm">Aviso para stackar camps de neutrals</p>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-full px-3 py-1">
                        <motion.span className="text-white font-bold" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}>
                          5s
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className={`w-6 h-10 border-2 ${colors.icon.replace('text-', 'border-')} rounded-full flex items-start justify-center p-2`}>
          <motion.div
            className={`w-1.5 h-1.5 ${colors.icon.replace('text-', 'bg-')} rounded-full`}
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} downloadUrl={downloadUrl} />
    </section>
  )
}
