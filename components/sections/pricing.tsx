"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Pricing() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  // --- THE KITCHEN: Visual Definitions ---
  // We define the "Look" for the 1st plan (Free) and 2nd plan (Pro)
  const planVisuals = [
    {
      highlighted: false,
      badgeVariant: "success" as const, // or "secondary" depending on your UI lib
      baseGradient: "from-emerald-500 to-green-500",
    },
    {
      highlighted: true,
      badgeVariant: "default" as const,
      baseGradient: "from-blue-500 to-indigo-500",
    }
  ]

  // --- MERGING DATA ---
  // Here we combine the Dictionary Text with the Visuals above
  const plans = [
    { ...t.pricing.free, ...planVisuals[0] }, // Merge Free Text + Free Visuals
    { ...t.pricing.pro,  ...planVisuals[1] }, // Merge Pro Text + Pro Visuals
  ]

  const themeStyles = {
    blue: {
      sectionBg: "from-blue-50 via-indigo-50 to-purple-50",
      orb1: "bg-blue-200 opacity-30",
      orb2: "bg-indigo-200 opacity-30",
      title: "text-gray-900",
      text: "text-gray-600",
      listText: "text-gray-700",
      cardBg: "bg-white/90 backdrop-blur-sm border-emerald-200",
      priceColor: "from-emerald-600 to-teal-600",
      proGradient: "from-blue-500 to-indigo-500",
      proBorder: "border-blue-500",
      proBadge: "from-blue-500 to-indigo-500",
    },
    pink: {
      sectionBg: "from-pink-50 via-rose-50 to-purple-50",
      orb1: "bg-rose-200 opacity-30",
      orb2: "bg-pink-200 opacity-30",
      title: "text-gray-900",
      text: "text-gray-600",
      listText: "text-gray-700",
      cardBg: "bg-white/90 backdrop-blur-sm border-pink-200",
      priceColor: "from-pink-600 to-rose-600",
      proGradient: "from-pink-500 to-rose-500",
      proBorder: "border-pink-500",
      proBadge: "from-pink-500 to-rose-500",
    },
    dark: {
      sectionBg: "from-slate-900 via-gray-900 to-black",
      orb1: "bg-blue-900 opacity-20",
      orb2: "bg-purple-900 opacity-20",
      title: "text-white",
      text: "text-slate-400",
      listText: "text-slate-300",
      cardBg: "bg-slate-900/50 backdrop-blur-md border-slate-800",
      priceColor: "from-emerald-400 to-teal-400",
      proGradient: "from-blue-600 to-indigo-600",
      proBorder: "border-indigo-500/50",
      proBadge: "from-blue-600 to-indigo-600",
    }
  }

  const s = themeStyles[theme] || themeStyles.blue

  return (
    <section className={`py-20 bg-gradient-to-br ${s.sectionBg} relative overflow-hidden transition-colors duration-700`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-10 right-10 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl animate-float transition-colors duration-700 ${s.orb1}`} />
        <div className={`absolute bottom-10 left-10 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-float transition-colors duration-700 ${s.orb2}`} style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${s.title}`}>
            {t.pricing.title}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${s.text}`}>
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* THE LOOP: We iterate over our merged 'plans' array */}
          {plans.map((plan, index) => {
            
            // Dynamic Gradient Logic
            const gradient = plan.highlighted ? s.proGradient : plan.baseGradient

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  className={`relative h-full transition-all duration-300 hover:shadow-xl
                    ${plan.highlighted ? `border-4 ${s.proBorder} shadow-2xl scale-105` : `border-2 ${theme === 'dark' ? 'border-slate-800' : 'border-emerald-200'}`} 
                    ${s.cardBg}
                  `}
                >
                  {/* Badges Logic */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    {plan.highlighted ? (
                      <Badge variant="default" className={`bg-gradient-to-r ${s.proBadge} text-white px-4 py-1 shadow-lg border-0`}>
                        <Crown className="w-4 h-4 mr-1" />
                        {plan.badge}
                      </Badge>
                    ) : (
                      <Badge variant={plan.badgeVariant} className={`px-4 py-1 shadow-lg ${theme === 'dark' ? 'bg-emerald-900 text-emerald-100 border-emerald-800' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>
                        <Sparkles className="w-4 h-4 mr-1" />
                        {plan.badge}
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="text-center pb-8 pt-12">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}
                    >
                      {plan.highlighted ? (
                        <Crown className="w-10 h-10 text-white" />
                      ) : (
                        <Sparkles className="w-10 h-10 text-white" />
                      )}
                    </div>
                    <CardTitle className={`text-3xl font-black mb-2 transition-colors duration-500 ${s.title}`}>
                      {plan.name}
                    </CardTitle>
                    <p className={`mb-4 transition-colors duration-500 ${s.text}`}>{plan.desc}</p>
                    <div className={`text-5xl font-black bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${plan.highlighted ? "from-gray-400 to-gray-600" : s.priceColor}`}>
                      {plan.price}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {/* Inner Loop for Features */}
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
                            className={`w-5 h-5 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className={`transition-colors duration-500 ${s.listText} ${featureIndex === 0 && plan.highlighted ? "font-bold" : ""}`}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.highlighted ? "default" : "default"}
                      size="lg"
                      className={`w-full text-white shadow-lg transition-all duration-300
                        ${plan.highlighted 
                          ? `bg-gradient-to-r ${s.proGradient} hover:brightness-110` 
                          : `bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700`
                        }
                      `}
                      disabled={plan.price === "Em Breve" || plan.price === "Coming Soon"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className={`transition-colors duration-500 ${s.text}`}>
            {t.pricing.footerText}
          </p>
        </motion.div>
      </div>
    </section>
  )
}