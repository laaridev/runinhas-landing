"use client"

import { Github, Twitter, MessageCircle, Mail, Heart } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { theme } = useTheme()
  const { t } = useLanguage()

  // --- KITCHEN: Links & Visuals (Static) ---
  const socialVisuals = [
    { icon: Github, href: "https://github.com/laaridev/runinhas", key: "github" },
    { icon: Twitter, href: "#", key: "twitter" },
    { icon: MessageCircle, href: "#", key: "discord" },
    { icon: Mail, href: "mailto:contact@runinhas.com", key: "email" },
  ]

  // Map keys (product, support, company) to URLs
  const sectionUrls = {
    product: ["#download", "#features", "#", "#guide"],
    support: ["#faq", "#discord", "https://github.com/laaridev/runinhas/issues", "#contact"],
    company: ["#about", "#changelog", "#roadmap", "#license"],
  }

  const s = theme === "blue"
    ? {
        logo: "/logo-runinha-blue.svg",
        hover: "hover:text-blue-400",
        bar: "bg-blue-400",
        socialHover: "hover:bg-blue-600",
      }
    : {
        logo: "/logo-runinha-pink.svg",
        hover: "hover:text-pink-400",
        bar: "bg-pink-400",
        socialHover: "hover:bg-pink-600",
      }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={s.logo}
                alt="Runinhas"
                width={40}
                height={40}
              />
              <span className="text-2xl font-black text-white">runinhas</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              {t.footer.brandDesc}
            </p>
            <div className="flex gap-4">
              {socialVisuals.map((social, index) => {
                const Icon = social.icon
                // Access dynamic key safely
                const label = t.footer.socialLabels[social.key as keyof typeof t.footer.socialLabels]
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={label}
                    className={`w-10 h-10 rounded-lg bg-gray-800 ${s.socialHover} flex items-center justify-center transition-all duration-300 hover:scale-110 group`}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns Loop */}
          {Object.entries(t.footer.columns).map(([key, section]) => {
            const urls = sectionUrls[key as keyof typeof sectionUrls]
            return (
              <div key={key}>
                <h3 className="text-white font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((label, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={urls[linkIndex] || "#"}
                        className={`text-gray-400 ${s.hover} transition-colors duration-200 flex items-center gap-2 group`}
                      >
                        <span className={`w-0 h-0.5 ${s.bar} group-hover:w-4 transition-all duration-200`} />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {t.footer.bottom.rights}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              {t.footer.bottom.madeWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              {t.footer.bottom.by}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}