"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Package, Eye, Download, RefreshCw } from "lucide-react"
import Link from "next/link"

interface Order {
  id: string
  date: string
  status: "delivered" | "processing" | "shipped" | "cancelled"
  total: number
  items: number
  trackingNumber?: string
}

const mockOrders: Order[] = [
  {
    id: "LL-2024-001",
    date: "2024-01-15",
    status: "delivered",
    total: 12500,
    items: 2,
    trackingNumber: "TRK123456789",
  },
  {
    id: "LL-2024-002",
    date: "2024-01-10",
    status: "shipped",
    total: 8900,
    items: 1,
    trackingNumber: "TRK987654321",
  },
  {
    id: "LL-2024-003",
    date: "2024-01-05",
    status: "processing",
    total: 15600,
    items: 3,
  },
]

const statusColors = {
  delivered: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  shipped: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  processing: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
}

export function OrdersContent() {
  const [orders] = useState<Order[]>(mockOrders)

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your order history</p>
        </div>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Package className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
              <p className="text-muted-foreground mb-6 text-center">
                You haven't placed any orders yet. Start shopping to see your orders here.
              </p>
              <Link href="/shop">
                <Button>Start Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <CardDescription>
                        Placed on{" "}
                        {new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </div>
                    <Badge className={statusColors[order.status]}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-lg font-semibold">KSh {order.total.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Items</p>
                      <p className="text-lg font-semibold">
                        {order.items} item{order.items > 1 ? "s" : ""}
                      </p>
                    </div>
                    {order.trackingNumber && (
                      <div>
                        <p className="text-sm text-muted-foreground">Tracking Number</p>
                        <p className="text-lg font-semibold">{order.trackingNumber}</p>
                      </div>
                    )}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex gap-3 flex-wrap">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    {order.trackingNumber && (
                      <Link href={`/order-tracking?orderNumber=${order.id}&email=1kihiupaul@gmail.com`}>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Track Order
                        </Button>
                      </Link>
                    )}
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download Invoice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
