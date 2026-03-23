"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Particles } from "@/components/ui/particles"
import { Mail, Terminal, Shield, Lock, Zap } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const terminalCommands = [
    "$ whoami",
    "> Full stack developer & Pen-test",
    "$ cat contact.txt",
    "> Ready to collaborate...",
    "$ ping collaboration.exe",
    "> Connection established ✓",
  ]

  useEffect(() => {
    let commandIndex = 0
    let charIndex = 0
    let currentCommand = ""

    const typeCommand = () => {
      if (commandIndex < terminalCommands.length) {
        currentCommand = terminalCommands[commandIndex]
        if (charIndex < currentCommand.length) {
          setTerminalText((prev) => prev + currentCommand[charIndex])
          charIndex++
          setTimeout(typeCommand, 100)
        } else {
          setTimeout(() => {
            setTerminalText((prev) => prev + "\n")
            commandIndex++
            charIndex = 0
            if (commandIndex < terminalCommands.length) {
              setTimeout(typeCommand, 500)
            }
          }, 1000)
        }
      }
    }

    const timer = setTimeout(typeCommand, 1000)

    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Generate random positions for floating dots only on the client
  const [dotPositions, setDotPositions] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([])
  useEffect(() => {
    const positions = Array.from({ length: 8 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${i * 0.5}s`,
      duration: `${3 + Math.random() * 2}s`,
    }))
    setDotPositions(positions)
  }, [])

  return (
    <section id="contact" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>
      {/* Thai Pattern Background */}
      <div className="absolute inset-0 thai-pattern-bg" />
      
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500 dark:border-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-pink-500 dark:border-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-green-500 dark:border-green-400 rotate-45 animate-spin"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-purple-500 dark:border-purple-400 rounded-full animate-ping"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full opacity-60 animate-float"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
              animationDuration: pos.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">~/contact</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 text-cyan-600 dark:text-cyan-400">
            <Terminal className="h-5 w-5" />
            <span className="font-mono text-sm">Establishing secure connection...</span>
            <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Card className="border-primary/30 bg-background/10 backdrop-blur-xl hover:border-primary/40 mb-8 overflow-hidden shadow-xl shadow-primary/10 transition-all duration-300">
              <CardHeader className="bg-background/10 backdrop-blur-sm border-b border-primary/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-300 dark:text-gray-400 ml-4">terminal</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="font-mono text-sm text-green-500 dark:text-green-400 min-h-[200px]">
                  <pre className="whitespace-pre-wrap">
                    {terminalText}
                    {showCursor && <span className="bg-green-500 dark:bg-green-400 text-white dark:text-black">█</span>}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Secure Email", value: "dinapisethist12@gmail.com", color: "text-cyan-600 dark:text-cyan-400" },
                { icon: Shield, label: "Encrypted Line", value: "010513288", color: "text-green-600 dark:text-green-400" },
                { icon: Lock, label: "Location", value: "Phnom Penh, Cambodia", color: "text-pink-600 dark:text-pink-400" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white/60 dark:bg-black/20 border border-gray-300/50 dark:border-gray-700/50 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{item.label}</p>
                    <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-cyan-500/30 dark:border-cyan-400/30 bg-white/80 dark:bg-black/60 backdrop-blur-sm relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 animate-pulse"></div>

              <CardHeader className="relative">
                <CardTitle className="text-cyan-600 dark:text-cyan-400 flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Initialize Communication Protocol</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative group">
                      <Input
                        name="name"
                        placeholder="Enter your handle..."
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/60 dark:bg-black/40 border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-mono transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 dark:group-hover:shadow-cyan-400/20"
                        required
                      />
                      <div className="absolute inset-0 border border-cyan-500/0 dark:border-cyan-400/0 group-focus-within:border-cyan-500/50 dark:group-focus-within:border-cyan-400/50 rounded-md transition-all duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Secure email address..."
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/60 dark:bg-black/40 border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-mono transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 dark:group-hover:shadow-cyan-400/20"
                        required
                      />
                      <div className="absolute inset-0 border border-cyan-500/0 dark:border-cyan-400/0 group-focus-within:border-cyan-500/50 dark:group-focus-within:border-cyan-400/50 rounded-md transition-all duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <Textarea
                        name="message"
                        placeholder="Transmit your message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white/60 dark:bg-black/40 border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-mono min-h-[150px] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20 dark:group-hover:shadow-cyan-400/20"
                        required
                      />
                      <div className="absolute inset-0 border border-cyan-500/0 dark:border-cyan-400/0 group-focus-within:border-cyan-500/50 dark:group-focus-within:border-cyan-400/50 rounded-md transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-mono font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>TRANSMIT MESSAGE</span>
                    </span>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </form>

                <div className="mt-6 flex items-center justify-center space-x-4 text-sm font-mono">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400">Learn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-600 dark:text-cyan-400">Earn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-pink-600 dark:text-pink-400">Return</span>
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
