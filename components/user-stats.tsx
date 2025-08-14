import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Film, Target, TrendingUp, Calendar, Star } from "lucide-react"

interface UserStatsProps {
  stats: {
    totalBooks: number
    totalMovies: number
    currentStreak: number
    longestStreak: number
    averageRating: number
    thisMonthBooks: number
    thisMonthMovies: number
    yearlyGoal: {
      books: number
      current: number
    }
    topGenres: Array<{
      name: string
      count: number
      percentage: number
    }>
  }
}

export function UserStats({ stats }: UserStatsProps) {
  const goalProgress = (stats.yearlyGoal.current / stats.yearlyGoal.books) * 100

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{stats.totalBooks}</div>
            <div className="text-xs text-muted-foreground">Total Books</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Film className="w-6 h-6 text-pink-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-pink-600">{stats.totalMovies}</div>
            <div className="text-xs text-muted-foreground">Total Movies</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{stats.currentStreak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-600">{stats.averageRating.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">Avg Rating</div>
          </CardContent>
        </Card>
      </div>

      {/* Yearly Goal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            2024 Reading Goal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>{stats.yearlyGoal.current} books read</span>
            <span>{stats.yearlyGoal.books} goal</span>
          </div>
          <Progress value={goalProgress} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {goalProgress >= 100 ? "🎉 Goal achieved!" : `${Math.round(goalProgress)}% complete`}
          </p>
        </CardContent>
      </Card>

      {/* This Month */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            This Month
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
              <div className="text-xl font-bold text-purple-600">{stats.thisMonthBooks}</div>
              <div className="text-xs text-muted-foreground">Books Read</div>
            </div>
            <div className="text-center p-3 bg-pink-50 dark:bg-pink-950 rounded-lg">
              <div className="text-xl font-bold text-pink-600">{stats.thisMonthMovies}</div>
              <div className="text-xs text-muted-foreground">Movies Watched</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Genres */}
      <Card>
        <CardHeader>
          <CardTitle>Top Genres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {stats.topGenres.map((genre, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{genre.name}</span>
                <span className="text-muted-foreground">{genre.count} items</span>
              </div>
              <Progress value={genre.percentage} className="h-1" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
