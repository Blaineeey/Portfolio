"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"
import { ContactModal } from "./contact-modal"

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("expertise")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
              <div className="absolute inset-0 glassmorphism rounded-full floating-particle"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <Image src="/src/assets/images/Me.jpg" alt="Blaine B. Pañares" fill className="object-cover" priority />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="glassmorphism rounded-2xl p-8 hover-lift">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-balance">
                <span className="text-primary">Blaine B.</span> <span className="text-foreground">Pañares</span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground mb-6">Software Engineer</p>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
                Passionate about creating innovative solutions and building scalable applications. I specialize in
                full-stack development with a focus on modern technologies and best practices.
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 mb-8">
                <Button variant="outline" size="lg" className="glassmorphism hover-lift bg-transparent" asChild>
                  <a
                    href="https://github.com/Blaineeey"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="glassmorphism hover-lift bg-transparent" asChild>
                  <a
                    href="https://www.linkedin.com/in/blaineofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>

                <ContactModal>
                  <Button variant="default" size="lg" className="hover-lift">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Me
                  </Button>
                </ContactModal>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button variant="ghost" size="sm" onClick={scrollToNext} className="glassmorphism animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
