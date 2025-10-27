"use client"

import { motion } from "framer-motion"
import { X, Check, AlertCircle, Sparkles } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function ProblemSolution() {
  const { theme } = useTheme()
  const s = theme === "blue"
    ? {
        cardBg: "from-blue-50 to-indigo-50",
        cardBorder: "border-blue-200",
        orb: "bg-blue-200",
        iconGrad: "from-blue-500 to-indigo-500",
        sparkles: "text-blue-600",
        bullet: "bg-blue-500",
        infoBorder: "border-blue-200",
        infoText: "text-blue-900",
      }
    : {
        cardBg: "from-pink-50 to-rose-50",
        cardBorder: "border-pink-200",
        orb: "bg-pink-200",
        iconGrad: "from-pink-500 to-rose-500",
        sparkles: "text-pink-600",
        bullet: "bg-pink-500",
        infoBorder: "border-pink-200",
        infoText: "text-pink-900",
      }
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O Problema que Todo Jogador Enfrenta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manter o foco em farm, fights e ainda lembrar dos timings de runas e stacks é quase impossível.
            Um descuido, e o inimigo pega a runa… ou você perde um stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problema */}
          <motion.div
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sem Runinhas</h3>
            </div>

            <ul className="space-y-4">
              {[
                "Você esquece o tempo ideal pra fazer stacks.",
                "Deixa a runa de poder pro inimigo (de novo).",
                "Perde o XP dos 7 minutos porque ficou focado demais na lane.",
                "Anoitece e você é gankado sem nem perceber.",
                "A catapulta chega... e você ainda tá batendo em creep.",
              ].map((problem, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solução */}
          <motion.div
            className={`bg-gradient-to-br ${s.cardBg} rounded-3xl p-8 border-2 ${s.cardBorder} relative overflow-hidden`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${s.orb} rounded-full -mr-16 -mt-16 opacity-50`} />
            
            <div className="flex items-center gap-3 mb-6 relative">
              <div className={`w-12 h-12 bg-gradient-to-r ${s.iconGrad} rounded-xl flex items-center justify-center`}>
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Com Runinhas</h3>
              <Sparkles className={`w-5 h-5 ${s.sparkles} ml-auto`} />
            </div>

            <ul className="space-y-4 relative">
              {[
                "Avisos automáticos e precisos pra todas as runas",
                "Stack timing perfeito, sem erro",
                "Alertas antecipados de catapultas e ciclos",
                "Áudios e notificações inteligentes",
                "100% seguro, sem impacto no desempenho",
              ].map((solution, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-5 h-5 ${s.bullet} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{solution}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className={`mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border ${s.infoBorder}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className={`text-sm ${s.infoText} font-semibold`}>
                Foque no jogo. O Runinhas cuida dos timings.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
