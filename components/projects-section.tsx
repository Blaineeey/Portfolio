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
    title: "KasadyaCraft Website",
    description:
      "Built a responsive Next.js website for the KasadyaCraft Minecraft server, featuring an integrated e-commerce system that allows players to purchase in-game ranks and items with real money. The platform connects seamlessly with the game server, supports secure payment processing, and delivers a smooth, user-friendly experience for the community across desktop and mobile devices.",
    image: "project1.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "E-commerce", "Gaming"],
    liveUrl: "http://kasadyacraft.online/",
    githubUrl: "https://github.com/Blaineeey/KasadyaCraft",
    featured: true,
  },
  {
    id: 2,
    title: "Anime Finder",
    description:
      "Developed a responsive Next.js application for real-time anime search using the Jikan API. Features include typeahead search, detailed anime pages, Supabase authentication, and a clean UI built with ShadCN and Tailwind CSS. Optimized for fast performance and smooth user experience across all devices.",
    image: "project4.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Jikan API"],
    liveUrl: "https://anime-finder-psi.vercel.app/",
    githubUrl: "https://github.com/Blaineeey/AnimeFinder",
    featured: false,
  },
  {
    id: 3,
    title: "HotelNamo",
    description:
      "Full-featured hotel management system built with ASP.NET enabling guests to book rooms and leave reviews, while admins manage bookings, feedback, and staff accounts. Features role-based access, responsive UI, and secure architecture to streamline hotel operations for both guests and administrators.",
    image: "project6.png",
    technologies: ["ASP.NET MVC", "C#", "MSSQL", "Full Stack"],
    liveUrl: "https://github.com/Blaineeey/HotelNamo",
    githubUrl: "https://github.com/Blaineeey/HotelNamo",
    featured: true,
  },
  {
    id: 4,
    title: "TeenEmoGuard",
    description:
      "Intelligent emotion-monitoring system detecting early signs of emotional distress in teenagers through social media posts. Using machine learning, sentiment analysis, and NLP, the system identifies subtle emotional cues to enable timely interventions and promote a healthier, safer online environment for youth.",
    image: "project5.png",
    technologies: ["Machine Learning", "Python", "NLP", "Sentiment Analysis", "AI"],
    liveUrl: "https://github.com/yujiinN/TeenEmoGuard",
    githubUrl: "https://github.com/yujiinN/TeenEmoGuard",
    featured: true,
  },
  {
    id: 5,
    title: "Wedding Planning Suite",
    description:
      "Comprehensive web platform helping couples, planners, and vendors streamline wedding planning. Features include guest list management, budgeting, vendor coordination, real-time messaging, and personalized wedding websites with RSVP integration. Built with modern tech stack for seamless event organization.",
    image: "project7.png",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "Stripe", "Full Stack"],
    liveUrl: "https://github.com/Blaineeey/Planning-Suite",
    githubUrl: "https://github.com/Blaineeey/Planning-Suite",
    featured: true,
  },
  {
    id: 6,
    title: "Discord Bot Collection",
    description:
      "Suite of Discord bots for automation and community engagement including Karma Bot (rewards system), Semo (moderation), Presaling Verification (crypto), Offerbot (marketplace), Coach Board (team management), and Crext Compiler (code execution). Utilizing Discord.js, APIs, and cloud services for seamless automation.",
    image: "project2.png",
    technologies: ["Discord.js", "Node.js", "JavaScript", "APIs", "MongoDB", "Automation"],
    liveUrl: "https://github.com/blaineeey",
    githubUrl: "https://github.com/blaineeey",
    featured: false,
  }
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
