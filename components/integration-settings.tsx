import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Settings, Clock, Shield, Zap } from "lucide-react"

export function IntegrationSettings() {
  return (
    <div className="space-y-6">
      {/* Sync Settings */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Sync Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-sync" className="text-sm">
                Auto-sync enabled
              </Label>
              <Switch id="auto-sync" defaultChecked />
            </div>

            <div className="space-y-2">
              <Label className="text-sm">Sync frequency</Label>
              <Select defaultValue="hourly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="hourly">Every hour</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="background-sync" className="text-sm">
                Background sync
              </Label>
              <Switch id="background-sync" defaultChecked />
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Advanced Settings
          </Button>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Privacy & Data
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="share-data" className="text-sm">
                Share viewing data
              </Label>
              <Switch id="share-data" />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="anonymous-stats" className="text-sm">
                Anonymous analytics
              </Label>
              <Switch id="anonymous-stats" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="recommendations" className="text-sm">
                AI recommendations
              </Label>
              <Switch id="recommendations" defaultChecked />
            </div>
          </div>

          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Your data is encrypted and never shared with third parties without your consent.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* API Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <Zap className="w-4 h-4" />
            API Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">TMDB Movies</span>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Operational</Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Google Books</span>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">Operational</Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Goodreads</span>
            <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">Limited</Badge>
          </div>

          <Button variant="ghost" className="w-full text-xs">
            View API Documentation
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Export All Data
          </Button>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            Import from File
          </Button>
          <Button variant="outline" size="sm" className="w-full bg-transparent text-red-600 hover:text-red-700">
            Reset All Connections
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
