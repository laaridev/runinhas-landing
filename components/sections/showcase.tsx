"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

export function Showcase() {
  const { theme } = useTheme()

  const colors = theme === "blue"
    ? {
        sectionBg: "from-blue-50 via-indigo-50 to-purple-50",
        orb1: "bg-blue-200",
        orb2: "bg-indigo-200",
        frame: "from-blue-500 to-indigo-500",
        glow: "from-blue-400/30 to-indigo-400/30",
        badge: "bg-blue-600",
      }
    : {
        sectionBg: "from-pink-50 via-rose-50 to-purple-50",
        orb1: "bg-rose-200",
        orb2: "bg-pink-200",
        frame: "from-pink-500 to-rose-500",
        glow: "from-pink-400/30 to-rose-400/30",
        badge: "bg-pink-600",
      }

  // Try themed screenshot first, then generic fallback
  const primary = theme === "blue" ? "/screenshot-blue.png" : "/screenshot-pink.png"
  const fallback = "/screenshot-app.png"
  const [src, setSrc] = useState<string>(primary)

  return (
    <section className={`relative py-20 bg-gradient-to-br ${colors.sectionBg} overflow-hidden`}>
      {/* Orbs background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute -top-16 -left-16 w-96 h-96 ${colors.orb1} rounded-full blur-3xl opacity-30`}
          animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute -bottom-16 -right-16 w-[30rem] h-[30rem] ${colors.orb2} rounded-full blur-3xl opacity-30`}
          animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Veja o Runinhas em ação
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interface moderna, responsiva e feita para ficar aberta enquanto você joga.
          </p>
        </motion.div>

        {/* Showcase frame */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="relative rounded-[28px] p-1 bg-white/60 backdrop-blur-xl shadow-2xl border border-white/70"
            whileHover={{ scale: 1.01, rotate: -0.2 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
          >
            {/* Gradient frame */}
            <div className={`absolute inset-0 rounded-[28px] p-[1px] bg-gradient-to-br ${colors.frame} opacity-90`} />

            {/* Inner content */}
            <div className="relative rounded-[26px] bg-white overflow-hidden">
              {/* Glow behind screenshot */}
              <div className={`absolute -inset-12 bg-gradient-to-tr ${colors.glow} blur-3xl opacity-60`} />

              {/* Screenshot area */}
              <motion.div
                className="relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8] w-full"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={src}
                  alt="Runinhas App Screenshot"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  onError={() => setSrc(fallback)}
                  className="object-cover"
                />

                {/* Animated highlights (fake hotspots) */}
                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.badge} animate-pulse`} />
                  <span className="text-[11px] font-semibold text-gray-700 bg-white/80 rounded-full px-2 py-0.5 shadow">
                    Alertas de runas
                  </span>
                </div>
                <div className="absolute right-6 bottom-6 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.badge} animate-pulse`} />
                  <span className="text-[11px] font-semibold text-gray-700 bg-white/80 rounded-full px-2 py-0.5 shadow">
                    Stack aos :53
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
