import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Luna Luxe",
  description: "Terms and conditions for Luna Luxe fashion boutique",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Luna Luxe Terms and Conditions</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Luna Luxe</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions ("Terms") govern your access to and use of our website, including any
                subdomains, mobile applications, and related services provided by Luna Luxe ("we," "us," or "our"). By
                accessing or using our website, you agree to comply with and be bound by these Terms. If you do not
                agree to these Terms, you may not access or use the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Registration</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-800">Eligibility:</strong>{" "}
                  <span className="text-gray-600">
                    You must be at least 18 years old or the legal age of majority in your jurisdiction to register an
                    account.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Account Creation:</strong>{" "}
                  <span className="text-gray-600">
                    You may create an account by providing accurate and complete information. You are responsible for
                    maintaining the confidentiality of your account credentials.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Account Security:</strong>{" "}
                  <span className="text-gray-600">
                    You are responsible for all activities that occur under your account. Notify us immediately of any
                    unauthorized use.
                  </span>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products and Services</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-800">Product Information:</strong>{" "}
                  <span className="text-gray-600">
                    We strive to provide accurate and complete product descriptions. However, product images and
                    descriptions are for illustrative purposes only.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Availability:</strong>{" "}
                  <span className="text-gray-600">
                    Products are available while stocks last. We reserve the right to limit quantities sold to
                    individual customers.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Prices:</strong>{" "}
                  <span className="text-gray-600">
                    All prices are in Kenyan Shillings (KSh) and inclusive of applicable taxes unless stated otherwise.
                    Prices are subject to change without notice.
                  </span>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders and Payments</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-800">Order Placement:</strong>{" "}
                  <span className="text-gray-600">
                    Submitting an order constitutes a binding offer to purchase. We reserve the right to accept or
                    decline any order.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Payment Methods:</strong>{" "}
                  <span className="text-gray-600">
                    We accept major credit/debit cards, mobile payment, and bank transfers. You warrant that you are
                    legally authorized to use the payment method selected.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Payment Security:</strong>{" "}
                  <span className="text-gray-600">
                    All payment transactions are processed through secure payment gateways. We do not store your payment
                    details on our servers.
                  </span>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery and Shipping</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-800">Shipping:</strong>{" "}
                  <span className="text-gray-600">
                    We deliver throughout Kenya. Shipping costs and estimated delivery times are provided during the
                    checkout process.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Delivery Address:</strong>{" "}
                  <span className="text-gray-600">
                    It is your responsibility to provide accurate delivery information. We are not liable for delivery
                    delays due to incorrect information.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Tracking:</strong>{" "}
                  <span className="text-gray-600">
                    You will receive a tracking number via email once your order is shipped.
                  </span>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns and Refunds</h2>
              <div className="space-y-4">
                <p>
                  <strong className="text-gray-800">Return Policy:</strong>{" "}
                  <span className="text-gray-600">
                    You may return items within 30 days of delivery for a full refund, provided they are in their
                    original condition with all tags attached.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Exclusions:</strong>{" "}
                  <span className="text-gray-600">
                    Custom-made items, personalized products, and items marked as "final sale" are non-returnable.
                  </span>
                </p>
                <p>
                  <strong className="text-gray-800">Refund Processing:</strong>{" "}
                  <span className="text-gray-600">
                    Refunds will be processed to the original payment method within 7-10 business days of receiving the
                    returned item.
                  </span>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600">For inquiries, contact our customer service team at:</p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">Email: customer.service@lunaluxe.com</p>
                <p className="text-gray-600">Phone: +254 11208186</p>
                <p className="text-gray-600">Address: Luna Luxe Fashion House, Nairobi, Kenya</p>
              </div>
            </section>

            <div className="bg-rose-50 p-6 rounded-lg mt-8">
              <p className="text-gray-700 font-medium">
                By using our website, you acknowledge that you have read, understood, and agreed to these Terms and
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
