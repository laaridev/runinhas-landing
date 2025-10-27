"use client"

import { motion } from "framer-motion"
import {
  Droplet,
  Zap,
  Sun,
  Layout,
  Sparkles,
  Settings,
  Bell,
  Clock,
  Package,
  Shield,
  Gauge,
  Palette,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Droplet,
    title: "Avisos de Runas Precisos",
    description: "Notificações exatas para Bounty, Power, Water e Wisdom Runes, sempre no segundo certo",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Package,
    title: "Stack Timing Automático",
    description: "Lembretes perfeitos aos :53 — nunca mais perca um stack de neutrals",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sun,
    title: "Ciclo Dia/Noite",
    description: "Saiba exatamente quando o mapa muda pra ajustar movimentação e ganks",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Layout,
    title: "Interface Moderna",
    description: "UI leve e responsiva feita em React + Tailwind + TypeScript",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Bell,
    title: "Modo FREE Completo",
    description: "Todos os alertas com áudios integrados, 100% offline e gratuito",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Customização PRO",
    description: "Vozes IA ElevenLabs, mensagens personalizadas e estatísticas avançadas",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Gauge,
    title: "Zero FPS Impact",
    description: "Backend em Go otimizado — roda em paralelo sem afetar o jogo",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Totalmente Seguro",
    description: "Usa apenas Game State Integration (GSI) — recurso oficial da Valve",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Clock,
    title: "Ajuste de Antecedência",
    description: "Escolha quantos segundos antes quer receber o aviso de cada evento",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Palette,
    title: "Temas Personalizáveis",
    description: "Mude cores e estilo do app de acordo com o seu setup",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Settings,
    title: "Configurações Avançadas",
    description: "Controle completo sobre quais eventos você quer ser notificado",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Atualização Automática",
    description: "Sempre tenha a versão mais recente com atualizações automáticas",
    color: "from-yellow-500 to-orange-500",
  },
]

export function Features() {
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
            Recursos Poderosos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para dominar os timings e subir de rank
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300 bg-white/80 backdrop-blur-sm border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
