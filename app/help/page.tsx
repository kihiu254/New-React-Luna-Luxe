export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to your questions and get the support you need for your LunaLuxe shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Popular Help Topics */}
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Popular Help Topics</h3>
              <p className="text-muted-foreground mb-4">Quick answers to the most common questions</p>
              <a href="/help/popular" className="text-rose-600 hover:text-rose-700 font-medium">
                Browse Topics →
              </a>
            </div>

            {/* Order Status */}
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Status</h3>
              <p className="text-muted-foreground mb-4">Track your orders and delivery updates</p>
              <a href="/order-tracking" className="text-rose-600 hover:text-rose-700 font-medium">
                Track Order →
              </a>
            </div>

            {/* Returns & Exchanges */}
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Returns & Exchanges</h3>
              <p className="text-muted-foreground mb-4">Learn about our return and exchange policy</p>
              <a href="/help/returns" className="text-rose-600 hover:text-rose-700 font-medium">
                View Policy →
              </a>
            </div>

            {/* Payment Issues */}
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Payment Issues</h3>
              <p className="text-muted-foreground mb-4">Get help with payment and billing inquiries</p>
              <a href="/help/payment" className="text-rose-600 hover:text-rose-700 font-medium">
                Get Help →
              </a>
            </div>

            {/* Shipping Information */}
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
              <p className="text-muted-foreground mb-4">Delivery options, costs, and timeframes</p>
              <a href="/shipping" className="text-rose-600 hover:text-rose-700 font-medium">
                Learn More →
              </a>
            </div>

            {/* Size Guide */}
            <div className="bg-card rounded-lg border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-4 4H9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Size Guide</h3>
              <p className="text-muted-foreground mb-4">Find your perfect fit with our sizing charts</p>
              <a href="/size-guide" className="text-rose-600 hover:text-rose-700 font-medium">
                View Guide →
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-card rounded-lg border p-8">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">General FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">How do I place an order?</h3>
                <p className="text-muted-foreground mb-4">
                  Browse our collections, add items to your cart, and proceed to checkout. You'll need to create an
                  account or log in to complete your purchase.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground mb-4">
                  We accept M-Pesa, Visa, Mastercard, and other major credit/debit cards for secure online payments.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How long does delivery take?</h3>
                <p className="text-muted-foreground mb-4">
                  Standard delivery takes 3-5 business days within Kenya. Express delivery is available for next-day
                  delivery in Nairobi.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I return or exchange items?</h3>
                <p className="text-muted-foreground mb-4">
                  Yes, we offer 30-day returns and exchanges for unworn items in original condition with tags attached.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/help/faq" className="text-rose-600 hover:text-rose-700 font-medium">
                View All FAQs →
              </a>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6">Our customer service team is here to assist you</p>
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
