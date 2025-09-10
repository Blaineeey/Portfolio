"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, Maximize2 } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/src/assets/images/project1.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and advanced filtering.",
    image: "/src/assets/images/project2.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.",
    image: "/src/assets/images/project3.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuetify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
    image: "/src/assets/images/project4.png",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Educational platform with course management, progress tracking, and interactive learning modules.",
    image: "/src/assets/images/project5.png",
    technologies: ["Next.js", "Prisma", "NextAuth", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Mobile-first fitness application with workout tracking, progress analytics, and social features.",
    image: "/src/assets/images/project6.png",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Native Base"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsExpanded(true)
  }

  const closeProject = () => {
    setIsExpanded(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="glassmorphism hover-lift border-0 bg-card/60 cursor-pointer group transition-all duration-300 hover:scale-105"
              onClick={() => openProject(project)}
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    {project.featured && (
                      <Badge className="bg-primary/90 text-primary-foreground text-xs">Featured</Badge>
                    )}
                    <Maximize2 className="w-4 h-4 text-white ml-auto" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-sm line-clamp-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-0">
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

                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {selectedProject.featured && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                    )}
                    <Badge variant="outline" className="glassmorphism">
                      Project {selectedProject.id}
                    </Badge>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="glassmorphism">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="hover-lift flex-1" asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="glassmorphism hover-lift bg-transparent flex-1" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
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
