"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Lock, Zap, Heart, Server } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/contexts/theme-context"

export function Security() {
  const { theme } = useTheme()
  const isDark = theme === "dark" // Helper variable

  const themeStyles = {
    blue: {
      sectionBg: "from-blue-50 via-indigo-50 to-purple-50",
      orb1: "bg-blue-200",
      orb2: "bg-purple-200",
      badgeBorder: "border-blue-200",
      badgeIcon: "text-blue-600",
      cardBorder: "border-blue-200",
      cardBgTo: "to-blue-50",
      cardAccent: "from-blue-400 to-purple-400",
      iconGrad: "from-blue-500 to-indigo-600",
      featureBorder: "border-blue-100",
      featureIconGrad: "from-blue-500 to-indigo-600",
      bottomCtaGrad: "from-blue-500 to-indigo-600",
    },
    pink: {
      sectionBg: "from-pink-50 via-rose-50 to-purple-50",
      orb1: "bg-rose-200",
      orb2: "bg-purple-200",
      badgeBorder: "border-pink-200",
      badgeIcon: "text-pink-600",
      cardBorder: "border-pink-200",
      cardBgTo: "to-pink-50",
      cardAccent: "from-pink-400 to-purple-400",
      iconGrad: "from-pink-500 to-rose-600",
      featureBorder: "border-pink-100",
      featureIconGrad: "from-pink-500 to-rose-600",
      bottomCtaGrad: "from-pink-500 to-rose-600",
    },
    dark: {
      // Dark Mode Palette
      sectionBg: "from-gray-900 via-slate-900 to-black",
      orb1: "bg-slate-700",
      orb2: "bg-gray-800",
      badgeBorder: "border-gray-600",
      badgeIcon: "text-gray-300",
      cardBorder: "border-gray-700",
      cardBgTo: "to-gray-800", // Gradient ends in dark gray
      cardAccent: "from-slate-700 to-gray-800",
      iconGrad: "from-slate-700 to-gray-800",
      featureBorder: "border-gray-700",
      featureIconGrad: "from-slate-700 to-gray-800",
      bottomCtaGrad: "from-slate-700 to-gray-800",
    }
  }

  const s = themeStyles[theme]

  const features = [
    {
      icon: Shield,
      title: "Ferramenta Oficial",
      description: "Usa apenas Game State Integration (GSI), recurso oficial fornecido pela Valve",
    },
    {
      icon: Lock,
      title: "100% Seguro",
      description: "Não modifica arquivos do jogo nem interfere na memória do Dota 2",
    },
    {
      icon: Zap,
      title: "Zero FPS Impact",
      description: "Roda em paralelo sem afetar o desempenho do jogo",
    },
    {
      icon: Server,
      title: "Sem Conexão Externa",
      description: "Funciona completamente offline, sem enviar dados para servidores",
    },
  ]

  return (
    <section className={`py-20 bg-gradient-to-br ${s.sectionBg} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-20 right-20 w-96 h-96 ${s.orb1} rounded-full mix-blend-multiply filter blur-3xl opacity-30`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-20 w-96 h-96 ${s.orb2} rounded-full mix-blend-multiply filter blur-3xl opacity-30`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            O Runinhas é seguro?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            O Runinhas usa apenas tecnologia oficial e aprovada pela Valve.
            Sem hacks, sem cheats, sem riscos.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={`
            bg-gradient-to-br 
            ${isDark ? "from-gray-900" : "from-white"} 
            ${s.cardBgTo} 
            rounded-3xl p-8 lg:p-12 shadow-2xl border-2 ${s.cardBorder} relative overflow-hidden
          `}>
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${s.cardAccent} rounded-full opacity-10 -mr-32 -mt-32`} />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <motion.div
                  className="flex-shrink-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className={`w-32 h-32 bg-gradient-to-br ${s.iconGrad} rounded-3xl flex items-center justify-center shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-300`}>
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                </motion.div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Game State Integration (GSI)
                  </h3>
                  <p className={`text-lg mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    O Runinhas utiliza o <strong>Game State Integration</strong>, uma API oficial da Valve
                    que permite aplicativos externos receberem informações do jogo de forma segura.
                    É a mesma tecnologia usada por streamers profissionais e ferramentas autorizadas.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? "bg-green-900/30 text-green-200 border-green-800" : "bg-green-100 text-green-800 border-green-200"}`}>
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold text-sm">Aprovado pela Valve</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border 
                      ${isDark 
                        ? "bg-slate-800 text-slate-200 border-slate-700" 
                        : (theme === "blue" ? "bg-blue-100 text-blue-800 border-blue-200" : "bg-pink-100 text-pink-800 border-pink-200")
                      }`}>
                      <Lock className="w-5 h-5" />
                      <span className="font-semibold text-sm">Sem VAC Ban</span>
                    </div>

                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? "bg-purple-900/30 text-purple-200 border-purple-800" : "bg-purple-100 text-purple-800 border-purple-200"}`}>
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold text-sm">Open Source</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className={`
                  ${isDark ? "bg-gray-800/80" : "bg-white/80"} 
                  backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 ${s.featureBorder} 
                  hover:shadow-xl hover:scale-105 transition-all duration-300 h-full
                `}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${s.featureIconGrad} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className={`inline-block bg-gradient-to-r ${s.bottomCtaGrad} text-white px-8 py-4 rounded-2xl shadow-xl`}>
            <p className="text-lg font-semibold">
              🛡️ Use com tranquilidade. O Runinhas é 100% seguro e aprovado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}