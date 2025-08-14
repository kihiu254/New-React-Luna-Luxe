import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Users, Trophy, Book, Film, Target } from "lucide-react"

export function ChallengesList() {
  const challenges = [
    {
      id: "1",
      title: "Sci-Fi September",
      description: "Read 5 science fiction books during September",
      type: "reading",
      duration: "30 days",
      participants: 847,
      progress: 60,
      difficulty: "Medium",
      reward: "Sci-Fi Explorer Badge",
      creator: {
        name: "Emma Thompson",
        avatar: "/user-avatar-3.png",
      },
      endDate: "2024-09-30",
      isJoined: true,
    },
    {
      id: "2",
      title: "Classic Cinema October",
      description: "Watch 10 classic movies from before 1980",
      type: "watching",
      duration: "31 days",
      participants: 523,
      progress: 0,
      difficulty: "Hard",
      reward: "Cinema Historian Badge",
      creator: {
        name: "David Park",
        avatar: "/user-avatar-4.png",
      },
      endDate: "2024-10-31",
      isJoined: false,
    },
    {
      id: "3",
      title: "Diverse Voices Challenge",
      description: "Read books by authors from 10 different countries",
      type: "reading",
      duration: "90 days",
      participants: 1205,
      progress: 0,
      difficulty: "Hard",
      reward: "Global Reader Badge",
      creator: {
        name: "Sarah Chen",
        avatar: "/user-avatar-1.png",
      },
      endDate: "2024-12-31",
      isJoined: false,
    },
    {
      id: "4",
      title: "Binge-Free November",
      description: "Watch only one episode per day for the entire month",
      type: "watching",
      duration: "30 days",
      participants: 342,
      progress: 0,
      difficulty: "Easy",
      reward: "Mindful Viewer Badge",
      creator: {
        name: "Mike Rodriguez",
        avatar: "/user-avatar-2.png",
      },
      endDate: "2024-11-30",
      isJoined: false,
    },
    {
      id: "5",
      title: "Page Turner Sprint",
      description: "Read 3 books in 2 weeks",
      type: "reading",
      duration: "14 days",
      participants: 678,
      progress: 0,
      difficulty: "Hard",
      reward: "Speed Reader Badge",
      creator: {
        name: "Emma Thompson",
        avatar: "/user-avatar-3.png",
      },
      endDate: "2024-09-15",
      isJoined: false,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      case "Medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
      case "Hard":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Available Challenges</h2>
        <select className="text-sm border rounded-md px-3 py-1 bg-background">
          <option>All Types</option>
          <option>Reading</option>
          <option>Watching</option>
        </select>
      </div>

      <div className="space-y-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                    {challenge.type === "reading" ? (
                      <Book className="w-5 h-5 text-white" />
                    ) : (
                      <Film className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                      <Badge variant="outline" className="text-xs">
                        {challenge.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {challenge.participants}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{challenge.description}</p>

              {challenge.isJoined && challenge.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Your Progress</span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={challenge.creator.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="text-xs">
                        {challenge.creator.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">by {challenge.creator.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    Ends {new Date(challenge.endDate).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Trophy className="w-3 h-3" />
                    {challenge.reward}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                {challenge.isJoined ? (
                  <>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Target className="w-4 h-4 mr-2" />
                      View Progress
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent text-red-600 hover:text-red-700">
                      Leave Challenge
                    </Button>
                  </>
                ) : (
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">Join Challenge</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
