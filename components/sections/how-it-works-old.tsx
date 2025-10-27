"use client"

import { motion } from "framer-motion"
import { Download, Play, Bell, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Baixe e Instale",
    description: "Instalação simples e rápida — disponível pra Windows e Linux.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "02",
    icon: Play,
    title: "Abra o Dota 2",
    description: "O Runinhas detecta automaticamente quando o jogo começa.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    number: "03",
    icon: Bell,
    title: "Receba os Avisos",
    description: "Alertas de voz e som em tempo real pra tudo que importa.",
    color: "from-cyan-500 to-blue-500",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
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
                      <motion.div
                        className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-emerald-100">
                        <span className="text-2xl font-black bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
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
                    <ArrowRight className="w-8 h-8 text-emerald-400 rotate-90 md:rotate-0" />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block glass px-8 py-4 rounded-2xl">
            <p className="text-lg text-gray-700 font-semibold">
              Simples assim! Nunca mais perca uma runa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
