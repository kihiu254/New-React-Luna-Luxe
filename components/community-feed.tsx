import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share, Star, Book, Film, ThumbsUp } from "lucide-react"

export function CommunityFeed() {
  const posts = [
    {
      id: "1",
      user: {
        name: "Sarah Chen",
        username: "sarahreads",
        avatar: "/user-avatar-1.png",
        badge: "Book Lover",
      },
      type: "review",
      content: {
        text: "Just finished 'The Seven Husbands of Evelyn Hugo' and I'm absolutely blown away! The storytelling is incredible and the characters feel so real. Definitely a 5-star read!",
        media: {
          title: "The Seven Husbands of Evelyn Hugo",
          author: "Taylor Jenkins Reid",
          type: "book",
          cover: "/evelyn-hugo-cover.png",
          rating: 5,
        },
      },
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
    },
    {
      id: "2",
      user: {
        name: "Mike Rodriguez",
        username: "moviemike",
        avatar: "/user-avatar-2.png",
        badge: "Cinephile",
      },
      type: "recommendation",
      content: {
        text: "If you loved Dune, you absolutely NEED to watch 'Arrival'. Denis Villeneuve's direction is phenomenal in both films. The way he handles sci-fi is just *chef's kiss*",
        media: {
          title: "Arrival",
          director: "Denis Villeneuve",
          type: "movie",
          cover: "/arrival-poster.png",
          rating: 4,
        },
      },
      timestamp: "4 hours ago",
      likes: 31,
      comments: 12,
      shares: 7,
    },
    {
      id: "3",
      user: {
        name: "Emma Thompson",
        username: "emmareads",
        avatar: "/user-avatar-3.png",
        badge: "Challenge Master",
      },
      type: "challenge",
      content: {
        text: "Day 15 of the Sci-Fi September challenge! Just completed 'Project Hail Mary' - what an incredible journey. Andy Weir really knows how to blend science with heart. Who else is participating?",
        challenge: {
          name: "Sci-Fi September",
          progress: "15/30 days",
          participants: 847,
        },
      },
      timestamp: "6 hours ago",
      likes: 18,
      comments: 15,
      shares: 2,
    },
    {
      id: "4",
      user: {
        name: "David Park",
        username: "davidwatches",
        avatar: "/user-avatar-4.png",
        badge: "Binge Watcher",
      },
      type: "discussion",
      content: {
        text: "Hot take: Book adaptations are getting SO much better lately. The Last of Us, Wednesday, House of the Dragon... What's your favorite recent adaptation?",
      },
      timestamp: "8 hours ago",
      likes: 42,
      comments: 28,
      shares: 5,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Button variant="outline" className="w-full justify-start text-muted-foreground bg-transparent">
                Share your thoughts, reviews, or recommendations...
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Feed Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {post.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm">{post.user.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {post.user.badge}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    @{post.user.username} • {post.timestamp}
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm">{post.content.text}</p>

            {/* Media Content */}
            {post.content.media && (
              <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                <img
                  src={post.content.media.cover || "/placeholder.svg"}
                  alt={post.content.media.title}
                  className="w-16 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {post.content.media.type === "book" ? (
                      <Book className="w-4 h-4 text-cyan-600" />
                    ) : (
                      <Film className="w-4 h-4 text-lime-500" />
                    )}
                    <h5 className="font-medium text-sm">{post.content.media.title}</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    by {post.content.media.author || post.content.media.director}
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${
                          star <= post.content.media.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Challenge Content */}
            {post.content.challenge && (
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm">{post.content.challenge.name}</h5>
                  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                    {post.content.challenge.participants} participants
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Progress: {post.content.challenge.progress}</p>
              </div>
            )}

            {/* Engagement Actions */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-muted-foreground hover:text-red-500"
                >
                  <Heart className="w-4 h-4" />
                  <span className="text-xs">{post.likes}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-muted-foreground hover:text-blue-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">{post.comments}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-muted-foreground hover:text-green-500"
                >
                  <Share className="w-4 h-4" />
                  <span className="text-xs">{post.shares}</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-purple-500">
                <ThumbsUp className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
