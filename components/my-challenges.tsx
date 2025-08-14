import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Award } from "lucide-react"

export function MyChallenges() {
  const activeChallenges = [
    {
      title: "Sci-Fi September",
      progress: 60,
      target: "5 books",
      current: "3 books",
      daysLeft: 15,
    },
  ]

  const completedChallenges = [
    {
      title: "Summer Reading Sprint",
      completedDate: "Aug 2024",
      badge: "Speed Reader",
    },
    {
      title: "Movie Marathon May",
      completedDate: "May 2024",
      badge: "Binge Master",
    },
  ]

  const achievements = [
    { name: "First Challenge", description: "Complete your first challenge", earned: true },
    { name: "Streak Master", description: "Complete 3 challenges in a row", earned: true },
    { name: "Community Leader", description: "Create a challenge with 100+ participants", earned: false },
    { name: "Genre Explorer", description: "Complete challenges in 5 different genres", earned: false },
  ]

  return (
    <div className="space-y-6">
      {/* Active Challenges */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-500" />
            Active Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeChallenges.map((challenge, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">{challenge.title}</h4>
                <Badge variant="outline" className="text-xs">
                  {challenge.daysLeft} days left
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>{challenge.current} completed</span>
                  <span>{challenge.target} target</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>
            </div>
          ))}
          <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
            View All Active
          </Button>
        </CardContent>
      </Card>

      {/* Completed Challenges */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            Completed Challenges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {completedChallenges.map((challenge, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <h5 className="font-medium text-xs">{challenge.title}</h5>
                <p className="text-xs text-muted-foreground">{challenge.completedDate}</p>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                {challenge.badge}
              </Badge>
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
                {achievement.earned && (
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Earned</Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Challenge Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Your Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-purple-600">7</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">1</p>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
