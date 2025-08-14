import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Book, Film, Clock, Target, TrendingUp } from "lucide-react"

export function AnalyticsOverview() {
  const stats = [
    {
      title: "Books Read",
      value: "24",
      change: "+3 from last month",
      progress: 80,
      target: "30 this year",
      icon: Book,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950",
    },
    {
      title: "Movies Watched",
      value: "47",
      change: "+8 from last month",
      progress: 94,
      target: "50 this year",
      icon: Film,
      color: "text-lime-500",
      bgColor: "bg-lime-50 dark:bg-lime-950",
    },
    {
      title: "Total Hours",
      value: "156",
      change: "+12 this week",
      progress: 65,
      target: "240 hours goal",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      title: "Goals Achieved",
      value: "7/10",
      change: "2 completed this month",
      progress: 70,
      target: "10 goals set",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-muted-foreground">{stat.target}</span>
              </div>
              <Progress value={stat.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
