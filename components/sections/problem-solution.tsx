"use client"

import { motion } from "framer-motion"
import { X, Check, AlertCircle, Sparkles } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function ProblemSolution() {
  const { theme } = useTheme()

  // STEP 1: DEFINE THE STYLES FOR ALL 3 THEMES
  // Instead of "if/else", we use an object to map the keys.
  const themeStyles = {
    blue: {
      cardBg: "from-blue-50 to-indigo-50",
      cardBorder: "border-blue-200",
      orb: "bg-blue-200",
      iconGrad: "from-blue-500 to-indigo-500",
      sparkles: "text-blue-600",
      bullet: "bg-blue-500",
      infoBorder: "border-blue-200",
      infoText: "text-blue-900",
    },
    pink: {
      cardBg: "from-pink-50 to-rose-50",
      cardBorder: "border-pink-200",
      orb: "bg-pink-200",
      iconGrad: "from-pink-500 to-rose-500",
      sparkles: "text-pink-600",
      bullet: "bg-pink-500",
      infoBorder: "border-pink-200",
      infoText: "text-pink-900",
    },
    dark: {
      // Dark Mode Palette (Grays/Slates)
      cardBg: "from-gray-900 to-slate-900",
      cardBorder: "border-gray-700",
      orb: "bg-slate-700",
      iconGrad: "from-slate-600 to-gray-700",
      sparkles: "text-gray-400",
      bullet: "bg-slate-600",
      infoBorder: "border-gray-700",
      infoText: "text-gray-300",
    }
  }

  // Get current styles based on theme
  const s = themeStyles[theme]

  // Helper boolean to check if we are in dark mode (to fix the Red card and text)
  const isDark = theme === "dark"

  return (
    // STEP 2: FIX THE MAIN BACKGROUND AND TEXT
    // Changed "bg-white" to dynamic check
    <section className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Dynamic Title Color */}
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            O Problema que Todo Jogador Enfrenta
          </h2>
          {/* Dynamic Description Color */}
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Manter o foco em farm, fights e ainda lembrar dos timings de runas e stacks é quase impossível.
            Um descuido, e o inimigo pega a runa… ou você perde um stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problema Card (This is usually RED, but in dark mode we need DARK RED) */}
          <motion.div
            className={`rounded-3xl p-8 border-2 ${
              isDark 
                ? "bg-gradient-to-br from-red-950 to-orange-950 border-red-900" // Dark Red Style
                : "bg-gradient-to-br from-red-50 to-orange-50 border-red-200"   // Light Red Style
            }`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                Sem Runinhas
              </h3>
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
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {problem}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solução Card (Uses our new 's' object) */}
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
              {/* Dynamic Title Color for Solution Card */}
              <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                Com Runinhas
              </h3>
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
                  {/* Dynamic List Text */}
                  <span className={`${isDark ? "text-gray-300" : "text-gray-700"} font-medium`}>
                    {solution}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              // Updated background logic for the info box to handle dark mode
              className={`mt-6 p-4 rounded-xl border ${s.infoBorder} ${
                isDark ? "bg-gray-800/60" : "bg-white/60"
              } backdrop-blur-sm`}
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