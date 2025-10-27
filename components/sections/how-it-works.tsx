"use client"

import { motion } from "framer-motion"
import { Server, Cpu, Volume2, ArrowRight, Gamepad2 } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const steps = [
  {
    icon: Gamepad2,
    number: "01",
    title: "Dota 2",
    subtitle: "Game State Integration",
    description: "API oficial da Valve envia eventos do jogo em tempo real",
    color: "from-red-500 to-orange-500",
    borderColor: "border-red-300",
  },
  {
    icon: Server,
    number: "02",
    title: "Backend Go",
    subtitle: "Processamento Ultra-Rápido",
    description: "Motor Go analisa eventos e calcula timings com latência < 10ms",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-300",
  },
  {
    icon: Cpu,
    title: "Frontend React",
    number: "03",
    subtitle: "Interface Moderna",
    description: "UI responsiva exibe status e configurações em tempo real",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-300",
  },
  {
    icon: Volume2,
    number: "04",
    title: "Sistema de Áudio",
    subtitle: "Notificações Inteligentes",
    description: "Alertas de voz precisos no momento exato de cada evento",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-300",
  },
]

export function HowItWorks() {
  const { theme } = useTheme()
  
  const arrowColor = theme === "blue" 
    ? "from-blue-400 to-indigo-400" 
    : "from-pink-400 to-rose-400"

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fluxo simplificado de ponta a ponta
          </p>
        </motion.div>

        {/* Horizontal Flow */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop horizontal */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                {/* Step Card */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${step.borderColor}`}>
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white font-black flex items-center justify-center text-sm shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-xs font-semibold text-gray-500 mb-3">{step.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex-shrink-0 mx-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index + 0.5) * 0.15 }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${arrowColor} rounded-full flex items-center justify-center shadow-md`}>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet vertical */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 ${step.borderColor}`}>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white font-black flex items-center justify-center text-sm shadow-lg">
                    {step.number}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-xs font-semibold text-gray-500 mb-2">{step.subtitle}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className={`w-8 h-8 bg-gradient-to-b ${arrowColor} rounded-full flex items-center justify-center`}>
                      <ArrowRight className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badge */}
        <motion.div
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className={`bg-gradient-to-r ${theme === 'blue' ? 'from-blue-600 to-indigo-600' : 'from-pink-600 to-rose-600'} rounded-2xl p-8 shadow-xl`}>
            <div className="flex items-center justify-center gap-6 flex-wrap text-white">
              <div className="text-center">
                <p className="text-2xl font-black">Go</p>
                <p className="text-xs opacity-80">Backend</p>
              </div>
              <div className="text-2xl opacity-60">→</div>
              <div className="text-center">
                <p className="text-2xl font-black">React</p>
                <p className="text-xs opacity-80">Frontend</p>
              </div>
              <div className="text-2xl opacity-60">→</div>
              <div className="text-center">
                <p className="text-2xl font-black">TypeScript</p>
                <p className="text-xs opacity-80">Type Safety</p>
              </div>
              <div className="text-2xl opacity-60">=</div>
              <div className="text-center">
                <p className="text-3xl">⚡</p>
                <p className="text-xs opacity-80 font-semibold">Ultra Rápido</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
