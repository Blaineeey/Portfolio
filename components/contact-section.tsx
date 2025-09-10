"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Award, GraduationCap } from "lucide-react"
import { ContactModal } from "./contact-modal"
import { useToast } from "@/hooks/use-toast"

const skills = {
  technical: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
  ],
  soft: [
    "Leadership",
    "Problem Solving",
    "Team Collaboration",
    "Project Management",
    "Communication",
    "Mentoring",
    "Agile/Scrum",
    "Code Review",
  ],
}

const achievements = [
  {
    icon: Award,
    title: "UC DAYS CSPS Competition - 1st Place in UI/UX Designing",
    year: "2023",
  },
  {
    icon: Award,
    title: "Cisco Networking Certificate of Completion",
    year: "2022",
  },
]

export function ContactSection() {
  const { toast } = useToast()

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Let's discuss opportunities and how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="glassmorphism hover-lift border-0 bg-card/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">blainepanaresofficial@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">+63 926 0047 542</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Missionaries Street, Barangay Suba(Pob.) Cebu City 6000 Philippines</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Available for opportunities</span>
                </div>

                <div className="pt-6">
                  <ContactModal>
                    <Button className="w-full hover-lift" size="lg">
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Me
                    </Button>
                  </ContactModal>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glassmorphism hover-lift border-0 bg-card/60 mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <achievement.icon className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.year}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical Skills */}
              <Card className="glassmorphism hover-lift border-0 bg-card/60">
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="glassmorphism">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="glassmorphism hover-lift border-0 bg-card/60">
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, index) => (
                      <Badge key={index} variant="outline" className="glassmorphism">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Me */}
            <Card className="glassmorphism hover-lift border-0 bg-card/60 mt-6">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  I am a Computer Science graduate from the University of Cebu with a strong 
                  passion for building full-stack web applications. With hands-on experience in 
                  both front-end and back-end development, I've worked with a wide range of 
                  technologies including Vue.js, React.js, Next.js, jQuery, Tailwind CSS, Bootstrap, 
                  Laravel (PHP), and ASP.NET. My projects range from hotel and event management systems 
                  to e-commerce platforms and UI/UX design prototypes. I'm skilled in developing responsive, 
                  user-centric interfaces and robust back-end logic, often handling full-cycle development independently. 
                  I aim to contribute to impactful digital solutions while continuously growing as a full-stack 
                  developer through real-world collaboration and innovation.
                </p>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Education</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">Bachelor of Science in Computer Science</p>
                      <p className="text-sm text-muted-foreground">
                        University of Cebu Main Campus  |                         <Badge variant="outline" className="glassmorphism">
                            2021 - 2025 
                          </Badge>
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Science, Technology, Engineering, and Mathematics</p>
                      <p className="text-sm text-muted-foreground">
                        University of Cebu Main Campus  |                         <Badge variant="outline" className="glassmorphism">
                            2019 - 2021 
                          </Badge>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
