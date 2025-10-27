"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/contexts/theme-context"
import Image from "next/image"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-8 h-8">
              <Image
                src={theme === "blue" ? "/logo-runinha-blue.svg" : "/logo-runinha-pink.svg"}
                alt="Runinhas"
                width={32}
                height={32}
                className="drop-shadow-lg"
              />
            </div>
            <span
              className={`text-xl font-black bg-gradient-to-r ${
                theme === "blue"
                  ? "from-blue-600 via-indigo-600 to-purple-600"
                  : "from-pink-600 via-rose-600 to-purple-600"
              } bg-clip-text text-transparent`}
            >
              runinhas
            </span>
          </motion.div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
              theme === "blue"
                ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                : "bg-gradient-to-r from-pink-500 to-rose-500"
            } shadow-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
              animate={{
                x: theme === "blue" ? 0 : 32,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <span className="text-xs">{theme === "blue" ? "💙" : "💗"}</span>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
