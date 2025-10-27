"use client"

import { motion } from "framer-motion"
import { Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"

export function FinalCTA() {
  const { theme } = useTheme()

  const styles = {
    blue: {
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      textTint: "text-blue-50",
      buttonText: "text-blue-600",
      logo: "/logo-runinha-blue.svg",
    },
    pink: {
      gradient: "from-pink-600 via-rose-600 to-purple-600",
      textTint: "text-pink-50",
      buttonText: "text-pink-600",
      logo: "/logo-runinha-pink.svg",
    },
  } as const

  const s = styles[theme]

  return (
    <section className={`py-20 bg-gradient-to-br ${s.gradient} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-24 h-24 animate-float">
              <Image
                src={s.logo}
                alt="Runinhas"
                width={96}
                height={96}
                className="drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Pronto pra Subir de Rank?
          </motion.h2>

          <motion.p
            className={`text-xl lg:text-2xl ${s.textTint} mb-12 max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            consistência de jogo com o Runinhas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className={`bg-white ${s.buttonText} hover:bg-white/90 hover:scale-105 shadow-2xl group`}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Baixe agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver no GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
