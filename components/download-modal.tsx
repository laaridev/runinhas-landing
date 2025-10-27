"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ShieldAlert, Info, X, Download as DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"

type Props = {
  open: boolean
  onClose: () => void
  downloadUrl: string
}

export function DownloadModal({ open, onClose, downloadUrl }: Props) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  const s = theme === "blue"
    ? {
        frame: "from-blue-600 to-indigo-600",
        badge: "bg-blue-100 text-blue-700",
        accent: "from-blue-600 to-indigo-600",
      }
    : {
        frame: "from-pink-600 to-rose-600",
        badge: "bg-pink-100 text-pink-700",
        accent: "from-pink-600 to-rose-600",
      }

  const handleDownload = () => {
    window.open(downloadUrl, "_blank", "noopener,noreferrer")
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

          {/* Centered container */}
          <div className="fixed inset-0 grid place-items-center pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Aviso do Windows SmartScreen"
              className="w-[92%] max-w-2xl pointer-events-auto"
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className={`rounded-2xl p-[1px] bg-gradient-to-br ${s.frame} shadow-2xl`}>
                <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl grid place-items-center ${s.badge}`}>
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Antes de baixar: SmartScreen</h3>
                          <p className="text-gray-600 mt-1">
                            O Windows pode alertar sobre o runinhas. O app é seguro, só não foi verificado ainda.
                          </p>
                        </div>
                        <button aria-label="Fechar" onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition">
                          <X className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>

                      <div className="mt-6 grid gap-3 text-sm">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 mt-0.5 text-gray-600" />
                          <p className="text-gray-700">O seu navegador pode impedir que o download, basta clicar em “Manter”.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 mt-0.5 text-gray-600" />
                          <p className="text-gray-700">Após baixar, na primeira execução o Windows Smart Screen irá bloquear a execução do programa, basta clicar em  <b>Mais informações</b> → <b>Executar assim mesmo</b>.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 mt-0.5 text-gray-600" />
                          <p className="text-gray-700">Todo o código da versão FREE do runinhas está disponível no github para você analisar.</p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button onClick={handleDownload} className={`bg-gradient-to-r ${s.accent} text-white shadow-xl hover:shadow-2xl`} size="lg">
                          <DownloadIcon className="w-5 h-5 mr-2" /> Baixar runinhas.exe
                        </Button>
                        <Button onClick={onClose} variant="ghost" size="lg">Fechar</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

