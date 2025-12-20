"use client"

import { motion } from "framer-motion"
import { Download, Play, Bell, ArrowRight } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Baixe e Instale",
    description: "Instalação simples e rápida — disponível pra Windows e Linux.",
  },
  {
    number: "02",
    icon: Play,
    title: "Abra o Dota 2",
    description: "O Runinhas detecta automaticamente quando o jogo começa.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Receba os Avisos",
    description: "Alertas de voz e som em tempo real pra tudo que importa.",
  },
]

export function HowToUse() {
  const { theme } = useTheme()

  // Centralized styles configuration
  const themeStyles = {
    blue: {
      bg: "bg-white",
      bgDecoration: "via-blue-50/50",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      stepTitle: "text-gray-900",
      stepDesc: "text-gray-600",
      arrow: "text-blue-400",
      // Badge styles
      badgeBg: "bg-white",
      badgeBorder: "border-blue-100",
      badgeText: "from-blue-600 to-indigo-600",
      // Icon Gradients
      gradients: [
        "from-blue-500 to-indigo-500",
        "from-indigo-500 to-purple-500",
        "from-purple-500 to-pink-500",
      ]
    },
    pink: {
      bg: "bg-white",
      bgDecoration: "via-rose-50/50",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      stepTitle: "text-gray-900",
      stepDesc: "text-gray-600",
      arrow: "text-pink-400",
      // Badge styles
      badgeBg: "bg-white",
      badgeBorder: "border-pink-100",
      badgeText: "from-pink-600 to-rose-600",
      // Icon Gradients
      gradients: [
        "from-pink-500 to-rose-500",
        "from-rose-500 to-purple-500",
        "from-purple-500 to-pink-500",
      ]
    },
    dark: {
      bg: "bg-slate-950",
      bgDecoration: "via-blue-900/10", // Very subtle glow
      title: "text-white",
      subtitle: "text-slate-400",
      stepTitle: "text-slate-100",
      stepDesc: "text-slate-400",
      arrow: "text-slate-600",
      // Badge styles
      badgeBg: "bg-slate-800", // Dark badge
      badgeBorder: "border-slate-700",
      badgeText: "from-white to-slate-200", // White number
      // Icon Gradients (Neon look for dark mode)
      gradients: [
        "from-blue-600 to-indigo-600",
        "from-indigo-600 to-violet-600",
        "from-violet-600 to-purple-600",
      ]
    }
  }

  const s = themeStyles[theme] || themeStyles.blue

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-500 ${s.bg}`}>
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${s.bgDecoration} to-transparent transition-colors duration-500`} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${s.title}`}>
            Como Utilizar
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${s.subtitle}`}>
            3 passos simples para nunca mais perder um timing importante
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index}>
                <motion.div
                  className="flex flex-col md:flex-row items-center gap-8 mb-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Number and Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Big Colored Square */}
                      <motion.div
                        className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${s.gradients[index]} flex items-center justify-center shadow-2xl`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                      
                      {/* Floating Badge (Number) */}
                      <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center border-4 transition-colors duration-500 ${s.badgeBg} ${s.badgeBorder}`}>
                        <span className={`text-2xl font-black bg-gradient-to-br bg-clip-text text-transparent transition-all duration-500 ${s.badgeText}`}>
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className={`text-3xl font-bold mb-3 transition-colors duration-500 ${s.stepTitle}`}>
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${s.stepDesc}`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="flex justify-center my-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.2 }}
                  >
                    <ArrowRight className={`w-8 h-8 rotate-90 md:rotate-0 transition-colors duration-500 ${s.arrow}`} />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}