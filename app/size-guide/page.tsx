import type { Metadata } from "next"
import { Ruler, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Size Guide | Luna Luxe",
  description: "Find your perfect fit with our comprehensive size guide and measurement instructions",
}

export default function SizeGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Size Guide</h1>
            <p className="text-xl text-gray-600">Find your perfect fit with our comprehensive measurement guide</p>
          </div>

          {/* How to Measure */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-100 p-3 rounded-full">
                <Ruler className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 font-serif">How to Measure</h2>
            </div>

            <p className="text-gray-600 mb-6">
              For the best fit, take your measurements over undergarments similar to those you'll be wearing with your
              garment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Measurements</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Bust:</strong> Measure around the fullest part of your bust
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Waist:</strong> Measure around your natural waistline
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Hips:</strong> Measure around the fullest part of your hips
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-rose-600 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-800">Inseam:</strong> Measure from your crotch to your desired pant
                      length
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Measurement Tips</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Use a flexible measuring tape</li>
                  <li>• Keep the tape snug but not tight</li>
                  <li>• Stand straight with arms at your sides</li>
                  <li>• Have someone help you for accuracy</li>
                  <li>• Measure over your undergarments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Size Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Women's Size Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Women's Apparel</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Size</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Bust (cm)</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Waist (cm)</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Hips (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "XS", bust: "81-86", waist: "61-66", hips: "86-91" },
                      { size: "S", bust: "86-91", waist: "66-71", hips: "91-96" },
                      { size: "M", bust: "91-96", waist: "71-76", hips: "96-101" },
                      { size: "L", bust: "96-101", waist: "76-81", hips: "101-106" },
                      { size: "XL", bust: "101-106", waist: "81-86", hips: "106-111" },
                    ].map((row, index) => (
                      <tr key={row.size} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-2 font-medium text-rose-600">{row.size}</td>
                        <td className="py-3 px-2 text-gray-600">{row.bust}</td>
                        <td className="py-3 px-2 text-gray-600">{row.waist}</td>
                        <td className="py-3 px-2 text-gray-600">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Men's Size Chart */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Men's Apparel</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Size</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Chest (cm)</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Waist (cm)</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Hips (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "XS", chest: "86-91", waist: "71-76", hips: "86-91" },
                      { size: "S", chest: "91-96", waist: "76-81", hips: "91-96" },
                      { size: "M", chest: "96-101", waist: "81-86", hips: "96-101" },
                      { size: "L", chest: "101-106", waist: "86-91", hips: "101-106" },
                      { size: "XL", chest: "106-111", waist: "91-96", hips: "106-111" },
                    ].map((row, index) => (
                      <tr key={row.size} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-2 font-medium text-amber-600">{row.size}</td>
                        <td className="py-3 px-2 text-gray-600">{row.chest}</td>
                        <td className="py-3 px-2 text-gray-600">{row.waist}</td>
                        <td className="py-3 px-2 text-gray-600">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Fit Tips */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-serif">Fit Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>If you're between sizes, order the larger size for a more comfortable fit</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>Consider the fabric and style when choosing your size</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>Check individual product descriptions for specific fit recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span>Remember that different brands may have slight variations in sizing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8" />
              <h2 className="text-2xl font-bold font-serif">Need Help?</h2>
            </div>
            <p className="text-lg opacity-90 mb-6">Our style experts are here to help you find your perfect fit.</p>
            <a
              href="/customer-service"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Style Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
