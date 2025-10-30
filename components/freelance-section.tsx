"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, X, Maximize2, Briefcase } from "lucide-react"
import Image from "next/image"

const freelanceProjects = [
  {
    id: 1,
    title: "Phlebotomy Technician Guide",
    client: "Healthcare Education",
    description:
      "Comprehensive technical documentation website for phlebotomy technicians with clean, user-friendly interface. Provides access to educational resources, certification guides, and professional development materials.",
    image: "freelance1.png",
    technologies: ["Webflow", "Technical Documentation", "Healthcare"],
    liveUrl: "https://phlebotomytechnicianguide.com",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Hemptex Earth",
    client: "Sustainable Business",
    description:
      "Modern, eco-friendly website showcasing sustainable hemp products built with Webflow. Features responsive design, smooth animations, and intuitive user experience for an engaging online presence.",
    image: "freelance8.png",
    technologies: ["Webflow", "Responsive Design", "E-commerce", "Sustainability"],
    liveUrl: "http://hemptex.earth/",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Optimads Website",
    client: "Advertising Agency",
    description:
      "Responsive Webflow website for Optimads, delivering a clean UI and smooth navigation experience. The design emphasizes clarity and accessibility while showcasing the brand's advertising solutions.",
    image: "project8.png",
    technologies: ["Webflow", "UI/UX", "Advertising"],
    liveUrl: "https://optimads.webflow.io/test/home",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Semo - Discord Moderation Bot",
    client: "Discord Community",
    description:
      "Community moderation bot featuring automated moderation, user management, custom commands, and logging systems. Built with scalable architecture to handle large server communities efficiently.",
    image: "freelance2.png",
    technologies: ["Discord.js", "Node.js", "MongoDB", "Cloud Services"],
    liveUrl: "https://github.com/blaineeey",
    category: "Discord Bot",
  },
  {
    id: 5,
    title: "Karma Bot",
    client: "Discord Community",
    description:
      "Community rewards and engagement system for Discord servers featuring karma tracking, leaderboards, reward redemption, and automated engagement mechanics to boost server activity.",
    image: "freelance3.png",
    technologies: ["Discord.js", "Node.js", "MongoDB", "APIs"],
    liveUrl: "https://github.com/blaineeey",
    category: "Discord Bot",
  },
  {
    id: 6,
    title: "Presaling Verification Bot",
    client: "Crypto Community",
    description:
      "Verification system for crypto presale communities managing whitelist access, wallet address verification, and automated role assignments. Integrated with blockchain APIs for real-time verification.",
    image: "freelance4.png",
    technologies: ["Discord.js", "Blockchain APIs", "Node.js", "Web3"],
    liveUrl: "https://github.com/blaineeey",
    category: "Discord Bot",
  },
  {
    id: 7,
    title: "Offerbot - Marketplace Automation",
    client: "E-commerce Platform",
    description:
      "Marketplace automation bot managing offers, price negotiations, and transaction workflows. Streamlines buying and selling with automated notifications and comprehensive tracking.",
    image: "freelance5.png",
    technologies: ["Discord.js", "APIs", "Payment Integration", "Automation"],
    liveUrl: "https://github.com/blaineeey",
    category: "Discord Bot",
  },
  {
    id: 8,
    title: "Coach Board - Team Management",
    client: "Gaming Community",
    description:
      "Team management system for gaming communities featuring roster management, scheduling, performance tracking, and communication tools for organized team coordination.",
    image: "freelance6.png",
    technologies: ["Discord.js", "Node.js", "MongoDB", "Team Management"],
    liveUrl: "https://github.com/blaineeey",
    category: "Discord Bot",
  },
  {
    id: 9,
    title: "Crext Compiler - Code Execution",
    client: "Developer Community",
    description:
      "Code execution bot allowing developers to run code snippets directly in Discord. Supports multiple programming languages with secure sandboxed execution environment.",
    image: "freelance7.png",
    technologies: ["Discord.js", "Code Execution", "Sandboxing", "Node.js"],
    liveUrl: "https://github.com/blaineeey",
    category: "Discord Bot",
  },
]

export function FreelanceSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof freelanceProjects)[0] | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [filterCategory, setFilterCategory] = useState<string>("All")

  const categories = ["All", "Web Development", "Discord Bot"]
  const filteredProjects =
    filterCategory === "All"
      ? freelanceProjects
      : freelanceProjects.filter((project) => project.category === filterCategory)

  const openProject = (project: (typeof freelanceProjects)[0]) => {
    setSelectedProject(project)
    setIsExpanded(true)
  }

  const closeProject = () => {
    setIsExpanded(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="freelance" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-bp-blue/10 rounded-lg flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-bp-blue" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Freelance <span className="text-bp-blue">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Client projects and custom solutions delivered for businesses and communities worldwide
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filterCategory === category ? "default" : "outline"}
              onClick={() => setFilterCategory(category)}
              className={`glassmorphism ${
                filterCategory === category
                  ? "bg-bp-blue text-white hover:bg-bp-blue/90"
                  : "bg-transparent hover:bg-bp-blue/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="glassmorphism hover-lift border-0 bg-card/60 cursor-pointer group transition-all duration-300 hover:scale-105"
              onClick={() => openProject(project)}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-muted-foreground/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-bp-blue/90 text-white text-xs">{project.category}</Badge>
                    <Maximize2 className="w-4 h-4 text-white ml-auto" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm line-clamp-1">{project.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Client: {project.client}</p>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-0 bg-bp-blue/10 text-bp-blue">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {isExpanded && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <Card
              className={`glassmorphism border-0 bg-card/95 max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${isExpanded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white"
                >
                  <X className="w-4 h-4" />
                </Button>

                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-lg bg-muted flex items-center justify-center">
                  <Briefcase className="w-24 h-24 text-muted-foreground/20" />
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-bp-blue/10 text-bp-blue border-bp-blue/20">
                      {selectedProject.category}
                    </Badge>
                    <Badge variant="outline" className="glassmorphism">
                      Client: {selectedProject.client}
                    </Badge>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="glassmorphism bg-bp-blue/10 text-bp-blue">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="hover-lift flex-1 bg-bp-blue hover:bg-bp-blue/90" asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
