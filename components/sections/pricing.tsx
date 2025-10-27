"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/contexts/theme-context"

const plans = [
  {
    name: "FREE",
    price: "Grátis pra sempre",
    description: "Perfeito pra começar",
    badge: "Mais Popular",
    badgeVariant: "success" as const,
    features: [
      "Avisos de todas as runas",
      "Stack timing automático",
      "Alertas de catapultas e ciclos",
      "Áudio pré-gravado incluso",
      "Interface moderna",
      "Atualizações automáticas",
      "Suporte comunitário",
    ],
    cta: "Baixe Grátis",
    highlighted: false,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    name: "PRO",
    price: "Em Breve",
    description: "Personalização máxima",
    badge: "Premium",
    badgeVariant: "default" as const,
    features: [
      "Tudo do FREE",
      "Vozes IA ElevenLabs (português e inglês)",
      "Mensagens customizadas",
      "Temas premium exclusivos",
      "Estatísticas detalhadas",
      "Sincronização em nuvem",
      "Suporte prioritário",
    ],
    cta: "Em Breve",
    highlighted: true,
    gradient: "from-blue-500 to-indigo-500",
  },
]

export function Pricing() {
  const { theme } = useTheme()

  const s = theme === "blue"
    ? {
        sectionBg: "from-blue-50 via-indigo-50 to-purple-50",
        orb1: "bg-blue-200",
        orb2: "bg-indigo-200",
        proGradient: "from-blue-500 to-indigo-500",
        proBorder: "border-blue-500",
        proBadge: "from-blue-500 to-indigo-500",
      }
    : {
        sectionBg: "from-pink-50 via-rose-50 to-purple-50",
        orb1: "bg-rose-200",
        orb2: "bg-pink-200",
        proGradient: "from-pink-500 to-rose-500",
        proBorder: "border-pink-500",
        proBadge: "from-pink-500 to-rose-500",
      }

  const themedPlans = plans.map((p) =>
    p.highlighted ? { ...p, gradient: s.proGradient } : p
  )

  return (
    <section className={`py-20 bg-gradient-to-br ${s.sectionBg} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 right-10 w-72 h-72 ${s.orb1} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float`} />
        <div className={`absolute bottom-10 left-10 w-96 h-96 ${s.orb2} rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float`} style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece grátis ou desbloqueie recursos premium com vozes IA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {themedPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`relative h-full ${
                  plan.highlighted
                    ? `border-4 ${s.proBorder} shadow-2xl scale-105`
                    : "border-2 border-emerald-200"
                } bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className={`bg-gradient-to-r ${s.proBadge} text-white px-4 py-1 shadow-lg`}>
                      <Crown className="w-4 h-4 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {!plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant={plan.badgeVariant} className="px-4 py-1 shadow-lg">
                      <Sparkles className="w-4 h-4 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-12">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-xl`}
                  >
                    {plan.highlighted ? (
                      <Crown className="w-10 h-10 text-white" />
                    ) : (
                      <Sparkles className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-3xl font-black mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className={`text-gray-700 ${feature.startsWith("Tudo") ? "font-bold" : ""}`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.highlighted ? "gradient" : "default"}
                    size="lg"
                    className="w-full"
                    disabled={plan.price === "Em Breve"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-600">
            A versão FREE já cobre tudo que você precisa pra subir de rank!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
