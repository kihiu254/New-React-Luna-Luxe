export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <a href="/help" className="text-rose-600 hover:text-rose-700 font-medium mb-4 inline-block">
              ← Back to Help Center
            </a>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Returns & Exchanges</h1>
            <p className="text-muted-foreground">Our hassle-free return and exchange policy</p>
          </div>

          <div className="space-y-8">
            {/* Return Policy Overview */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Return Policy Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600 mb-1">30</div>
                  <div className="text-sm text-muted-foreground">Days to Return</div>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600 mb-1">FREE</div>
                  <div className="text-sm text-muted-foreground">Return Shipping</div>
                </div>
                <div className="text-center p-4 bg-rose-50 rounded-lg">
                  <div className="text-2xl font-bold text-rose-600 mb-1">24H</div>
                  <div className="text-sm text-muted-foreground">Processing Time</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                We want you to love your LunaLuxe purchase. If you're not completely satisfied, you can return or
                exchange your items within 30 days of delivery for a full refund or store credit.
              </p>
            </div>

            {/* Return Conditions */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Return Conditions</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">Items must be unworn and in original condition</h3>
                    <p className="text-muted-foreground text-sm">
                      All tags must be attached and items should be in the same condition as received
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">Original packaging required</h3>
                    <p className="text-muted-foreground text-sm">
                      Please return items in their original packaging when possible
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">Proof of purchase needed</h3>
                    <p className="text-muted-foreground text-sm">
                      Order confirmation email or receipt required for all returns
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Return */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">How to Return Items</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Initiate Return Request</h3>
                    <p className="text-muted-foreground text-sm">
                      Contact our customer service or use your account dashboard to start a return request
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Receive Return Label</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll email you a prepaid return shipping label within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Package & Ship</h3>
                    <p className="text-muted-foreground text-sm">
                      Pack items securely, attach the return label, and drop off at any courier location
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Receive Refund</h3>
                    <p className="text-muted-foreground text-sm">
                      Once we receive and inspect your return, we'll process your refund within 3-5 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchange Policy */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Exchange Policy</h2>
              <p className="text-muted-foreground mb-4">
                Need a different size or color? We offer free exchanges within 30 days of delivery.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Same item, different size or color</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Subject to availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Free shipping both ways</span>
                </div>
              </div>
            </div>

            {/* Non-Returnable Items */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Non-Returnable Items</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Intimate apparel and undergarments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Custom or personalized items</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Items damaged by normal wear</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Sale items marked as final sale</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need help with a return or exchange?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:1kihiupaul@gmail.com"
                className="border border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
