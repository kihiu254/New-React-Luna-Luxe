"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-petal-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating flower petals */}
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-secondary/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-14 h-14 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Buzzing bee elements */}
        <div
          className="absolute top-60 left-1/4 w-8 h-8 bg-secondary rounded-full animate-buzz"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="absolute top-80 right-1/3 w-6 h-6 bg-accent rounded-full animate-buzz"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground font-space-grotesk leading-tight">
              Hi, I'm <span className="bg-flower-gradient bg-clip-text text-transparent animate-pulse">Paul Kihiu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Computer Science Student & Web Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building user-friendly, efficient, and scalable solutions. I apply technology to solve
            real-world problems through innovative web development and digital innovation at Meru National Polytechnic.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Meru, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+254 112 081 866</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>1kihiupaul@gmail.com</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-flower-gradient hover:opacity-90 text-white font-semibold px-8 py-3 animate-buzz"
            >
              <Link href="#projects" className="flex items-center gap-2">
                View My Projects
                <ArrowDown className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent" asChild>
              <Link href="https://github.com/kihiu254" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </Link>
            </Button>
          </div>

          {/* Skills Preview */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["HTML", "CSS", "JavaScript", "Python", "PHP", "MySQL", "Figma"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
