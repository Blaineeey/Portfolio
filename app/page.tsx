"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { TimelineSection } from "@/components/timeline-section"
import { ProjectsSection } from "@/components/projects-section"
import { FreelanceSection } from "@/components/freelance-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ContactModal } from "@/components/contact-modal"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <ExpertiseSection />
        <TimelineSection />
        <ProjectsSection />
        <FreelanceSection />
        <ContactSection />
      </main>
      <Footer />
      <ContactModal />
    </div>
  )
}
