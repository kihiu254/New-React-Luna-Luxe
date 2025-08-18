export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <a href="/help" className="text-rose-600 hover:text-rose-700 font-medium mb-4 inline-block">
              ← Back to Help Center
            </a>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Find answers to common questions about LunaLuxe</p>
          </div>

          <div className="space-y-6">
            {/* General Questions */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">General Questions</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    What is LunaLuxe?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    LunaLuxe is a premium African fashion boutique specializing in contemporary and traditional African
                    clothing, accessories, and footwear. We celebrate African heritage through modern, high-quality
                    fashion pieces.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Do you have physical stores?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Currently, LunaLuxe operates as an online-only boutique. However, we're planning to open physical
                    showrooms in major cities across Kenya in the near future.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Are your products authentic African designs?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Yes, all our African print fabrics are authentic and sourced directly from African textile
                    manufacturers. We work with local artisans and designers to create unique, culturally-inspired
                    pieces.
                  </p>
                </details>
              </div>
            </div>

            {/* Shopping & Orders */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Shopping & Orders</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    How do I place an order?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Browse our collections, add items to your cart, and proceed to checkout. You'll need to create an
                    account or log in to complete your purchase. Follow the checkout steps to enter your details and
                    payment information.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Can I modify or cancel my order?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Orders can be modified or cancelled within 1 hour of placement. After this time, orders enter
                    processing and cannot be changed. Contact our support team immediately if you need to make changes.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Do you offer gift wrapping?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Yes, we offer complimentary gift wrapping for all orders. Select the gift wrapping option during
                    checkout and add a personalized message for the recipient.
                  </p>
                </details>
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Shipping & Delivery</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    What are your shipping options?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    We offer standard delivery (3-5 business days) for KSh 200 and express delivery (next day in
                    Nairobi, 2 days elsewhere) for KSh 500. Free shipping on orders over KSh 3,000.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    How can I track my order?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    You'll receive a tracking number via email once your order ships. Use our order tracking page or
                    check your account dashboard for real-time updates on your delivery status.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Do you deliver outside Kenya?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Currently, we only deliver within Kenya. We're working on expanding our delivery network to other
                    East African countries. International shipping will be available soon.
                  </p>
                </details>
              </div>
            </div>

            {/* Returns & Exchanges */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Returns & Exchanges</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    What is your return policy?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    We offer 30-day returns for unworn items in original condition with tags attached. Returns are free
                    and refunds are processed within 3-5 business days of receiving the returned items.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    How do I exchange an item for a different size?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Contact our support team to initiate an exchange. We'll send you a prepaid return label and ship the
                    new size once we receive your return. Exchanges are subject to availability.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Can I return sale items?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Most sale items can be returned within 30 days, except those marked as "Final Sale." Check the
                    product page for specific return eligibility before purchasing.
                  </p>
                </details>
              </div>
            </div>

            {/* Account & Technical */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Account & Technical</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Why do I need to create an account?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    An account allows you to track orders, save your preferences, maintain a wishlist, and access
                    exclusive member benefits. It also ensures secure checkout and order history.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    Is my personal information secure?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Yes, we use industry-standard SSL encryption to protect your data. We never share your personal
                    information with third parties and follow strict privacy policies to keep your data safe.
                  </p>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium py-2">
                    The website is not loading properly. What should I do?
                    <span className="transition-transform group-open:rotate-180">↓</span>
                  </summary>
                  <p className="text-muted-foreground text-sm mt-2 pl-4">
                    Try clearing your browser cache, disabling ad blockers, or using a different browser. If the problem
                    persists, contact our technical support team for assistance.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
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
