"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Palette } from "lucide-react"

const expertiseAreas = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Creating dynamic, responsive, and user-friendly interfaces using modern frontend technologies such as React, Next.js, and TypeScript. Focused on building seamless web applications that prioritize performance, accessibility, and exceptional user experience.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Specializing in robust backend systems using Node.js, Express, Laravel, and ASP.NET. Expertise in API development, database management (MongoDB, MySQL, PostgreSQL), and server-side logic to deliver scalable, secure applications that power dynamic user experiences.",
    skills: ["Node.js", "Express", "Laravel", "PHP", "ASP.NET", "Python", "C#", "Java", "MongoDB", "MySQL", "PostgreSQL", "RESTful APIs"],
  },
  {
    icon: Server,
    title: "DevOps & Tools",
    description:
      "Proficient with modern development tools and technologies to streamline workflows. From version control with Git to containerization with Docker, ensuring efficient development processes and proper project management throughout the entire development lifecycle.",
    skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "Visual Studio", "VS Code", "Make", "N8n", "Figma", "CI/CD"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing user-centric interfaces and comprehensive UI/UX prototypes for various applications. Award-winning designer with 1st place in UI/UX design competition, focused on creating responsive, accessible, and visually appealing user experiences.",
    skills: ["Figma", "Adobe XD", "Canva", "Photoshop", "Wireframing", "Prototyping", "User Research", "Usability Testing"],
  },
  {
    icon: Palette,
    title: "No/Low Code Development",
    description:
      "Building responsive, user-friendly websites using no-code platforms like Webflow, Shopify, and WordPress. Delivering tailored, visually appealing solutions for businesses from e-commerce sites to portfolios, handling everything from design to deployment with high-quality results.",
    skills: ["Webflow", "Shopify", "WordPress", "Bubble", "Lovable"],
  },
  {
    icon: Code,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications using React Native and Expo. Creating apps that deliver smooth performance, intuitive design, and seamless user experiences across both iOS and Android devices.",
    skills: ["React Native", "Expo", "Java", "Kotlin", "C"],
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
