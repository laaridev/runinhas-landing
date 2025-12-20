"use client"

import { motion } from "framer-motion"
import { Star, Quote, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"

const testimonials = [
  {
    name: "João Silva",
    rank: "Ancient 4",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
    content: "Melhorou meu rank em duas semanas! Agora pego todas as runas de poder e nunca erro o stack.",
    rating: 5,
    verified: true,
    highlight: false,
  },
  {
    name: "Maria Costa",
    rank: "Divine 2",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    content: "O app é leve, rápido e os alertas são perfeitos. Já virou parte do meu setup.",
    rating: 5,
    verified: true,
    highlight: false,
  },
  {
    name: "Pedro Santos",
    rank: "Legend 3",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
    content: "Posso focar só nas lutas. O Runinhas me lembra até da catapulta, é surreal.",
    rating: 5,
    verified: false,
    highlight: false,
  },
  {
    name: "Ana Lima",
    rank: "Immortal",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    content: "Como pro player, tempo é tudo. O Runinhas me dá aquela vantagem invisível que vence jogos.",
    rating: 5,
    verified: true,
    highlight: true,
  },
  {
    name: "Carlos Oliveira",
    rank: "Crusader 4",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    content: "Uso o modo grátis e já é completo. Nunca pensei que algo tão simples ajudaria tanto.",
    rating: 5,
    verified: false,
    highlight: false,
  },
  {
    name: "Lucas Ferreira",
    rank: "Archon 2",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    content: "A interface é linda e funcional. O aviso do stack me salvou várias vezes.",
    rating: 5,
    verified: true,
    highlight: false,
  },
]

export function Testimonials() {
  const { theme } = useTheme()
  
  // Define full style objects for all 3 themes
  const themeStyles = {
    blue: {
      gradient: "from-blue-50 to-indigo-50",
      accent: "from-blue-500 to-indigo-500",
      ring: "ring-blue-400",
      textAccent: "text-blue-600",
      cardBg: "bg-white",
      cardBorder: "border-gray-200 hover:border-blue-200",
      cardText: "text-gray-700",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      blob: "from-white/40", // Light blob
      highlightBorder: "border-blue-200",
    },
    pink: {
      gradient: "from-pink-50 to-rose-50",
      accent: "from-pink-500 to-rose-500",
      ring: "ring-pink-400",
      textAccent: "text-pink-600",
      cardBg: "bg-white",
      cardBorder: "border-gray-200 hover:border-pink-200",
      cardText: "text-gray-700",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      blob: "from-white/40", // Light blob
      highlightBorder: "border-pink-200",
    },
    dark: {
      gradient: "from-slate-950 via-gray-900 to-black",
      accent: "from-blue-600 to-indigo-600",
      ring: "ring-indigo-500",
      textAccent: "text-indigo-400", // Lighter text for dark bg
      cardBg: "bg-slate-900", // Dark card
      cardBorder: "border-slate-800 hover:border-slate-700",
      cardText: "text-slate-300", // Light gray text
      title: "text-white",
      subtitle: "text-slate-400",
      blob: "from-blue-900/20", // Dark subtle blob
      highlightBorder: "border-indigo-500/50",
    }
  }

  const s = themeStyles[theme] || themeStyles.blue

  return (
    <section className={`py-24 bg-gradient-to-br ${s.gradient} relative overflow-hidden transition-colors duration-700`}>
      {/* Decorative element - Transitions from White (light) to Dark Blue (Dark) */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${s.blob} to-transparent rounded-full blur-3xl transition-colors duration-700`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr ${s.blob} to-transparent rounded-full blur-3xl transition-colors duration-700`} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${s.accent} text-white text-sm font-semibold shadow-lg transition-all duration-500`}>
              <Star className="w-4 h-4 fill-white" />
              Avaliações 5 estrelas
            </div>
          </motion.div>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${s.title}`}>
            O Que Os Jogadores Dizem
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${s.subtitle}`}>
            Histórias reais de jogadores que melhoraram seu desempenho
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <div 
                className={`group relative h-full rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2
                  ${s.cardBg}
                  ${testimonial.highlight 
                    ? `${s.highlightBorder} ${theme === 'dark' ? 'bg-slate-800' : ''}` 
                    : s.cardBorder
                  }
                `}
              >
                {/* Highlight badge */}
                {testimonial.highlight && (
                  <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r ${s.accent} text-white text-xs font-bold shadow-lg flex items-center gap-1`}>
                    <Star className="w-3 h-3 fill-white" />
                    Destaque
                  </div>
                )}

                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className={`w-10 h-10 ${s.textAccent} opacity-40 transition-colors duration-500`} />
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className={`mb-6 leading-relaxed text-sm md:text-base transition-colors duration-500 ${s.cardText}`}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className={`flex items-center gap-3 pt-4 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-gray-100'} transition-colors duration-500`}>
                  <div className={`relative w-14 h-14 rounded-full overflow-hidden ring-2 ${s.ring} shadow-md group-hover:scale-105 transition-all duration-300`}>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className={`font-bold text-sm transition-colors duration-500 ${s.title}`}>
                        {testimonial.name}
                      </p>
                      {testimonial.verified && (
                        <CheckCircle2 className={`w-4 h-4 ${s.textAccent}`} />
                      )}
                    </div>
                    <p className={`text-xs font-semibold transition-colors duration-500 ${s.textAccent}`}>
                      {testimonial.rank}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}