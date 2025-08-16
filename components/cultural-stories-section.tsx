"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CulturalStoriesSection() {
  const stories = [
    {
      title: "The Art of Kente Weaving",
      excerpt: "Discover the centuries-old tradition of Kente cloth weaving and its significance in Ghanaian culture.",
      image: "/african-print-model.png",
      readTime: "5 min read",
      category: "Heritage",
    },
    {
      title: "Modern Ankara Revolution",
      excerpt: "How contemporary designers are reimagining traditional Ankara prints for the global fashion stage.",
      image: "/vibrant-ankara-dress.png",
      readTime: "7 min read",
      category: "Innovation",
    },
    {
      title: "Sustainable African Fashion",
      excerpt: "Our commitment to ethical production and supporting local artisans across the African continent.",
      image: "/contemporary-african-boutique.png",
      readTime: "6 min read",
      category: "Sustainability",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Cultural Stories</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich narratives behind our designs and the cultural heritage that inspires every piece.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={story.image || "/placeholder.svg"}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {story.category}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span>{story.readTime}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{story.excerpt}</p>
              <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                Read More →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg" className="px-8">
          View All Stories
        </Button>
      </div>
    </div>
  )
}
