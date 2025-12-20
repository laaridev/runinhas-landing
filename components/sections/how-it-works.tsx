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
  
  // Define styles for each theme
  const themeStyles = {
    blue: {
      bg: "bg-white",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      cardBg: "bg-white",
      cardTitle: "text-gray-900",
      cardSub: "text-gray-500",
      cardText: "text-gray-600",
      arrow: "from-blue-400 to-indigo-400",
      badge: "from-slate-700 to-slate-900 text-white", // Dark badge on light card
    },
    pink: {
      bg: "bg-pink-50/50",
      title: "text-pink-950",
      subtitle: "text-pink-800",
      cardBg: "bg-white/80",
      cardTitle: "text-pink-900",
      cardSub: "text-pink-400",
      cardText: "text-pink-700",
      arrow: "from-pink-400 to-rose-400",
      badge: "from-pink-600 to-rose-600 text-white",
    },
    dark: {
      bg: "bg-slate-950",
      title: "text-white",
      subtitle: "text-slate-400",
      cardBg: "bg-slate-900 border-opacity-50", // Dark card
      cardTitle: "text-slate-100",
      cardSub: "text-slate-400",
      cardText: "text-slate-400",
      arrow: "from-slate-700 to-gray-600", // Dark gray arrow
      badge: "from-white to-gray-200 text-slate-900", // White badge on dark card (Inverted)
    }
  }

  const styles = themeStyles[theme] || themeStyles.blue

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${styles.bg}`}>
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${styles.title}`}>
            Como Funciona
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${styles.subtitle}`}>
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
                  <div className={`group relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${step.borderColor} ${styles.cardBg}`}>
                    {/* Number Badge */}
                    <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-sm font-black shadow-lg transition-colors duration-500 ${styles.badge}`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-1 transition-colors duration-500 ${styles.cardTitle}`}>{step.title}</h3>
                    <p className={`text-xs font-semibold mb-3 transition-colors duration-500 ${styles.cardSub}`}>{step.subtitle}</p>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${styles.cardText}`}>{step.description}</p>
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
                    <div className={`w-10 h-10 bg-gradient-to-r rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${styles.arrow}`}>
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
                <div className={`relative rounded-2xl p-6 shadow-lg border-2 ${step.borderColor} ${styles.cardBg}`}>
                  <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-sm font-black shadow-lg ${styles.badge}`}>
                    {step.number}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-1 ${styles.cardTitle}`}>{step.title}</h3>
                      <p className={`text-xs font-semibold mb-2 ${styles.cardSub}`}>{step.subtitle}</p>
                      <p className={`text-sm leading-relaxed ${styles.cardText}`}>{step.description}</p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className={`w-8 h-8 bg-gradient-to-b rounded-full flex items-center justify-center ${styles.arrow}`}>
                      <ArrowRight className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}