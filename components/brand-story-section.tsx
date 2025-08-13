"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Globe } from "lucide-react"

export function BrandStorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-serif">Our Story</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            LunaLuxe was born from a passion for celebrating African heritage through contemporary fashion. We believe
            that style should tell a story, and every piece we create carries the spirit of elegance and cultural pride.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="w-8 h-8" />,
              title: "Premium Quality",
              description: "Each piece is crafted with meticulous attention to detail using the finest materials.",
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Cultural Heritage",
              description:
                "We honor African traditions while creating modern designs for today's fashion-forward individuals.",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Reach",
              description: "Bringing African-inspired fashion to customers worldwide with fast, reliable shipping.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover-lift"
            >
              <div className="text-rose-600 dark:text-rose-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-serif">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
