"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Shield, Server, Terminal, Lock, Sparkles, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      title: "RESTLab - API Testing Platform",
      description:
        "Built a platform for API testing, mocking, and AI-powered endpoint generation. Implemented RBAC with Keycloak, PostgreSQL data modeling, and Spring Boot backend services to support user authentication, workspaces, and load testing.",
      image: "/RestLabLogo.png",
      technologies: ["Spring Boot", "Keycloak", "OAuth2", "MongoDB", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "12AM - E-Commerce Website",
      description:
        "E-commerce platform for a clothing shop. This innovative platform features secure payment solutions through ABA Payway, along with basic authentication to enhance user security. The intuitive admin dashboard allows effortless management of products and orders. ",
      image: "12AM.jpg",
      technologies: ["Next.js", "Node.js", "Tailwind", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Server className="h-5 w-5" />,
    },
    {
      title: "iShop - E-Commerce Website",
      description:
        "E-commerce platform for electronic products with secure payments (Bakong KHQR), Google OAuth authentication, and an admin dashboard for product and order management. Built with Spring Boot, React.js, PostgreSQL, and Docker to ensure scalability, security, and a seamless shopping experience.",
      image: "ishopLogo.jpg",
      technologies: ["Spring Boot", "React.js", "PostgreSQL", "OAuth", "Bakong KHQR"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      title: "iROS - Restaurant Ordering System",
      description:
        "Developed a Java-based restaurant management system with menu browsing, order placement, QR code payments (Bakong KHQR), and order tracking. Implemented MVC architecture, PostgreSQL database, and role-based access control (Customer, Staff, Admin) to streamline restaurant operations.",
      image: "/encrypted-messaging-interface-with-cryptographic-k.png",
      technologies: ["MVC architecture", "PostgreSQL", "RBAC", "Bakong KHQR"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Lock className="h-5 w-5" />,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  if (prev.includes(index)) return prev
                  return [...prev, index]
                })
              }, index * 150) // Staggered animation
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Thai Pattern Background */}
      <div className="absolute inset-0 thai-pattern-bg" />
      
      {/* Dot pattern background */}
      <DotPattern
        className={cn(
          "absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        )}
      />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced header with animation */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary animate-spin-slow" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="text-primary">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work combining modern design with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-7xl">
          {projects.map((project, index) => (
            <Card
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className={`group relative border-primary/30 bg-background/10 backdrop-blur-xl overflow-hidden
                transition-all duration-700 ease-out shadow-lg shadow-primary/5
                hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
                ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }
                hover:-translate-y-2 hover:scale-[1.02]
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Enhanced image section with parallax effect */}
                <div className="relative overflow-hidden h-72">
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10" />
                  
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out
                      group-hover:scale-110 group-hover:rotate-1 brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/80 transition-all duration-500 z-10" />
                  
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-primary animate-scan" />
                  </div>

                  {/* Floating icon badge */}
                  <div className="absolute top-4 right-4 z-30">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 blur-xl animate-pulse" />
                      <div className="relative bg-background/80 backdrop-blur-md rounded-full p-3 border border-primary/40
                        transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:border-primary">
                        {project.icon}
                      </div>
                    </div>
                  </div>

                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-primary/40">
                      <Star className="h-3 w-3 text-primary fill-primary" />
                      <span className="text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>

                {/* Content section with enhanced spacing */}
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Tech stack with staggered hover animations */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/30
                          transition-all duration-300 hover:scale-105 hover:bg-secondary/20 hover:border-secondary/60
                          hover:shadow-lg hover:shadow-secondary/20 cursor-pointer"
                        style={{
                          transitionDelay: `${techIndex * 50}ms`,
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons with enhanced effects */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="default"
                      className="flex-1 bg-primary text-primary-foreground font-semibold
                        transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                        <span>Live Demo</span>
                      </a>
                    </Button>

                    <Button
                      size="default"
                      variant="outline"
                      className="flex-1 border-primary/40 text-primary bg-transparent font-semibold
                        transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:scale-105
                        hover:shadow-xl hover:shadow-primary/20"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-[360deg]" />
                        <span>Source</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
