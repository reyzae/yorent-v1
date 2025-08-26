import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface StepperStep {
  id: string
  title: string
  description?: string
}

interface StepperProps {
  steps: StepperStep[]
  currentStep: number
  onStepClick?: (stepIndex: number) => void
  className?: string
}

export function Stepper({ steps, currentStep, onStepClick, className }: StepperProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep
        const isUpcoming = index > currentStep

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => onStepClick?.(index)}
                disabled={!onStepClick}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  isCompleted
                    ? "bg-yorent-600 text-white"
                    : isCurrent
                    ? "bg-yorent-100 text-yorent-600 border-2 border-yorent-600"
                    : "bg-gray-200 text-gray-500",
                  onStepClick && "cursor-pointer hover:bg-yorent-100"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </button>
              <div className="mt-2 text-center">
                <div
                  className={cn(
                    "text-sm font-medium",
                    isCompleted || isCurrent ? "text-gray-900" : "text-gray-500"
                  )}
                >
                  {step.title}
                </div>
                {step.description && (
                  <div className="text-xs text-gray-500 mt-1">
                    {step.description}
                  </div>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-4",
                  isCompleted ? "bg-yorent-600" : "bg-gray-200"
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
