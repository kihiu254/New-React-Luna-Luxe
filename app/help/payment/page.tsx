export default function PaymentHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <a href="/help" className="text-rose-600 hover:text-rose-700 font-medium mb-4 inline-block">
              ← Back to Help Center
            </a>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Payment Issues</h1>
            <p className="text-muted-foreground">Get help with payment and billing inquiries</p>
          </div>

          <div className="space-y-8">
            {/* Accepted Payment Methods */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Accepted Payment Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">M-PESA</span>
                  </div>
                  <div>
                    <h3 className="font-medium">M-Pesa</h3>
                    <p className="text-muted-foreground text-sm">Secure mobile money payments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Credit/Debit Cards</h3>
                    <p className="text-muted-foreground text-sm">Visa, Mastercard, and more</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Payment Issues */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Common Payment Issues</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Payment Declined</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    If your payment is declined, try these solutions:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Check that your card details are entered correctly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Ensure you have sufficient funds or credit limit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Verify your card is enabled for online transactions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Contact your bank if the issue persists</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">M-Pesa Payment Issues</h3>
                  <p className="text-muted-foreground text-sm mb-3">For M-Pesa payment problems:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Ensure your M-Pesa balance is sufficient</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Check that your phone number is correct</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Complete the transaction on your phone within 3 minutes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Ensure you have network connectivity</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Payment Processing Delays</h3>
                  <p className="text-muted-foreground text-sm mb-3">Payment processing times:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>M-Pesa: Instant to 5 minutes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Credit/Debit Cards: Instant to 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Bank transfers: 1-3 business days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security & Safety */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Payment Security</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">SSL Encryption</h3>
                    <p className="text-muted-foreground text-sm">
                      All payment data is encrypted using industry-standard SSL technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">PCI Compliance</h3>
                    <p className="text-muted-foreground text-sm">
                      We follow PCI DSS standards for secure payment processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">No Card Storage</h3>
                    <p className="text-muted-foreground text-sm">We don't store your card details on our servers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refunds & Billing */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Refunds & Billing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Refund Processing Times</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>M-Pesa: 1-3 business days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Credit/Debit Cards: 5-10 business days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-rose-600">•</span>
                      <span>Bank transfers: 3-7 business days</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Billing Questions</h3>
                  <p className="text-muted-foreground text-sm">
                    If you see an unexpected charge or have billing questions, contact our support team with your order
                    number and payment details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still having payment issues?</p>
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
