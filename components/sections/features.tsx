"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context" 
import { useLanguage } from "@/contexts/language-context"
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

export function Features() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  // --- THE KITCHEN: Visuals Only ---
  // The order here MUST match the order of text in your Dictionary
  const featureVisuals = [
    { icon: Droplet, color: "from-blue-500 to-cyan-500" },      // 1. Runes
    { icon: Package, color: "from-purple-500 to-pink-500" },    // 2. Stacks
    { icon: Sun,     color: "from-orange-500 to-yellow-500" },  // 3. Day/Night
    { icon: Layout,  color: "from-emerald-500 to-teal-500" },   // 4. Interface
    { icon: Bell,    color: "from-green-500 to-emerald-500" },  // 5. Free Mode
    { icon: Sparkles, color: "from-violet-500 to-purple-500" }, // 6. Customization
    { icon: Gauge,   color: "from-red-500 to-orange-500" },     // 7. Zero FPS
    { icon: Shield,  color: "from-indigo-500 to-blue-500" },    // 8. Secure
    { icon: Clock,   color: "from-pink-500 to-rose-500" },      // 9. Timing
    { icon: Palette, color: "from-cyan-500 to-blue-500" },      // 10. Themes
    { icon: Settings, color: "from-teal-500 to-green-500" },    // 11. Settings
    { icon: Zap,     color: "from-yellow-500 to-orange-500" },  // 12. Updates
  ]

  // Styles logic
  const themeStyles = {
    blue: {
      sectionBg: "bg-white",
      title: "text-slate-900",
      subtitle: "text-slate-600",
      cardBg: "bg-white/80 border-slate-100",
      cardTitle: "text-slate-900",
      cardText: "text-slate-600",
    },
    pink: {
      sectionBg: "bg-pink-50/30", 
      title: "text-pink-950",
      subtitle: "text-pink-800",
      cardBg: "bg-white/80 border-pink-100",
      cardTitle: "text-pink-900",
      cardText: "text-pink-700",
    },
    dark: {
      sectionBg: "bg-slate-950",
      title: "text-white",
      subtitle: "text-slate-400",
      cardBg: "bg-slate-900/50 border-slate-800",
      cardTitle: "text-slate-100",
      cardText: "text-slate-400",
    }
  }

  const styles = themeStyles[theme] || themeStyles.blue

  // --- THE TABLE: Serving the content ---
  return (
    <section className={`py-20 transition-colors duration-500 ${styles.sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${styles.title}`}>
            {t.features.title}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${styles.subtitle}`}>
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* THE ZIPPER LOOP */}
          {t.features.list.map((feature, index) => {
            
            const visual = featureVisuals[index] || featureVisuals[0] 
            const Icon = visual.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className={`h-full hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border-2 ${styles.cardBg}`}>
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${visual.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${styles.cardTitle}`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed transition-colors duration-500 ${styles.cardText}`}>
                      {feature.desc}
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