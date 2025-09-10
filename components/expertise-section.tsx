"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Palette } from "lucide-react"

const expertiseAreas = [
  {
    icon: Code,
    title: "Full Stack Web Development",
    description:
      "I love full-stack web applications from scratch using modern frameworks and libraries. I have experience in both frontend and backend development, ensuring full-cycle development and seamless integration throughout the development lifecycle.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    icon: Server,
    title: "DevOps & Tools",
    description:
      "I work with various development tools and technologies to streamline the development process. I have experience with version control, containerization, and deployment strategies. I focus on creating efficient development workflows and proper project management throughout the development lifecycle.",
    skills: ["Git", "GitHub", "Docker", "Linux", "AWS", "Heroku", "Postman", "VS Code"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "I enjoy user-centric interfaces and create comprehensive UI/UX prototypes that balance aesthetics and functionality. I have experience in designing user interfaces, creating wireframes, and software and working to place in UI/UX designing competitions. I focus on creating responsive, accessible, and visually appealing user experiences.",
    skills: ["Figma", "Adobe XD", "Canva", "Photoshop", "Wireframing", "Prototyping"],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Areas of <span className="text-bp-blue">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive skills across the full development stack, from design to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="glassmorphism hover-lift border-0 bg-card/60">
              <CardHeader>
                <div className="w-12 h-12 bg-bp-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-bp-blue" />
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="glassmorphism bg-bp-blue/10 text-bp-blue border-bp-blue/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
