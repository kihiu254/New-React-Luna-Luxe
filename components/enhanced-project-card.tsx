"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Lock, Unlock } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  requiresAuth?: boolean
  enhancedDetails?: {
    challenges: string[]
    solutions: string[]
    metrics: {
      label: string
      value: string
    }[]
  }
}

export function EnhancedProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
  requiresAuth = false,
  enhancedDetails,
}: ProjectCardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showEnhanced, setShowEnhanced] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem("github_user")
    setIsAuthenticated(!!savedUser)
  }, [])

  const canShowEnhanced = !requiresAuth || isAuthenticated

  return (
    <Card
      className={`hover:shadow-xl transition-all duration-300 border-border ${
        featured ? "ring-2 ring-primary/20 bg-background" : "bg-background"
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-bold font-space-grotesk">{title}</CardTitle>
            {featured && <Star className="w-5 h-5 text-secondary fill-secondary" />}
            {requiresAuth && (
              <div className="flex items-center gap-1">
                {isAuthenticated ? (
                  <Unlock className="w-4 h-4 text-green-500" />
                ) : (
                  <Lock className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            )}
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Enhanced Details (shown only if authenticated or not required) */}
          {canShowEnhanced && enhancedDetails && (
            <div className="space-y-4 pt-4 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEnhanced(!showEnhanced)}
                className="text-primary hover:text-primary/80"
              >
                {showEnhanced ? "Hide" : "Show"} Technical Details
              </Button>

              {showEnhanced && (
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Challenges</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {enhancedDetails.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solutions Implemented</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {enhancedDetails.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {enhancedDetails.metrics.map((metric, index) => (
                        <div key={index} className="text-center p-2 bg-card rounded border border-border">
                          <div className="font-semibold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Auth Required Message */}
          {requiresAuth && !isAuthenticated && (
            <div className="p-3 bg-muted rounded border border-border text-center">
              <Lock className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Login with GitHub to view enhanced project details</p>
            </div>
          )}

          <div className="flex gap-3">
            {githubUrl && (
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
            )}
            {liveUrl && (
              <Button size="sm" className="flex-1" asChild>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
