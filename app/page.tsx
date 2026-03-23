import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { SocialActivitiesSection } from "@/components/social-activities-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SocialActivitiesSection />
        <ContactSection />
      </main>
    </div>
  )
}
