"use client"

import { Github, Twitter, MessageCircle, Mail, Heart } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"

const footerLinks = {
  product: {
    title: "Produto",
    links: [
      { label: "Download", href: "#" },
      { label: "Recursos", href: "#features" },
      { label: "Documentação", href: "#" },
      { label: "Guia de Uso", href: "#" },
    ],
  },
  support: {
    title: "Suporte",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Discord", href: "#" },
      { label: "GitHub Issues", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
  company: {
    title: "Sobre",
    links: [
      { label: "Sobre o Projeto", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "Licença", href: "#" },
    ],
  },
}

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  const { theme } = useTheme()
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
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
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
              O assistente inteligente definitivo para jogadores de Dota 2.
              Nunca mais perca timings importantes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-lg bg-gray-800 ${s.socialHover} flex items-center justify-center transition-all duration-300 hover:scale-110 group`}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links sections */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className={`text-gray-400 ${s.hover} transition-colors duration-200 flex items-center gap-2 group`}
                    >
                      <span className={`w-0 h-0.5 ${s.bar} group-hover:w-4 transition-all duration-200`} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Runinhas. Todos os direitos
              reservados.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              for Dota 2 players
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
