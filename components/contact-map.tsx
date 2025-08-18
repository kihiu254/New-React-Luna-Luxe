import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, School, Briefcase } from "lucide-react"

export function ContactMap() {
  return (
    <Card className="border-border bg-background">
      <CardHeader>
        <CardTitle className="font-space-grotesk text-2xl flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" />
          Location & Availability
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <School className="w-5 h-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Current Location</h4>
              <p className="text-sm text-muted-foreground">Meru, Kenya</p>
              <p className="text-xs text-muted-foreground">Studying at Meru National Polytechnic</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 text-secondary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">Work Preferences</h4>
              <p className="text-sm text-muted-foreground">Open to both remote and on-site opportunities</p>
              <p className="text-xs text-muted-foreground">Willing to relocate for the right opportunity</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-card rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">Availability</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Current Status:</span>
              <span className="font-medium text-foreground">Student (Available for part-time work)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Attachment Period:</span>
              <span className="font-medium text-foreground">September - December 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Graduation:</span>
              <span className="font-medium text-foreground">Expected 2025</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-petal-gradient rounded-lg border border-border">
          <h4 className="font-semibold text-foreground mb-2">Travel & Relocation</h4>
          <p className="text-sm text-muted-foreground">
            I'm open to opportunities across Kenya and internationally. My passion for travel and exploration makes me
            adaptable to new environments and cultures.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
