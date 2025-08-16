import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LuxuryHeroSection } from "@/components/luxury-hero-section"
import { CollectionShowcase } from "@/components/collection-showcase"
import { StyleGuideSection } from "@/components/style-guide-section"
import { CulturalStoriesSection } from "@/components/cultural-stories-section"
import { LuxuryTestimonialsSection } from "@/components/luxury-testimonials-section"
import { PremiumNewsletterSection } from "@/components/premium-newsletter-section"
import { InteractiveProductGrid } from "@/components/interactive-product-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <section className="relative overflow-hidden">
          <LuxuryHeroSection />
        </section>

        <section className="py-20 bg-secondary/30">
          <CollectionShowcase />
        </section>

        <section className="py-20 bg-background">
          <InteractiveProductGrid />
        </section>

        <section className="py-20 bg-card/50">
          <StyleGuideSection />
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CulturalStoriesSection />
        </section>

        <section className="py-20 bg-secondary/20">
          <LuxuryTestimonialsSection />
        </section>

        <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary">
          <PremiumNewsletterSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
