"use client"

import { motion } from "framer-motion"
import { Server, Cpu, Volume2, Zap, ArrowRight, Gamepad2 } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const architecture = [
  {
    icon: Gamepad2,
    title: "Dota 2",
    subtitle: "Game State Integration",
    description: "O jogo envia dados em tempo real via API oficial da Valve",
    color: "from-red-500 to-orange-500",
    position: "left",
  },
  {
    icon: Server,
    title: "Backend Go",
    subtitle: "Processamento Ultra-Rápido",
    description: "Analisa eventos, calcula timings e dispara alertas instantâneos",
    color: "from-blue-500 to-cyan-500",
    position: "center",
  },
  {
    icon: Cpu,
    title: "Frontend React",
    subtitle: "Interface Moderna",
    description: "UI responsiva mostra status e permite configurações em tempo real",
    color: "from-purple-500 to-pink-500",
    position: "right",
  },
  {
    icon: Volume2,
    title: "Sistema de Áudio",
    subtitle: "Notificações Inteligentes",
    description: "Alertas de voz precisos no momento exato de cada evento",
    color: "from-green-500 to-emerald-500",
    position: "bottom",
  },
]

export function HowItWorks() {
  const { theme } = useTheme()
  const s = theme === "blue"
    ? {
        sectionBg: "from-gray-50 via-blue-50 to-purple-50",
        orb1: "bg-blue-200",
        orb2: "bg-purple-200",
        borderMain: "border-blue-200",
        arrow1: "from-red-400 to-blue-400",
        arrow2: "from-blue-400 to-purple-400",
        arrow3: "from-blue-400 to-green-400",
        stackGrad: "from-blue-600 to-indigo-600",
      }
    : {
        sectionBg: "from-gray-50 via-rose-50 to-purple-50",
        orb1: "bg-rose-200",
        orb2: "bg-purple-200",
        borderMain: "border-pink-200",
        arrow1: "from-red-400 to-rose-400",
        arrow2: "from-rose-400 to-purple-400",
        arrow3: "from-rose-400 to-green-400",
        stackGrad: "from-pink-600 to-rose-600",
      }
  return (
    <section className={`py-20 bg-gradient-to-br ${s.sectionBg} relative overflow-hidden`}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-20 left-20 w-96 h-96 ${s.orb1} rounded-full mix-blend-multiply filter blur-3xl opacity-20`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-20 right-20 w-96 h-96 ${s.orb2} rounded-full mix-blend-multiply filter blur-3xl opacity-20`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Arquitetura técnica simples e poderosa
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="max-w-6xl mx-auto">
          {/* Top Row - Dota 2 */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-red-200 max-w-md w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${architecture[0].color} flex items-center justify-center shadow-lg`}>
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{architecture[0].title}</h3>
                  <p className="text-sm text-gray-600 font-semibold">{architecture[0].subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700">{architecture[0].description}</p>
            </div>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${s.arrow1} rounded-full flex items-center justify-center shadow-lg`}>
              <ArrowRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </motion.div>

          {/* Middle Row - Backend Go */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`bg-white rounded-3xl p-8 shadow-2xl border-2 ${s.borderMain} max-w-md w-full relative`}>
              {/* Badge de performance */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Ultra Rápido
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${architecture[1].color} flex items-center justify-center shadow-lg`}>
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{architecture[1].title}</h3>
                  <p className="text-sm text-gray-600 font-semibold">{architecture[1].subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700">{architecture[1].description}</p>
            </div>
          </motion.div>

          {/* Arrows Split */}
          <motion.div
            className="flex justify-center gap-32 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${s.arrow2} rounded-full flex items-center justify-center shadow-lg`}>
              <ArrowRight className="w-6 h-6 text-white rotate-90" />
            </div>
            <div className={`w-12 h-12 bg-gradient-to-br ${s.arrow3} rounded-full flex items-center justify-center shadow-lg`}>
              <ArrowRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </motion.div>

          {/* Bottom Row - Frontend & Audio */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Frontend React */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-200 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${architecture[2].color} flex items-center justify-center shadow-lg`}>
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{architecture[2].title}</h3>
                    <p className="text-sm text-gray-600 font-semibold">{architecture[2].subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700">{architecture[2].description}</p>
              </div>
            </motion.div>

            {/* Sistema de Áudio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-green-200 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${architecture[3].color} flex items-center justify-center shadow-lg`}>
                    <Volume2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{architecture[3].title}</h3>
                    <p className="text-sm text-gray-600 font-semibold">{architecture[3].subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700">{architecture[3].description}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Info */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className={`bg-gradient-to-r ${s.stackGrad} rounded-3xl p-8 shadow-2xl text-white`}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-black">Go</p>
                <p className="text-sm opacity-90">Backend</p>
              </div>
              <div className="text-4xl opacity-50">+</div>
              <div className="text-center">
                <p className="text-3xl font-black">React</p>
                <p className="text-sm opacity-90">Frontend</p>
              </div>
              <div className="text-4xl opacity-50">+</div>
              <div className="text-center">
                <p className="text-3xl font-black">TypeScript</p>
                <p className="text-sm opacity-90">Type Safety</p>
              </div>
              <div className="text-4xl opacity-50">=</div>
              <div className="text-center">
                <p className="text-3xl font-black">🚀</p>
                <p className="text-sm opacity-90">Performance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
