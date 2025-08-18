"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, MapPin, Clock, Navigation } from "lucide-react"
import type { OrderStatus } from "./order-tracking-content"

interface LiveTrackingMapProps {
  orderStatus: OrderStatus
  deliveryLocation: {
    lat: number
    lng: number
  }
}

export function LiveTrackingMap({ orderStatus, deliveryLocation }: LiveTrackingMapProps) {
  const [driverLocation, setDriverLocation] = useState({
    lat: deliveryLocation.lat - 0.01,
    lng: deliveryLocation.lng - 0.01,
  })
  const [estimatedArrival, setEstimatedArrival] = useState("15-20 minutes")

  // Simulate driver movement
  useEffect(() => {
    const interval = setInterval(() => {
      setDriverLocation((prev) => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001,
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Navigation className="h-5 w-5 text-primary" />
          Live Tracking
          <Badge variant="secondary" className="ml-auto">
            <Truck className="h-3 w-3 mr-1" />
            Out for Delivery
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Map Placeholder */}
        <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="h-8 w-8 text-primary mx-auto" />
            <p className="text-sm text-muted-foreground">Interactive Map</p>
            <p className="text-xs text-muted-foreground">
              Lat: {driverLocation.lat.toFixed(4)}, Lng: {driverLocation.lng.toFixed(4)}
            </p>
          </div>

          {/* Simulated delivery truck icon */}
          <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-full animate-pulse">
            <Truck className="h-4 w-4" />
          </div>

          {/* Destination marker */}
          <div className="absolute bottom-4 right-4 bg-red-500 text-white p-2 rounded-full">
            <MapPin className="h-4 w-4" />
          </div>
        </div>

        {/* Delivery Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted rounded-lg">
            <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Estimated Arrival</p>
            <p className="text-lg font-bold text-primary">{estimatedArrival}</p>
          </div>

          <div className="text-center p-4 bg-muted rounded-lg">
            <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Driver</p>
            <p className="text-lg font-bold">James M.</p>
          </div>

          <div className="text-center p-4 bg-muted rounded-lg">
            <Navigation className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Distance</p>
            <p className="text-lg font-bold">2.3 km</p>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Delivery Instructions</h4>
          <p className="text-sm text-muted-foreground">
            Please ensure someone is available to receive the package. Contact driver at +254 700 123 456 if needed.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
