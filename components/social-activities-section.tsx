"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { NumberTicker } from "@/components/ui/number-ticker"
import { WordRotate } from "@/components/ui/word-rotate"
import { Particles } from "@/components/ui/particles"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Users, Heart, Award, Calendar, Globe, Sparkles, Code, BookOpen, Zap, Compass, GraduationCap, Handshake, Megaphone, Music, Shield, Trophy } from "lucide-react"

export function SocialActivitiesSection() {
  const activities = [
    // RUPP Volunteer Activities
    {
      title: "Cambodia Rover Scout",
      organization: "RUPP",
      period: "2024 - Present",
      role: "Member",
      description: "Active member of Cambodia Rover Scout, participating in community service, leadership training, and outdoor activities"
    },
    {
      title: "Study Club Assistant",
      organization: "RUPP",
      period: "2024 - 2025",
      role: "Assistant",
      description: "Supporting students in their academic journey by organizing study sessions and providing peer tutoring",
    },
    {
      title: "UYFC (Union Youth Federation of Cambodia)",
      organization: "Royal University of Phnom Penh (RUPP)",
      period: "2024 - Present",
      role: "Member",
      description: "Participating in youth development programs and community initiatives through UYFC",
    },
    {
      title: "RUPP Charity Event 2025",
      organization: "Royal University of Phnom Penh (RUPP)",
      period: "2025",
      role: "Volunteer",
      description: "Volunteered in organizing and executing charity events to support underprivileged communities",
    },
    {
      title: "RUPP Songkran 2025",
      organization: "Royal University of Phnom Penh (RUPP)",
      period: "2025",
      role: "Event Volunteer",
      description: "Contributed to organizing and managing the traditional Songkran festival celebration at RUPP",
    },

    // Other Volunteer Activities
    {
      title: "RYL Cambodia - RYL12",
      organization: "RYL Cambodia",
      period: "2024",
      role: "Fair Team, Talk Team, Play Team",
      description: "Multi-role volunteer for RYL12, coordinating stage activities and supporting various event teams",
    },
    {
      title: "TAG Expo 2024",
      organization: "TEAM 2",
      period: "2024",
      role: "Runner",
      description: "Provided logistical support and coordination during TAG Expo 2024",
    },
    {
      title: "ATC NextGen - CTF 2024",
      organization: "ATC NextGen",
      period: "2024",
      role: "Technical Team, Registration",
      description: "Technical team member and registration coordinator for Capture The Flag competition",
    },
    {
      title: "Summer Youth Camp",
      organization: "Directorate General of Youth (DGY)",
      period: "2024 - 2025",
      role: "Camp Delegate (10th) & Volunteer (11th)",
      icon: Users,
      description: "Participated as delegate and volunteer in Summer Youth Camp programs, including Digital Literacy 2025",
      impact: "Youth empowerment programs",
      skills: ["Youth Development", "Digital Literacy", "Community Service"]
    },
    {
      title: "Winning University Life 2025",
      organization: "YEFE of PUC ELI",
      period: "2025",
      role: "Stage Coordinator",
      icon: Megaphone,
      description: "Coordinated stage activities for university life orientation event",
      impact: "Student orientation event",
      skills: ["Stage Management", "Event Coordination", "Student Engagement"]
    },
    {
      title: "ទ Festival Events",
      organization: "ទ Festival",
      period: "2024 - 2025",
      role: "Stage Coordinator",
      icon: Music,
      description: "Stage coordinator for Bon Phnom and Mekong Tech Festival 3rd, managing event flow and performances",
      impact: "Multiple festival events",
      skills: ["Stage Coordination", "Festival Management", "Cultural Events"]
    },
    {
      title: "Cambodia Blockchain Summit",
      organization: "Cambodia Blockchain Summit",
      period: "2024",
      role: "Stage Coordinator",
      icon: Globe,
      description: "Managed event flow and stage coordination for blockchain technology summit",
      impact: "Tech summit coordination",
      skills: ["Stage Management", "Tech Events", "Event Flow"]
    },
    {
      title: "Youth Physics Competition",
      organization: "Geology Club, Cambodia",
      period: "2024",
      role: "Stage Coordinator",
      icon: Trophy,
      description: "Coordinated stage activities for youth physics competition event",
      impact: "Academic competition support",
      skills: ["Competition Coordination", "Stage Management", "Academic Events"]
    },
    {
      title: "SUSU Charity Fun Run",
      organization: "SUSU",
      period: "2024",
      role: "Volunteer",
      icon: Heart,
      description: "Supported charity fun run event to raise funds for community causes",
      impact: "Charity fundraising event",
      skills: ["Charity Events", "Community Support", "Event Volunteer"]
    },
    {
      title: "Major and Career Fair 2025",
      organization: "FUSAAC",
      period: "2025",
      role: "Volunteer",
      icon: GraduationCap,
      description: "Assisted in organizing career fair to connect students with educational and career opportunities",
      impact: "Student career development",
      skills: ["Career Fair", "Student Support", "Event Organization"]
    },
  ]

  const achievements = [
    { title: "Organizations", value: 15, suffix: "+", description: "Active partnerships" },
    { title: "Volunteer Hours", value: 200, suffix: "+", description: "Hours contributed" },
    { title: "Events", value: 20, suffix: "+", description: "Events participated" },
    { title: "Roles", value: 0, suffix: "Multiple", description: "Stage coordinator & more", isRotate: true },
  ]

  return (
    <section id="social-activities" className="py-20 bg-background relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>
      {/* Interactive Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          width={20}
          height={20}
          squares={[80, 80]}
          squaresClassName="hover:fill-primary/50"
        />
      </div>
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
              <Users className="hover-bounce" />
              Volunteer Activities
              <Heart className="hover-shake" />
            </span>
          </h2>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-primary/30 bg-background/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-300 hover-card-lift hover-glow group cursor-pointer text-center shadow-lg shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      {achievement.value > 0 ? (
                        <>
                          <NumberTicker value={achievement.value} className="text-primary" />
                          {achievement.suffix}
                        </>
                      ) : achievement.isRotate ? (
                        <WordRotate
                          className="text-3xl font-bold text-primary"
                          words={["Scout", "Assistant", "Volunteer", "Coordinator"]}
                        />
                      ) : (
                        achievement.suffix
                      )}
                    </div>
                    <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Activities Carousel */}
          <div className="mb-12 max-w-7xl mx-auto px-10 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {activities.map((activity, index) => {
                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <div className="p-1 md:p-2">
                        <Card
                          className="border-primary/30 bg-background/10 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 hover-card-lift hover-glow group cursor-pointer shadow-lg shadow-primary/5 h-full"
                        >
                          <CardContent className="p-5 md:p-6 flex flex-col h-full">
                            <div className="flex-1 space-y-2.5">
                              <h3 className="text-lg md:text-xl font-bold text-primary hover-text-flicker group-hover:text-secondary transition-colors duration-300 leading-snug">
                                {activity.title}
                              </h3>
                              <p className="text-base md:text-lg font-semibold text-foreground hover-slide">
                                {activity.organization}
                              </p>
                              <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
                                  <Badge variant="outline" className="border-primary/30 px-2 py-0.5 text-[11px] text-primary hover-scale-pulse">
                                    {activity.period}
                                  </Badge>
                                  <Badge variant="outline" className="border-secondary/30 px-2 py-0.5 text-[11px] text-secondary hover-scale-pulse">
                                    {activity.role}
                                  </Badge>
                                </div>
                                <p className="text-sm leading-7 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default">
                                  {activity.description}
                                </p>
                                {activity.skills && activity.skills.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5">
                                    {activity.skills.map((skill, skillIndex) => (
                                      <Badge
                                        key={skillIndex}
                                        variant="secondary"
                                        className="px-2 py-0.5 text-[11px] hover-scale-pulse cursor-default"
                                      >
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="border-primary/50 text-primary hover:bg-primary/20 hover:text-primary" />
              <CarouselNext className="border-primary/50 text-primary hover:bg-primary/20 hover:text-primary" />
            </Carousel>
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
                  <span className="ml-2 text-xs text-gray-300 dark:text-gray-400 font-mono">volunteer_activities.sh</span>
                </div>
                <div className="p-4 font-mono text-sm space-y-2">
                  <div className="text-green-600 dark:text-green-400">
                    <span className="text-blue-600 dark:text-blue-400">$</span> cat volunteer_stats.txt
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 space-y-1 pl-4">
                    <div className="cursor-default">
                      → University: <span className="text-primary">RUPP & Multiple Organizations</span>
                    </div>
                    <div className="cursor-default">
                      → Scout: <span className="text-primary">Cambodia Rover Scout</span>
                    </div>
                    <div className="cursor-default">
                      → Events: <span className="text-primary">20+ Volunteer Activities</span>
                    </div>
                    <div className="cursor-default">
                      → Roles: <span className="text-primary">Stage Coordinator, Tech Support</span>
                    </div>
                    <div className="cursor-default">
                      → Status: <span className="text-green-600 dark:text-green-400 animate-pulse">Active Volunteer</span>
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
