"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function LuxuryTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Fashion Influencer",
      location: "Lagos, Nigeria",
      image: "/african-fashion-influencer.png",
      rating: 5,
      text: "LunaLuxe has completely transformed my wardrobe. The quality of their African prints is unmatched, and the contemporary cuts make me feel confident and stylish every day.",
    },
    {
      name: "Kwame Asante",
      role: "Creative Director",
      location: "Accra, Ghana",
      image: "/african-creative-director.png",
      rating: 5,
      text: "As someone who appreciates authentic African fashion, I'm impressed by LunaLuxe's commitment to preserving traditional craftsmanship while creating modern, wearable pieces.",
    },
    {
      name: "Zara Mwangi",
      role: "Entrepreneur",
      location: "Nairobi, Kenya",
      image: "/african-woman-entrepreneur.png",
      rating: 5,
      text: "The attention to detail and the story behind each piece makes LunaLuxe special. I love how they celebrate African heritage through contemporary fashion.",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">What Our Customers Say</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join thousands of satisfied customers who have discovered the beauty of authentic African fashion.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed mb-8">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground text-lg">{testimonials[activeTestimonial].name}</h4>
                <p className="text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].location}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant={activeTestimonial === index ? "default" : "outline"}
              size="sm"
              className="w-12 h-12 rounded-full p-0"
              onClick={() => setActiveTestimonial(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
