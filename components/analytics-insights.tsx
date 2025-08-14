import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lightbulb, Target, TrendingUp, Award, Zap } from "lucide-react"

export function AnalyticsInsights() {
  const insights = [
    {
      type: "trend",
      title: "Reading Streak",
      description: "You've read for 12 consecutive days! Keep it up to reach your 30-day goal.",
      progress: 40,
      action: "Continue Streak",
    },
    {
      type: "achievement",
      title: "Genre Explorer",
      description: "You've read books from 8 different genres this year. Try 2 more to unlock the badge!",
      progress: 80,
      action: "Explore Genres",
    },
    {
      type: "recommendation",
      title: "Peak Reading Time",
      description: "You read most effectively between 7-9 PM. Schedule your reading sessions accordingly.",
      action: "Set Reminder",
    },
  ]

  const goals = [
    {
      title: "Annual Reading Goal",
      current: 24,
      target: 30,
      progress: 80,
      timeLeft: "2 months left",
      onTrack: true,
    },
    {
      title: "Monthly Movie Goal",
      current: 8,
      target: 10,
      progress: 80,
      timeLeft: "5 days left",
      onTrack: true,
    },
    {
      title: "Sci-Fi Challenge",
      current: 3,
      target: 5,
      progress: 60,
      timeLeft: "15 days left",
      onTrack: false,
    },
  ]

  const achievements = [
    { name: "Speed Reader", description: "Read 3 books in one week", earned: true },
    { name: "Movie Buff", description: "Watch 50 movies in a year", earned: true },
    { name: "Genre Master", description: "Read books from 10 genres", earned: false, progress: 80 },
    { name: "Consistency King", description: "30-day reading streak", earned: false, progress: 40 },
  ]

  return (
    <div className="space-y-6">
      {/* AI Insights */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-500" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.map((insight, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {insight.type === "trend" && <TrendingUp className="w-4 h-4 text-green-500" />}
                {insight.type === "achievement" && <Award className="w-4 h-4 text-purple-500" />}
                {insight.type === "recommendation" && <Zap className="w-4 h-4 text-blue-500" />}
                <h4 className="font-medium text-sm">{insight.title}</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{insight.description}</p>
              {insight.progress && (
                <div className="mb-3">
                  <Progress value={insight.progress} className="h-1" />
                </div>
              )}
              <Button size="sm" variant="outline" className="w-full bg-transparent">
                {insight.action}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Goals Progress */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-500" />
            Goals Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {goals.map((goal, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">{goal.title}</h4>
                <Badge variant={goal.onTrack ? "default" : "secondary"} className="text-xs">
                  {goal.onTrack ? "On Track" : "Behind"}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>
                    {goal.current} / {goal.target}
                  </span>
                  <span className="text-muted-foreground">{goal.timeLeft}</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Award className="w-4 h-4 text-orange-500" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${achievement.earned ? "bg-green-50 dark:bg-green-950" : "bg-muted/50"}`}
            >
              <div className="flex items-center justify-between mb-1">
                <h5 className="font-medium text-xs">{achievement.name}</h5>
                {achievement.earned ? (
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Earned</Badge>
                ) : (
                  achievement.progress && <span className="text-xs text-muted-foreground">{achievement.progress}%</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
              {!achievement.earned && achievement.progress && <Progress value={achievement.progress} className="h-1" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-lg font-bold text-blue-600">4.2</p>
              <p className="text-xs text-muted-foreground">Avg Rating</p>
            </div>
            <div>
              <p className="text-lg font-bold text-green-600">85%</p>
              <p className="text-xs text-muted-foreground">Completion Rate</p>
            </div>
            <div>
              <p className="text-lg font-bold text-purple-600">2.3h</p>
              <p className="text-xs text-muted-foreground">Daily Average</p>
            </div>
            <div>
              <p className="text-lg font-bold text-orange-600">12</p>
              <p className="text-xs text-muted-foreground">Current Streak</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
