interface CheckoutStepsProps {
  currentStep: number
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const steps = [
    { number: 1, title: "Customer Details" },
    { number: 2, title: "Payment" },
    { number: 3, title: "Confirmation" },
  ]

  return (
    <div className="flex items-center justify-center space-x-4">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-semibold ${
              currentStep >= step.number
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-400 border-gray-300"
            }`}
          >
            {step.number}
          </div>
          <span className={`ml-2 font-medium ${currentStep >= step.number ? "text-gray-900" : "text-gray-400"}`}>
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className={`mx-4 h-0.5 w-12 ${currentStep > step.number ? "bg-gray-900" : "bg-gray-300"}`} />
          )}
        </div>
      ))}
    </div>
  )
}
