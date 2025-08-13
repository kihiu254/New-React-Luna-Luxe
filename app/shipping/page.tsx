import type { Metadata } from "next"
import { Truck, Clock, MapPin, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Shipping Information | Luna Luxe",
  description: "Learn about our shipping options, delivery times, and tracking information",
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Shipping Information</h1>
            <p className="text-xl text-gray-600">Fast, reliable delivery across Kenya and beyond</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Standard Shipping */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Truck className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Standard Shipping</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  3-5 business days within Kenya
                </p>
                <p className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Free on orders over KES 5,000
                </p>
                <p className="text-lg font-semibold text-rose-600">KES 300</p>
              </div>
            </div>

            {/* Express Shipping */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Package className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Express Shipping</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Next-day delivery in Nairobi
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  2-3 days for other regions
                </p>
                <p className="text-lg font-semibold text-amber-600">KES 500</p>
              </div>
            </div>

            {/* International Shipping */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">International</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  7-14 business days
                </p>
                <p className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Calculated at checkout
                </p>
                <p className="text-sm text-gray-500">Customs duties may apply</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tracking Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Tracking Your Order</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Once your order is shipped, you will receive a confirmation email with a tracking number. You can
                  track your order:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                    <span>Through your Luna Luxe account dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                    <span>
                      Using our{" "}
                      <a href="/order-tracking" className="text-rose-600 hover:underline">
                        Order Tracking
                      </a>{" "}
                      page
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                    <span>Via the tracking link in your shipping confirmation email</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Important Information</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>Orders are processed within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>Delivery times start from when your order ships</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>We deliver Monday through Saturday</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>Contact our support team for special delivery requests</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white rounded-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4 font-serif">Need Help with Shipping?</h2>
            <p className="text-lg opacity-90 mb-6">
              Our customer service team is here to assist you with any shipping questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/order-tracking"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors"
              >
                Track Your Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
