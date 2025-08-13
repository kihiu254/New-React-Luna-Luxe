"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Amara Johnson",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "LunaLuxe has completely transformed my wardrobe. The quality is exceptional and the designs are absolutely stunning. I get compliments everywhere I go!",
    image: "/testimonial-1.png",
  },
  {
    name: "David Ochieng",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "As someone who appreciates both style and cultural heritage, LunaLuxe perfectly captures what I'm looking for. The attention to detail is remarkable.",
    image: "/testimonial-2.png",
  },
  {
    name: "Grace Mwangi",
    location: "Accra, Ghana",
    rating: 5,
    text: "The customer service is outstanding and the shipping was incredibly fast. I'm already planning my next order. Highly recommend LunaLuxe!",
    image: "/testimonial-3.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their LunaLuxe
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="testimonial-card p-8 rounded-lg relative"
            >
              <Quote className="w-8 h-8 text-rose-600 dark:text-rose-400 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg?height=50&width=50&query=customer"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
