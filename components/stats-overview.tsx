import { Card, CardContent } from "@/components/ui/card"
import { Book, Film, Clock, TrendingUp } from "lucide-react"

export function StatsOverview() {
  const stats = [
    {
      title: "Books Read",
      value: "24",
      change: "+3 this month",
      icon: Book,
      color: "text-cyan-600",
    },
    {
      title: "Movies Watched",
      value: "47",
      change: "+8 this month",
      icon: Film,
      color: "text-lime-500",
    },
    {
      title: "Hours Tracked",
      value: "156",
      change: "+12 this week",
      icon: Clock,
      color: "text-cyan-600",
    },
    {
      title: "Streak",
      value: "12 days",
      change: "Keep it up!",
      icon: TrendingUp,
      color: "text-lime-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
