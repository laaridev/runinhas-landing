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
          <div className="fixed inset-0 grid place-items-center pointer-events-none p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Aviso do Windows SmartScreen"
              className="w-full max-w-2xl pointer-events-auto"
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className={`rounded-2xl p-[1px] bg-gradient-to-br ${s.frame} shadow-2xl`}>
                <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900">✅ O Runinhas é 100% Seguro</h3>
                          <p className="text-gray-600 mt-1.5 text-sm leading-relaxed">
                            O Windows pode alertar porque o app ainda não tem certificado digital (custa caro!). 
                            Mas fique tranquilo: <strong>o código é open source</strong> e você pode verificar tudo no GitHub.
                          </p>
                        </div>
                        <button aria-label="Fechar" onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition">
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg">
                          <p className="text-xs font-semibold text-blue-900 mb-1">📦 Passo 1: Durante o download</p>
                          <p className="text-xs text-blue-800">
                            Seu navegador pode bloquear o download. Clique em <strong>&quot;Manter&quot;</strong> ou <strong>&quot;Manter mesmo assim&quot;</strong> para continuar.
                          </p>
                        </div>

                        <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded-r-lg">
                          <p className="text-xs font-semibold text-purple-900 mb-1">🛡️ Passo 2: ao executar pela primeira vez</p>
                          <p className="text-xs text-purple-800">
                            O Windows SmartScreen vai bloquear. Clique em <strong>&quot;Mais informações&quot;</strong> e depois em <strong>&quot;Executar assim mesmo&quot;</strong>. 
                            Isso acontece apenas na primeira vez!
                          </p>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                          <p className="text-xs font-semibold text-green-900 mb-1">🔓 Por que isso acontece?</p>
                          <p className="text-xs text-green-800">
                            Certificados digitais custam centenas de dólares por ano. Como o Runinhas é 100% gratuito, optamos por manter o projeto open source 
                            para você ter total transparência do código. <strong>Nenhum dado seu é coletado.</strong>
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                        <Button onClick={handleDownload} className={`bg-gradient-to-r ${s.accent} text-white shadow-xl hover:shadow-2xl`} size="default">
                          <DownloadIcon className="w-4 h-4 mr-2" /> Download
                        </Button>
                        <Button onClick={onClose} variant="ghost" size="default">Fechar</Button>
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

