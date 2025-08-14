import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Users } from "lucide-react"

interface UserProfileProps {
  username: string
  avatar?: string
  joinDate: string
  stats: {
    booksRead: number
    moviesWatched: number
    reviews: number
    followers: number
    following: number
  }
  badges: Array<{
    name: string
    icon: string
    description: string
  }>
}

export function UserProfile({ username, avatar, joinDate, stats, badges }: UserProfileProps) {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src={avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white">
                {username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">{username}</h1>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4" />
                Joined {joinDate}
              </p>

              <div className="flex gap-6 mt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">{stats.booksRead}</div>
                  <div className="text-xs text-muted-foreground">Books</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-pink-600">{stats.moviesWatched}</div>
                  <div className="text-xs text-muted-foreground">Movies</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">{stats.reviews}</div>
                  <div className="text-xs text-muted-foreground">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-pink-600">{stats.followers}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
              </div>
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700">
              <Users className="w-4 h-4 mr-2" />
              Follow
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl">{badge.icon}</div>
                <div>
                  <div className="font-medium text-sm">{badge.name}</div>
                  <div className="text-xs text-muted-foreground">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
