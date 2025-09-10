"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Palette } from "lucide-react"

const expertiseAreas = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "I create dynamic, responsive, and user-friendly interfaces using modern frontend technologies such as React, Next.js, and JavaScript. With a focus on performance, accessibility, and user experience, I build seamless web applications that are both visually appealing and functional.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "I specialize in building robust backend systems using technologies like Node.js, Express, Laravel, and ASP.NET. With strong knowledge of API development, database management (MongoDB, MySQL), and server-side logic, I deliver scalable and secure web applications that power dynamic user experiences.",
    skills: ["Node.js", "Express", "Laravel", "PHP", "MongoDB", "MySQL", "PostgreSQL", "RESTful APIs"],
  },
  {
    icon: Server,
    title: "DevOps & Tools",
    description:
      "I work with various development tools and technologies to streamline the development process. From version control with Git to containerization with Docker, I ensure efficient development workflows and proper project management throughout the development lifecycle.",
    skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "VS Code", "Cisco Packet Tracer", "PhpMyAdmin", "CI/CD"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "I design user-centric interfaces and create comprehensive UI/UX prototypes for various applications. With experience in designing project management software and winning 1st place in UI/UX designing competition, I focus on creating responsive, accessible, and visually appealing user experiences.",
    skills: ["Figma", "Adobe XD", "Canva", "Photoshop", "Wireframing", "Prototyping", "User Research", "Usability Testing"],
  },
  {
    icon: Palette,
    title: "No/Low Code Development",
    description:
      "I build responsive, user-friendly websites using no-code platforms like Webflow, Shopify, and WordPress. Specializing in delivering tailored, visually appealing websites for businesses, I focus on creating seamless user experiences without writing code. From e-commerce sites to personal portfolios, I handle everything from design to deployment, ensuring high-quality, functional results.",
    skills: ["Webflow", "Shopify", "WordPress", "Bubble", "Lovable"],
  }
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
