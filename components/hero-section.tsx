"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { HyperText } from "@/components/ui/hyper-text"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Particles } from "@/components/ui/particles"
import { Facebook, Github, Linkedin, Mail, Terminal, Shield } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-20"></div>

        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`binary-${i}`}
            className="absolute text-primary/30 text-xs font-mono binary-rain select-none"
            style={{
              left: `${5 + i * 6}%`,
              animationDuration: `${10 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
        ))}

        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute particle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Shield className="w-3 h-3 text-primary" />
            ) : i % 3 === 1 ? (
              <Terminal className="w-3 h-3 text-secondary" />
            ) : (
              <div className="w-2 h-2 bg-primary rounded-full" />
            )}
          </div>
        ))}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="orbit-element w-4 h-4 bg-secondary rounded-full opacity-40"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="orbit-element w-3 h-3 bg-primary rounded-full opacity-30"
            style={{ animationDuration: "25s", animationDirection: "reverse" }}
          />
        </div>

        <div className="absolute top-1/4 left-1/4">
          <div
            className="pulse-ring w-32 h-32 border border-primary/20 rounded-full"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="pulse-ring w-32 h-32 border border-secondary/20 rounded-full absolute top-0 left-0"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute bottom-1/3 right-1/4">
          <div
            className="pulse-ring w-24 h-24 border border-accent/20 rounded-full"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent matrix-line"
            style={{
              left: `${10 + i * 12}%`,
              height: "200px",
              animationDuration: `${8 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
        
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid"></div>
        </div>

        <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="block text-primary cursor-default">
              <HyperText className="neon-text hover-text-flicker">Hi! My name is</HyperText>
            </span>
            <span className="block text-primary cursor-default">
              <HyperText className="neon-text hover-text-flicker">Dina Pisethi</HyperText>
            </span>
          </h1>

          <div className="max-w-md mx-auto bg-background/10 backdrop-blur-xl border border-primary/30 rounded-lg p-4 font-mono text-left mb-8 hover-glow hover-card-lift hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-lg shadow-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover-bounce"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
            <TypingAnimation
              words={["root@you_can_call_me_jan:~$ whoami"]}
              cursorStyle="underscore"
              className="text-primary text-lg"
              typeSpeed={100}
              delay={1000}
              loop
            />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-foreground transition-colors duration-500 cursor-default">
            Passionate about cybersecurity and backend development, I specialize in fortifying systems and crafting robust solutions to safeguard digital landscapes.
          </p>
          {/* Scroll Down Arrow */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InteractiveHoverButton
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Terminal className="mr-2 h-5 w-5" />
              View My Achievement
            </InteractiveHoverButton>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/dina.pisethi.dps" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground bg-transparent hover-glow hover-bounce transition-all duration-300"
                >
                  <Facebook className="h-5 w-5 transition-transform duration-300" />
                </Button>
              </a>
              <a href="https://github.com/j4nthirty1ne" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground bg-transparent hover-glow hover-bounce transition-all duration-300"
                >
                  <Github className="h-5 w-5 transition-transform duration-300" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/dina-pisethi-623883358/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground bg-transparent hover-glow hover-shake transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 transition-transform duration-300" />
                </Button>
              </a>
              <a href="mailto:dinapisethist12@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground bg-transparent hover-glow hover-scale-pulse transition-all duration-300"
                >
                  <Mail className="h-5 w-5 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
