import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Tv,
  BookOpen,
  Smartphone,
  Monitor,
  Wifi,
  WifiOff,
  Settings,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react"

export function IntegrationGrid() {
  const integrations = [
    {
      id: "netflix",
      name: "Netflix",
      category: "Streaming",
      icon: Tv,
      status: "connected",
      description: "Sync your Netflix viewing history and watchlist",
      lastSync: "2 hours ago",
      itemsImported: 47,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950",
    },
    {
      id: "kindle",
      name: "Amazon Kindle",
      category: "E-Books",
      icon: BookOpen,
      status: "connected",
      description: "Import your Kindle library and reading progress",
      lastSync: "1 hour ago",
      itemsImported: 24,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950",
    },
    {
      id: "apple-books",
      name: "Apple Books",
      category: "E-Books",
      icon: Smartphone,
      status: "connected",
      description: "Sync your Apple Books library and annotations",
      lastSync: "3 hours ago",
      itemsImported: 18,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      id: "disney-plus",
      name: "Disney+",
      category: "Streaming",
      icon: Monitor,
      status: "connected",
      description: "Track your Disney+ viewing activity",
      lastSync: "5 hours ago",
      itemsImported: 12,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      id: "goodreads",
      name: "Goodreads",
      category: "Social Reading",
      icon: BookOpen,
      status: "connected",
      description: "Import your Goodreads shelves and reviews",
      lastSync: "1 day ago",
      itemsImported: 156,
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950",
    },
    {
      id: "prime-video",
      name: "Amazon Prime Video",
      category: "Streaming",
      icon: Tv,
      status: "available",
      description: "Connect your Prime Video account",
      lastSync: null,
      itemsImported: 0,
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950",
    },
    {
      id: "hulu",
      name: "Hulu",
      category: "Streaming",
      icon: Tv,
      status: "available",
      description: "Sync your Hulu viewing history",
      lastSync: null,
      itemsImported: 0,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950",
    },
    {
      id: "google-books",
      name: "Google Play Books",
      category: "E-Books",
      icon: BookOpen,
      status: "error",
      description: "Connection error - needs re-authentication",
      lastSync: "Failed",
      itemsImported: 0,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case "syncing":
        return <Clock className="w-4 h-4 text-yellow-500 animate-spin" />
      default:
        return <WifiOff className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Connected</Badge>
      case "error":
        return <Badge variant="destructive">Error</Badge>
      case "syncing":
        return <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">Syncing</Badge>
      default:
        return <Badge variant="outline">Available</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Available Integrations</h2>
        <select className="text-sm border rounded-md px-3 py-1 bg-background">
          <option>All Categories</option>
          <option>Streaming</option>
          <option>E-Books</option>
          <option>Social Reading</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${integration.bgColor} rounded-lg flex items-center justify-center`}>
                    <integration.icon className={`w-5 h-5 ${integration.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-base">{integration.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{integration.category}</p>
                  </div>
                </div>
                {getStatusIcon(integration.status)}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{integration.description}</p>

              <div className="flex items-center justify-between">
                {getStatusBadge(integration.status)}
                <div className="flex items-center gap-2">
                  {integration.status === "connected" && <Switch defaultChecked />}
                  <Button variant="ghost" size="icon">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {integration.status === "connected" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Items imported: {integration.itemsImported}</span>
                    <span>Last sync: {integration.lastSync}</span>
                  </div>
                  <Progress value={85} className="h-1" />
                </div>
              )}

              {integration.status === "available" && (
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Wifi className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              )}

              {integration.status === "error" && (
                <Button variant="outline" className="w-full bg-transparent">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Reconnect
                </Button>
              )}

              {integration.status === "connected" && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Data
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Sync Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
