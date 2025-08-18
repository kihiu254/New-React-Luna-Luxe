import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { SkillsOverview } from "@/components/skills-overview"
import { FeaturedProjects } from "@/components/featured-projects"
import { AuthSection } from "@/components/auth-section"
import { ContactCTA } from "@/components/contact-cta"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />

      <main className="space-y-0">
        {/* Hero Section with flower-bee inspired design */}
        <HeroSection />

        {/* Skills Overview */}
        <SkillsOverview />

        {/* Featured Projects Preview */}
        <FeaturedProjects />

        <AuthSection />

        {/* Contact Call-to-Action */}
        <ContactCTA />
      </main>
    </div>
  )
}
