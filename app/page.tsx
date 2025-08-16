import { Header } from "@/components/header"
import { ModernHeroSection } from "@/components/modern-hero-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { BrandStorySection } from "@/components/brand-story-section"
import { TrendingSection } from "@/components/trending-section"
import { SpecialOffersSection } from "@/components/special-offers-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <section className="relative overflow-hidden">
          <ModernHeroSection />
        </section>

        <section className="py-16 bg-card/30">
          <CategoryShowcase />
        </section>

        <section className="py-16 bg-background">
          <TrendingSection />
        </section>

        <section className="py-16 bg-muted/20">
          <FeaturedProducts />
        </section>

        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <SpecialOffersSection />
        </section>

        <section className="py-16 bg-background">
          <BrandStorySection />
        </section>

        <section className="py-16 bg-card/50">
          <TestimonialsSection />
        </section>

        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <NewsletterSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
