"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Meteors } from "@/components/ui/meteors"
import { RetroGrid } from "@/components/ui/retro-grid"
import { Shield, Server, Terminal, Lock } from "lucide-react"
// ...existing code...

export function AboutSection() {
  const skills = [
    "C/C++",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Python",
    "Data Modeling",
    "Web Design",
    "Git/GitHub",
  ]

  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute inset-0 z-0">
        <RetroGrid />
      </div>
      <div className="absolute inset-0 z-0">
        <Meteors number={30} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-primary hover-text-flicker cursor-default">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-500 cursor-default">
                I am a junior in Information Technology Engineering at RUPP, and I have had a passion for technology since I was young. My aspiration is to become a software engineer, with a current focus on backend development. After gaining experience in this area, I plan to learn cybersecurity skills to further advance my career.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-500 cursor-default">
                After gaining experience in this area, I plan to learn cybersecurity skills to further advance my career. I am eager to apply my knowledge and skills in real-world projects, and I am always looking for opportunities to grow and learn in the field of software engineering and cybersecurity.
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale-pulse hover-glow cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="border-primary/30 bg-background/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-300 hover-card-lift hover-glow shadow-lg shadow-primary/5">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden flex items-center justify-center mb-4 float-animation border-2 border-primary/30 hover-scale-pulse hover-rotate cursor-pointer">
                      <img src="/Dina_Pisethi.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary hover-text-flicker cursor-default">Dina Pisethi</h3>
                    <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                      Student
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center hover:bg-primary/5 p-2 rounded transition-colors duration-300 cursor-pointer hover-slide">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Terminal className="h-4 w-4 hover-rotate" />
                        Experience 
                      </span>
                      <span className="text-primary font-semibold hover-bounce">7+ Years</span>
                    </div>
                    <div className="flex justify-between items-center hover:bg-primary/5 p-2 rounded transition-colors duration-300 cursor-pointer hover-slide">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Server className="h-4 w-4 hover-shake" />
                        Systems Secured
                      </span>
                      <span className="text-primary font-semibold hover-scale-pulse">100+ Deployed</span>
                    </div>
                    <div className="flex justify-between items-center hover:bg-primary/5 p-2 rounded transition-colors duration-300 cursor-pointer hover-slide">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Lock className="h-4 w-4 hover-bounce" />
                        Vulnerabilities Found
                      </span>
                      <span className="text-primary font-semibold hover-text-flicker">500+ Patched</span>
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
