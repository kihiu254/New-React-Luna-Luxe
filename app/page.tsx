import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
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
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <TrendingSection />
        <FeaturedProducts />
        <SpecialOffersSection />
        <BrandStorySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
