"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X, Download as DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

type Props = {
  open: boolean
  onClose: () => void
  downloadUrl: string
}

export function DownloadModal({ open, onClose, downloadUrl }: Props) {
  const { theme } = useTheme()
  const { t } = useLanguage()
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

  // Define styles for Blue, Pink, AND Dark modes
  const themeStyles = {
    blue: {
      frame: "from-blue-600 to-indigo-600",
      bg: "bg-white/95",
      title: "text-gray-900",
      text: "text-gray-600",
      closeBtn: "text-gray-500 hover:bg-gray-100",
      accent: "from-blue-600 to-indigo-600",
      step1: { bg: "bg-blue-50", border: "border-blue-500", title: "text-blue-900", text: "text-blue-800" },
      step2: { bg: "bg-purple-50", border: "border-purple-500", title: "text-purple-900", text: "text-purple-800" },
      step3: { bg: "bg-green-50", border: "border-green-500", title: "text-green-900", text: "text-green-800" },
      secondaryBtn: "text-gray-700 hover:bg-gray-100"
    },
    pink: {
      frame: "from-pink-600 to-rose-600",
      bg: "bg-white/95",
      title: "text-gray-900",
      text: "text-gray-600",
      closeBtn: "text-gray-500 hover:bg-gray-100",
      accent: "from-pink-600 to-rose-600",
      step1: { bg: "bg-pink-50", border: "border-pink-500", title: "text-pink-900", text: "text-pink-800" },
      step2: { bg: "bg-purple-50", border: "border-purple-500", title: "text-purple-900", text: "text-purple-800" },
      step3: { bg: "bg-rose-50", border: "border-rose-500", title: "text-rose-900", text: "text-rose-800" },
      secondaryBtn: "text-gray-700 hover:bg-gray-100"
    },
    dark: {
      frame: "from-slate-700 to-slate-800",
      bg: "bg-slate-900/95", // Dark background
      title: "text-white",
      text: "text-slate-300",
      closeBtn: "text-slate-400 hover:bg-slate-800",
      accent: "from-blue-600 to-indigo-600",
      // Darker step boxes for better contrast
      step1: { bg: "bg-blue-900/20", border: "border-blue-500", title: "text-blue-200", text: "text-blue-100" },
      step2: { bg: "bg-purple-900/20", border: "border-purple-500", title: "text-purple-200", text: "text-purple-100" },
      step3: { bg: "bg-green-900/20", border: "border-green-500", title: "text-green-200", text: "text-green-100" },
      secondaryBtn: "text-slate-300 hover:bg-slate-800 hover:text-white"
    }
  }

  const s = themeStyles[theme] || themeStyles.blue

  const handleDownload = () => {
    window.open(downloadUrl, "_blank", "noopener,noreferrer")
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          {/* Centered container */}
          <div className="fixed inset-0 grid place-items-center pointer-events-none p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              className="w-full max-w-2xl pointer-events-auto"
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className={`rounded-2xl p-[1px] bg-gradient-to-br ${s.frame} shadow-2xl`}>
                <div className={`rounded-2xl backdrop-blur-xl p-5 md:p-6 ${s.bg}`}>
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className={`text-lg md:text-xl font-bold ${s.title}`}>
                            {t.downloadModal.title}
                          </h3>
                          <p className={`mt-1.5 text-sm leading-relaxed ${s.text}`}>
                            {t.downloadModal.description}
                          </p>
                        </div>
                        <button aria-label={t.downloadModal.buttons.close} onClick={onClose} className={`p-1.5 rounded-lg transition ${s.closeBtn}`}>
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        {/* Step 1 */}
                        <div className={`${s.step1.bg} border-l-4 ${s.step1.border} p-3 rounded-r-lg`}>
                          <p className={`text-xs font-semibold mb-1 ${s.step1.title}`}>{t.downloadModal.steps.step1.title}</p>
                          <p className={`text-xs ${s.step1.text}`}>
                            {t.downloadModal.steps.step1.text}
                          </p>
                        </div>

                        {/* Step 2 */}
                        <div className={`${s.step2.bg} border-l-4 ${s.step2.border} p-3 rounded-r-lg`}>
                          <p className={`text-xs font-semibold mb-1 ${s.step2.title}`}>{t.downloadModal.steps.step2.title}</p>
                          <p className={`text-xs ${s.step2.text}`}>
                            {t.downloadModal.steps.step2.text}
                          </p>
                        </div>

                        {/* Step 3 */}
                        <div className={`${s.step3.bg} border-l-4 ${s.step3.border} p-3 rounded-r-lg`}>
                          <p className={`text-xs font-semibold mb-1 ${s.step3.title}`}>{t.downloadModal.steps.step3.title}</p>
                          <p className={`text-xs ${s.step3.text}`}>
                            {t.downloadModal.steps.step3.text}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
                        <Button onClick={handleDownload} className={`bg-gradient-to-r ${s.accent} text-white shadow-xl hover:shadow-2xl`} size="default">
                          <DownloadIcon className="w-4 h-4 mr-2" /> {t.downloadModal.buttons.download}
                        </Button>
                        <Button onClick={onClose} variant="ghost" size="default" className={s.secondaryBtn}>
                          {t.downloadModal.buttons.close}
                        </Button>
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