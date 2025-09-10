"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <Image src="/bp-logo.png" alt="BP Logo" width={32} height={32} className="rounded-lg" />
            <p className="text-muted-foreground">
              Blaine B. Pañares
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="glassmorphism hover-lift hover:bg-bp-blue/20" asChild>
              <a
                href="https://github.com/Blaineeey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>

            <Button variant="ghost" size="sm" className="glassmorphism hover-lift hover:bg-bp-blue/20" asChild>
              <a
                href="https://www.linkedin.com/in/blaineofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>

            <Button variant="ghost" size="sm" className="glassmorphism hover-lift hover:bg-bp-blue/20">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
