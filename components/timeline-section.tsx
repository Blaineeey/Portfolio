"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const timelineData = [
  {
    year: "2021 - 2025",
    title: "Bachelor of Science in Computer Science",
    company: "University of Cebu Main Campus",
    location: "Cebu City",
    description:
      "Pursuing a comprehensive education in computer science, covering software development, algorithms, data structures, web and mobile development, and system design. Gained hands-on experience through academic projects and competitions.",
    technologies: ["Computer Science", "Software Engineering", "Web Development", "Mobile Development", "Algorithms"],
  },
  {
    year: "09/2024 - 12/2024",
    title: "Fullstack Developer Intern",
    company: "Sprobe Inc.",
    location: "14F Cebu IT Tower 2, Cebu City 6000",
    description:
      "Developed and maintained web applications using Laravel, Vite, and MySQL, ensuring clean and efficient code. Assisted in building and testing containerized environments with Docker, supporting scalable and reliable application deployment.",
    technologies: ["Laravel", "Vite", "MySQL", "Docker", "Git", "Agile"],
  },
  {
    year: "2023",
    title: "UI/UX Design Competition",
    company: "1st Place Winner",
    location: "UC Main Campus",
    description:
      "Won first place by designing an intuitive, user-friendly interface that balanced aesthetics and functionality. Conducted user research, created wireframes and prototypes that enhanced user experience while applying modern design principles to solve real-world problems.",
    technologies: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    year: "2022 - 2025",
    title: "Web Development & Discord Bot Development",
    company: "Freelance",
    location: "International Clients",
    description:
      "Designed, developed, and maintained responsive websites using Webflow, WordPress, and custom code (Node.js, Next.js, Express). Built and managed Discord bots for automation, community engagement, and workflow integration using APIs and cloud services. Collaborated with international clients to deliver tailored web and automation solutions aligned with business goals. Implemented CMS-based systems for easy client content updates and scalability. Optimized website performance, security, and SEO for better user experience and visibility. Provided ongoing technical support, updates, and maintenance for 15+ projects.",
    technologies: ["Webflow", "WordPress", "Next.js", "Express", "Node.js", "Discord.js", "APIs", "Cloud Services"],
  },
  {
    year: "2019 - 2021",
    title: "Science, Technology, Engineering, and Mathematics (STEM)",
    company: "University of Cebu Main Campus",
    location: "Cebu City",
    description:
      "Completed senior high school education with a focus on Science, Technology, Engineering, and Mathematics, building a strong foundation in analytical thinking and problem-solving skills.",
    technologies: ["STEM", "Mathematics", "Science", "Research"],
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Career & Achievements <span className="text-bp-blue">History</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey and key milestones in software development and education
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
