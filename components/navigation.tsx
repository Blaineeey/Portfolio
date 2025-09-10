"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Download } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism bg-card/80" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/bp-logo.png" alt="BP Logo" width={40} height={40} className="rounded-lg" />
            <div className="text-xl font-bold text-primary"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-bp-blue transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-foreground hover:text-bp-blue transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className="text-foreground hover:text-bp-blue transition-colors"
            >
              History
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-bp-blue transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-bp-blue transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={downloadResume}
              variant="outline"
              size="sm"
              className="glassmorphism hover-lift bg-transparent border-bp-blue text-bp-blue hover:bg-bp-blue hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="glassmorphism hover:bg-bp-blue/20"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={downloadResume} variant="outline" size="sm" className="glassmorphism bg-transparent">
              <Download className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="glassmorphism hover:bg-bp-blue/20"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glassmorphism"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glassmorphism rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-bp-blue transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("expertise")}
                className="text-left text-foreground hover:text-bp-blue transition-colors"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("timeline")}
                className="text-left text-foreground hover:text-bp-blue transition-colors"
              >
                History
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-bp-blue transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-bp-blue transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
