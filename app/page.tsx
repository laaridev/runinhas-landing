import dynamic from 'next/dynamic'
import { Hero } from "@/components/sections/hero"

// Lazy load sections below the fold for better initial page load
const ProblemSolution = dynamic(() => import("@/components/sections/problem-solution").then(mod => ({ default: mod.ProblemSolution })), { ssr: true })
const Security = dynamic(() => import("@/components/sections/security").then(mod => ({ default: mod.Security })), { ssr: true })
const Features = dynamic(() => import("@/components/sections/features").then(mod => ({ default: mod.Features })), { ssr: true })
const HowItWorks = dynamic(() => import("@/components/sections/how-it-works").then(mod => ({ default: mod.HowItWorks })), { ssr: true })
const HowToUse = dynamic(() => import("@/components/sections/how-to-use").then(mod => ({ default: mod.HowToUse })), { ssr: true })
const Pricing = dynamic(() => import("@/components/sections/pricing").then(mod => ({ default: mod.Pricing })), { ssr: true })
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(mod => ({ default: mod.Testimonials })), { ssr: true })
const FinalCTA = dynamic(() => import("@/components/sections/final-cta").then(mod => ({ default: mod.FinalCTA })), { ssr: true })
const Footer = dynamic(() => import("@/components/sections/footer").then(mod => ({ default: mod.Footer })), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Security />
      <Features />
      <HowItWorks />
      <HowToUse />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}
