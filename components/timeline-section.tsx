"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const timelineData = [
  {
    year: "09/2024 - 12/2024",
    title: "Software Engineer Intern",
    company: "Sprobe Inc.",
    location: "Cebu IT Tower 2",
    description:
      "Contributed to full-stack development projects by building RESTful APIs, implementing user authentication and integrating database queries, while following Agile methodologies and Git version control. Developed debugging and code review skills while learning to implement and test features, and ensuring responsive, accessible designs across devices.",
    technologies: ["Laravel", "Vite", "MySQL", "Docker", "Git", "Agile"],
  },
  {
    year: "2023",
    title: "UI/UX Competition",
    company: "1st Place",
    location: "UC Main Campus",
    description:
      "Competed as designing an intuitive, user-friendly interface that balanced aesthetics and functionality. Conducted user research, created wireframes, and prototypes that enhanced user experience while applying modern design principles to solve real-world problems.",
    technologies: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Careers, and Achievements <span className="text-bp-blue">History</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My career progression and key achievements in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-bp-blue/30 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-bp-blue rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-background"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 pl-12 md:pl-0" : "md:pl-8 pl-12 md:pr-0"}`}
                >
                  <Card className="glassmorphism hover-lift border-0 bg-card/60">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="glassmorphism border-bp-blue/20">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.year}
                        </Badge>
                        <Badge variant="secondary" className="glassmorphism bg-bp-blue/10 text-bp-blue">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-bp-blue font-medium mb-3">{item.company}</p>
                      <p className="text-muted-foreground mb-4 text-pretty">{item.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="glassmorphism text-xs bg-bp-blue/10 text-bp-blue border-bp-blue/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
