import { CheckCircle, Truck, Package, Home } from "lucide-react"

interface OrderTimelineProps {
  currentStatus: "placed" | "processing" | "in-transit" | "delivered"
}

export function OrderTimeline({ currentStatus }: OrderTimelineProps) {
  const steps = [
    {
      id: "placed",
      title: "Order Placed",
      description: "Your order has been confirmed",
      icon: CheckCircle,
    },
    {
      id: "processing",
      title: "Processing",
      description: "Your order is being processed",
      icon: Package,
    },
    {
      id: "in-transit",
      title: "In Transit",
      description: "Your order is on its way",
      icon: Truck,
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Package delivered successfully",
      icon: Home,
    },
  ]

  const getStepStatus = (stepId: string) => {
    const stepOrder = ["placed", "processing", "in-transit", "delivered"]
    const currentIndex = stepOrder.indexOf(currentStatus)
    const stepIndex = stepOrder.indexOf(stepId)

    if (stepIndex < currentIndex) return "completed"
    if (stepIndex === currentIndex) return "active"
    return "pending"
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-serif font-semibold text-gray-900 mb-6">Order Progress</h3>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200" />

        <div className="space-y-8">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id)
            const Icon = step.icon

            return (
              <div key={step.id} className="relative flex items-start">
                {/* Step Icon */}
                <div
                  className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    status === "completed"
                      ? "bg-green-500 border-green-500 text-white"
                      : status === "active"
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Step Content */}
                <div className="ml-4 flex-1">
                  <h4
                    className={`font-semibold ${
                      status === "completed" || status === "active" ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      status === "completed" || status === "active" ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </p>
                  {status === "active" && (
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Current Status
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
