"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DotPattern } from "@/components/ui/dot-pattern"
import { IconCloud } from "@/components/ui/icon-cloud"
import { GraduationCap, Award, BookOpen, Shield, Terminal, Zap } from "lucide-react"

export function EducationSection() {
  const education = [
    
    // Current University
    {
      degree: "BA in Information Technology Engineering",
      institution: "Royal University of Phnom Penh(RUPP)",
      year: "2024-Present",
      focus: "Software Engineering",
      icon: Terminal,
      subjects: ["Algorithms", "Database Systems", "Operating Systems", "Cybersecurity", "Programming Languages", "Data Structures", "Networking"]
    },

    // Full Stack Development
    {
      degree: "Full Stack Development",
      institution: "Institute of Science and Technology Advanced Development (ISTAD)",
      year: "5 months",
      focus: "Full Stack Development",
      icon: Terminal,
      subjects: ["Java Programming", "Spring Framework", "Data Modeling", "Next.js", "TypeScript", "APIs", "Capstone Project"]
    },

    // Cyber Security
    {
      degree: "Cyber Security",
      institution: "Institute of Science and Technology Advanced Development (ISTAD)",
      year: "5 months",
      focus: "Webs Security",
      icon: Terminal,
      subjects: ["---", "---", "Data ---", "Next.---", "---", "---", "--- ---"]
    },

    //  Web Development Foundations
    {
      degree: "Web Development Foundations",
      institution: "Institute of Science and Technology Advanced Development (ISTAD)",
      year: "4 months",
      focus: "Web Development",
      icon: Terminal,
      subjects: ["Java Programming", "UX/UI Design", "React.Js", "Database Essentials", "Version Control System", "Capstone Project"]
    },

    //  General English Program
    {
      degree: "General English Program",
      institution: "Australian Centre for Education (ACE)",
      year: "2024-Present",
      focus: "English Proficiency",
      icon: Shield,
      subjects: ["Listening", "Speaking", "Reading", "Writing", "Grammar", "Vocabulary"]
    },

    // Pre-University C++
    {
      degree: "Pre-University",
      institution: "Institute of Science and Technology Advanced Development (ISTAD)",
      year: "2 months",
      focus: "C++ Programming",
      icon: Terminal,
      subjects: ["Basic Syntax", "Conditional Statements", "Control Flow", "OOP", "Problem Solving", "Algorithms", "Capstone Project"]
    },
    // High School 
    {
      degree: "High School",
      institution: "Hun Sen School of Thnal Tutueng",
      year: "2017-2023",
      focus: "Science Class",
      icon: Shield,
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English Literature", "History", "English Literature"]
    },
  ]

  const certifications = [
    { name: "CISSP", issuer: "ISC²", year: "2022", level: "Expert" },
    { name: "CEH", issuer: "EC-Council", year: "2021", level: "Advanced" },
    { name: "OSCP", issuer: "Offensive Security", year: "2021", level: "Expert" },
    { name: "AWS Security Specialty", issuer: "Amazon", year: "2022", level: "Professional" },
    { name: "GCIH", issuer: "GIAC", year: "2020", level: "Advanced" },
    { name: "CKA", issuer: "CNCF", year: "2023", level: "Professional" },
  ]

  const courses = [
    "java",
    "cplusplus",
    "python",
    "spring",
    "postgresql",
    "mysql",
    "docker",
    "nextdotjs",
    "typescript",
    "react",
    "nodedotjs",
    "javascript",
    "html5",
    "css3",
    "tailwindcss",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "postman",
  ]

  const techIcons = courses.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  )

  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      <DotPattern
        className="opacity-30"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-secondary/30 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-primary/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-primary/20 rotate-45 animate-pulse"></div>
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="binary-rain opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-primary hover-text-flicker cursor-default flex items-center justify-center gap-4">
              <GraduationCap className="hover-bounce" />
              Education
              <BookOpen className="hover-shake" />
            </span>
          </h2>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, index) => {
              const IconComponent = edu.icon
              return (
                <Card
                  key={index}
                  className="border-primary/30 bg-background/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 hover-card-lift hover-glow group cursor-pointer shadow-lg shadow-primary/5"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300 hover-glow">
                        <IconComponent className="h-8 w-8 text-primary hover-bounce" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h3 className="text-xl font-bold text-primary hover-text-flicker group-hover:text-secondary transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-foreground hover-slide">{edu.institution}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="border-primary/30 text-primary hover-scale-pulse">
                            {edu.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                          <span className="text-primary font-semibold">Focus:</span> {edu.focus}
                        </p>
                        {/* Subjects */}
                        {edu.subjects && edu.subjects.length > 0 && (
                          <p className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                            <span className="text-primary font-semibold">Subjects:</span> {edu.subjects.join(", ")}
                          </p>
                        )}

                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Certifications Grid */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">
              <span className="text-primary hover-text-flicker cursor-default flex items-center justify-center gap-3">
                <Award className="hover-rotate" />
                Professional Certifications
                <Shield className="hover-shake" />
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-primary/30 bg-background/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-300 hover-card-lift hover-glow group cursor-pointer text-center shadow-lg shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-glow">
                        <Zap className="h-6 w-6 text-primary hover-bounce" />
                      </div>
                      <h4 className="font-bold text-primary hover-text-flicker group-hover:text-secondary transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
                        {cert.issuer}
                      </p>
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary hover-scale-pulse">
                          {cert.year}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs hover-bounce ${
                            cert.level === "Expert"
                              ? "border-red-500/30 text-red-400"
                              : cert.level === "Professional"
                                ? "border-blue-500/30 text-blue-400"
                                : "border-green-500/30 text-green-400"
                          }`}
                        >
                          {cert.level}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Specialized Courses */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-6">
              <span className="text-primary hover-text-flicker cursor-default flex items-center justify-center gap-3">
                <Terminal className="hover-rotate" />
                Specialized Training
                <BookOpen className="hover-bounce" />
              </span>
            </h3>
            <div className="relative flex size-full min-h-[400px] items-center justify-center overflow-hidden rounded-lg bg-background/5 backdrop-blur-xl border border-primary/20 px-20 pb-20 pt-8">
              <IconCloud images={techIcons} />
            </div>
          </div>

          {/* Terminal Window Effect */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="border-primary/30 bg-background/10 backdrop-blur-xl hover:border-primary/40 hover-glow shadow-xl shadow-primary/10">
              <CardContent className="p-0">
                <div className="bg-gray-800 dark:bg-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover-bounce cursor-pointer"></div>
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full hover-bounce cursor-pointer"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-green-500 rounded-full hover-bounce cursor-pointer"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <span className="ml-2 text-xs text-gray-300 dark:text-gray-400 font-mono">education_summary.sh</span>
                </div>
                <div className="p-4 font-mono text-sm space-y-2">
                  <div className="text-green-600 dark:text-green-400">
                    <span className="text-blue-600 dark:text-blue-400">$</span> cat education_stats.txt
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 space-y-1 pl-4">
                    <div className="cursor-default">
                      → Bachelor's Degree: <span className="text-primary">IT Engineering (RUPP)</span>
                    </div>
                    <div className="cursor-default">
                      → Cybersecurity Course: <span className="text-primary">Websecurity (ISTAD)</span>
                    </div>
                    <div className="cursor-default">
                      → Fullstack Course: <span className="text-primary">6 Professional</span>
                    </div>
                    <div className="cursor-default">
                      → Specialized Courses: <span className="text-primary">8 Advanced</span>
                    </div>
                    <div className="cursor-default">
                      → Status: <span className="text-green-600 dark:text-green-400 animate-pulse">Continuously Learning</span>
                    </div>
                  </div>
                  <div className="text-green-600 dark:text-green-400 mt-4">
                    <span className="text-blue-600 dark:text-blue-400">$</span> <span className="animate-pulse">_</span>
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
