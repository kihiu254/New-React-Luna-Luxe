import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, BookOpen, Film, Heart, BarChart3 } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      title: "Add Book",
      description: "Track a new book",
      icon: BookOpen,
      color: "text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950",
      href: "/add-media",
    },
    {
      title: "Add Movie",
      description: "Log a movie",
      icon: Film,
      color: "text-fuchsia-600 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950",
      href: "/add-media",
    },
    {
      title: "Browse Library",
      description: "Explore your collection",
      icon: Search,
      color: "text-foreground hover:bg-muted",
      href: "/library",
    },
    {
      title: "Wishlist",
      description: "Manage your wishlist",
      icon: Heart,
      color: "text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950",
      href: "/library?filter=wishlist",
    },
    {
      title: "Analytics",
      description: "View your stats",
      icon: BarChart3,
      color: "text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950",
      href: "/analytics",
    },
    {
      title: "Quick Add",
      description: "Fast entry mode",
      icon: Plus,
      color: "text-foreground hover:bg-muted",
      href: "/add-media?quick=true",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Button
                variant="ghost"
                className={`h-auto p-4 flex flex-col items-center gap-2 ${action.color} transition-colors`}
              >
                <action.icon className="w-6 h-6" />
                <div className="text-center">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
