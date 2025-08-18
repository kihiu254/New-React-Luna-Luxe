export default function PopularHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <a href="/help" className="text-rose-600 hover:text-rose-700 font-medium mb-4 inline-block">
              ← Back to Help Center
            </a>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Popular Help Topics</h1>
            <p className="text-muted-foreground">Find quick answers to the most frequently asked questions</p>
          </div>

          <div className="space-y-6">
            {/* Account & Login */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Account & Login</h2>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">How do I create an account?</h3>
                  <p className="text-muted-foreground text-sm">
                    Click "Sign Up" in the top right corner and fill in your details. You can also sign up with Google
                    or Twitter for faster registration.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">I forgot my password</h3>
                  <p className="text-muted-foreground text-sm">
                    Click "Forgot Password" on the login page and enter your email. We'll send you a reset link within
                    minutes.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Can I change my email address?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, go to your Profile settings and update your email address. You'll need to verify the new email.
                  </p>
                </div>
              </div>
            </div>

            {/* Orders & Checkout */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Orders & Checkout</h2>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">Why do I need to log in to checkout?</h3>
                  <p className="text-muted-foreground text-sm">
                    We require login for secure transactions, order tracking, and to maintain your purchase history for
                    easy reordering.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">Can I modify my order after placing it?</h3>
                  <p className="text-muted-foreground text-sm">
                    Orders can be modified within 1 hour of placement. Contact our support team immediately for
                    assistance.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">What if my payment fails?</h3>
                  <p className="text-muted-foreground text-sm">
                    Check your payment details and try again. For M-Pesa, ensure you have sufficient balance and follow
                    the prompts on your phone.
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Shipping & Delivery</h2>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">How can I track my order?</h3>
                  <p className="text-muted-foreground text-sm">
                    Use our order tracking page with your order number and email, or check your account's order history
                    for real-time updates.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">Do you deliver outside Kenya?</h3>
                  <p className="text-muted-foreground text-sm">
                    Currently, we only deliver within Kenya. International shipping will be available soon.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">What if I'm not home for delivery?</h3>
                  <p className="text-muted-foreground text-sm">
                    Our delivery partner will attempt delivery 3 times and leave a note. You can also arrange pickup
                    from the nearest collection point.
                  </p>
                </div>
              </div>
            </div>

            {/* Products & Sizing */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 text-rose-600">Products & Sizing</h2>
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">How do I find my size?</h3>
                  <p className="text-muted-foreground text-sm">
                    Use our comprehensive size guide with measurements for all clothing categories. When in doubt, size
                    up for comfort.
                  </p>
                </div>
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-1">Are the colors accurate in photos?</h3>
                  <p className="text-muted-foreground text-sm">
                    We strive for color accuracy, but slight variations may occur due to screen settings. Check product
                    descriptions for detailed color information.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">How do I care for African print fabrics?</h3>
                  <p className="text-muted-foreground text-sm">
                    Wash in cold water, avoid bleach, and air dry to preserve colors and patterns. Detailed care
                    instructions are included with each item.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Didn't find what you're looking for?</p>
            <a
              href="/contact"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
