import { CheckCircle, Truck, Package, Home, Clock, MapPin, ShoppingBag, PackageCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineEvent {
  status: string
  timestamp: string
  location?: string
  description: string
}

interface OrderTimelineProps {
  currentStatus:
    | "placed"
    | "confirmed"
    | "processing"
    | "packed"
    | "shipped"
    | "out-for-delivery"
    | "delivered"
    | "cancelled"
  timeline?: TimelineEvent[]
}

export function OrderTimeline({ currentStatus, timeline }: OrderTimelineProps) {
  const steps = [
    {
      id: "placed",
      title: "Order Placed",
      description: "Your order has been received",
      icon: ShoppingBag,
    },
    {
      id: "confirmed",
      title: "Order Confirmed",
      description: "Payment verified and order confirmed",
      icon: CheckCircle,
    },
    {
      id: "processing",
      title: "Processing",
      description: "Your order is being prepared",
      icon: Package,
    },
    {
      id: "packed",
      title: "Packed",
      description: "Items packed and ready for pickup",
      icon: PackageCheck,
    },
    {
      id: "shipped",
      title: "Shipped",
      description: "Package picked up by carrier",
      icon: Truck,
    },
    {
      id: "out-for-delivery",
      title: "Out for Delivery",
      description: "Package is on the way to you",
      icon: MapPin,
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Package delivered successfully",
      icon: Home,
    },
  ]

  const getStepStatus = (stepId: string) => {
    const stepOrder = ["placed", "confirmed", "processing", "packed", "shipped", "out-for-delivery", "delivered"]
    const currentIndex = stepOrder.indexOf(currentStatus)
    const stepIndex = stepOrder.indexOf(stepId)

    if (currentStatus === "cancelled") {
      return stepIndex === 0 ? "completed" : "cancelled"
    }

    if (stepIndex < currentIndex) return "completed"
    if (stepIndex === currentIndex) return "active"
    return "pending"
  }

  const getTimelineEvent = (stepId: string) => {
    return timeline?.find((event) => event.status === stepId)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Order Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const status = getStepStatus(step.id)
              const timelineEvent = getTimelineEvent(step.id)
              const Icon = step.icon

              return (
                <div key={step.id} className="relative flex items-start">
                  {/* Step Icon */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      status === "completed"
                        ? "bg-green-500 border-green-500 text-white"
                        : status === "active"
                          ? "bg-primary border-primary text-white"
                          : status === "cancelled"
                            ? "bg-red-500 border-red-500 text-white"
                            : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Content */}
                  <div className="ml-4 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className={`font-semibold ${
                          status === "completed" || status === "active"
                            ? "text-foreground"
                            : status === "cancelled"
                              ? "text-red-600"
                              : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </h4>
                      {status === "active" && (
                        <Badge variant="secondary" className="text-xs">
                          Current
                        </Badge>
                      )}
                    </div>

                    <p
                      className={`text-sm mb-2 ${
                        status === "completed" || status === "active"
                          ? "text-muted-foreground"
                          : status === "cancelled"
                            ? "text-red-500"
                            : "text-muted-foreground/60"
                      }`}
                    >
                      {step.description}
                    </p>

                    {timelineEvent && (
                      <div className="bg-muted/50 rounded-lg p-3 mt-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {new Date(timelineEvent.timestamp).toLocaleString()}
                          </span>
                          {timelineEvent.location && (
                            <span className="text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {timelineEvent.location}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium mt-1">{timelineEvent.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
