"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    name: "João Silva",
    rank: "Ancient 4",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
    content: "Melhorou meu rank em duas semanas! Agora pego todas as runas de poder e nunca erro o stack.",
    rating: 5,
  },
  {
    name: "Maria Costa",
    rank: "Divine 2",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    content: "O app é leve, rápido e os alertas são perfeitos. Já virou parte do meu setup.",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    rank: "Legend 3",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces",
    content: "Posso focar só nas lutas. O Runinhas me lembra até da catapulta, é surreal.",
    rating: 5,
  },
  {
    name: "Ana Lima",
    rank: "Immortal",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    content: "Como pro player, tempo é tudo. O Runinhas me dá aquela vantagem invisível que vence jogos.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    rank: "Crusader 4",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    content: "Uso o modo grátis e já é completo. Nunca pensei que algo tão simples ajudaria tanto.",
    rating: 5,
  },
  {
    name: "Lucas Ferreira",
    rank: "Archon 2",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    content: "A interface é linda e funcional. O aviso do stack me salvou várias vezes.",
    rating: 5,
  },
]

export function Testimonials() {
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
            O Que Os Jogadores Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que os jogadores estão falando
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-emerald-400 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-emerald-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-400 shadow-lg">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-emerald-600 font-semibold">
                        {testimonial.rank}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
