"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react"

interface Notification {
  id: string
  type: "email" | "sms"
  message: string
  timestamp: string
  status: "sent" | "delivered" | "failed"
}

interface OrderNotificationsProps {
  notifications: Notification[]
}

export function OrderNotifications({ notifications }: OrderNotificationsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Notification History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-4 p-4 border rounded-lg">
              <div className="flex-shrink-0">
                {notification.type === "email" ? (
                  <Mail className="h-5 w-5 text-blue-500" />
                ) : (
                  <MessageSquare className="h-5 w-5 text-green-500" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">
                    {notification.type.toUpperCase()}
                  </Badge>
                  <Badge className={`text-xs ${getStatusColor(notification.status)}`}>
                    {getStatusIcon(notification.status)}
                    <span className="ml-1">{notification.status}</span>
                  </Badge>
                </div>

                <p className="text-sm font-medium text-foreground mb-1">{notification.message}</p>

                <p className="text-xs text-muted-foreground">{new Date(notification.timestamp).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No notifications sent yet</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
