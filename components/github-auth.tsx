"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Github, LogOut, User, Star, GitFork, ExternalLink } from "lucide-react"
import Link from "next/link"

interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  updated_at: string
}

export function GitHubAuth() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Simulate GitHub OAuth login
  const handleGitHubLogin = async () => {
    setIsLoading(true)

    // In a real implementation, this would redirect to GitHub OAuth
    // For demo purposes, we'll simulate fetching Paul's public GitHub data
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock user data based on Paul's CV
      const mockUser: GitHubUser = {
        login: "kihiu254",
        name: "Paul Kihiu",
        avatar_url: "/paul-kihiu-developer-avatar.png",
        bio: "Computer Science Student at Meru National Polytechnic | Web Developer | Problem Solver",
        public_repos: 8,
        followers: 24,
        following: 15,
        html_url: "https://github.com/kihiu254",
      }

      // Mock repositories data
      const mockRepos: GitHubRepo[] = [
        {
          id: 1,
          name: "lunaluxe-ecommerce",
          description:
            "Responsive e-commerce website for Kenyan fashion brand with shopping cart and newsletter integration",
          html_url: "https://github.com/kihiu254/lunaluxe-ecommerce",
          stargazers_count: 12,
          forks_count: 3,
          language: "JavaScript",
          updated_at: "2024-11-15T10:30:00Z",
        },
        {
          id: 2,
          name: "mr-trendy-platform",
          description: "Luxury fashion web platform with modern UI/UX and responsive design",
          html_url: "https://github.com/kihiu254/mr-trendy-platform",
          stargazers_count: 8,
          forks_count: 2,
          language: "HTML",
          updated_at: "2024-10-28T14:20:00Z",
        },
        {
          id: 3,
          name: "portfolio-website",
          description: "Modern portfolio website with flower-bee inspired design and GitHub integration",
          html_url: "https://github.com/kihiu254/portfolio-website",
          stargazers_count: 15,
          forks_count: 5,
          language: "TypeScript",
          updated_at: "2024-12-01T09:15:00Z",
        },
        {
          id: 4,
          name: "python-data-analysis",
          description: "Data analysis projects and visualization scripts using Python and pandas",
          html_url: "https://github.com/kihiu254/python-data-analysis",
          stargazers_count: 6,
          forks_count: 1,
          language: "Python",
          updated_at: "2024-11-20T16:45:00Z",
        },
      ]

      setUser(mockUser)
      setRepos(mockRepos)
      setIsAuthenticated(true)

      // Store in localStorage for persistence
      localStorage.setItem("github_user", JSON.stringify(mockUser))
      localStorage.setItem("github_repos", JSON.stringify(mockRepos))
    } catch (error) {
      console.error("GitHub authentication failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    setUser(null)
    setRepos([])
    setIsAuthenticated(false)
    localStorage.removeItem("github_user")
    localStorage.removeItem("github_repos")
  }

  // Check for existing session on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem("github_user")
    const savedRepos = localStorage.getItem("github_repos")

    if (savedUser && savedRepos) {
      setUser(JSON.parse(savedUser))
      setRepos(JSON.parse(savedRepos))
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <Card className="w-full max-w-md mx-auto border-border">
        <CardHeader className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-flower-gradient rounded-full flex items-center justify-center">
            <Github className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="font-space-grotesk">Connect with GitHub</CardTitle>
          <p className="text-sm text-muted-foreground">
            Login to view Paul's latest repositories and enhanced project details
          </p>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleGitHubLogin}
            disabled={isLoading}
            className="w-full bg-flower-gradient hover:opacity-90 text-white font-semibold"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Connecting...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                Login with GitHub
              </div>
            )}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={user?.avatar_url || "/placeholder.svg"} alt={user?.name} />
                <AvatarFallback>
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-space-grotesk">{user?.name}</CardTitle>
                <p className="text-sm text-muted-foreground">@{user?.login}</p>
                <p className="text-sm text-muted-foreground mt-1">{user?.bio}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <div className="font-semibold text-foreground">{user?.public_repos}</div>
              <div className="text-muted-foreground">Repositories</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">{user?.followers}</div>
              <div className="text-muted-foreground">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-foreground">{user?.following}</div>
              <div className="text-muted-foreground">Following</div>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm" asChild>
              <Link href={user?.html_url || "#"} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Repositories */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="font-space-grotesk">Latest Repositories</CardTitle>
          <p className="text-sm text-muted-foreground">Recent projects and contributions</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {repos.map((repo) => (
              <div key={repo.id} className="border border-border rounded-lg p-4 hover:bg-card transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {repo.name}
                      </Link>
                      <Badge variant="outline" className="text-xs">
                        {repo.language}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{repo.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </div>
                      <div>Updated {new Date(repo.updated_at).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href={user?.html_url || "#"} target="_blank" rel="noopener noreferrer">
                View All Repositories
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
