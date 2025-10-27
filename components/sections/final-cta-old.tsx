"use client"

import { motion } from "framer-motion"
import { Download, Github, BookOpen, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 relative overflow-hidden">
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
                src="/logo-runinha-pink.svg"
                alt="Runinhas"
                width={96}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 hover:scale-105 shadow-2xl group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Baixe agora e nunca mais perca um timing importante
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

          {/* Quick links */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center text-emerald-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Documentação</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Guia Rápido</span>
            </a>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="mt-12 inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="glass-dark px-6 py-3 rounded-full text-white font-semibold">
              100% Gratuito • Open Source • Feito com ❤️ para jogadores de Dota 2
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
