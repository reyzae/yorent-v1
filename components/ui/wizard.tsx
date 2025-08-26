import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Stepper } from "./stepper"

interface WizardStep {
  id: string
  title: string
  description?: string
  content: React.ReactNode
  validation?: () => boolean | Promise<boolean>
}

interface WizardProps {
  steps: WizardStep[]
  onComplete?: (data: any) => void
  onCancel?: () => void
  className?: string
}

export function Wizard({ steps, onComplete, onCancel, className }: WizardProps) {
  const [currentStep, setCurrentStep] = React.useState(0)
  const [formData, setFormData] = React.useState<any>({})
  const [isLoading, setIsLoading] = React.useState(false)

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1
  const currentStepData = steps[currentStep]

  const updateFormData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
  }

  const goToNext = async () => {
    if (currentStepData.validation) {
      setIsLoading(true)
      try {
        const isValid = await currentStepData.validation()
        if (!isValid) {
          setIsLoading(false)
          return
        }
      } catch (error) {
        console.error('Validation error:', error)
        setIsLoading(false)
        return
      }
      setIsLoading(false)
    }

    if (isLastStep) {
      onComplete?.(formData)
    } else {
      setCurrentStep((prev: number) => prev + 1)
    }
  }

  const goToPrevious = () => {
    setCurrentStep((prev: number) => prev - 1)
  }

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
  }

  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      {/* Stepper */}
      <div className="mb-8">
        <Stepper
          steps={steps.map((step, index) => ({
            id: step.id,
            title: step.title,
            description: step.description
          }))}
          currentStep={currentStep}
          onStepClick={goToStep}
        />
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {currentStepData.title}
          </h2>
          {currentStepData.description && (
            <p className="text-gray-600">{currentStepData.description}</p>
          )}
        </div>

        <div className="mb-6">
          {React.cloneElement(currentStepData.content as React.ReactElement, {
            data: formData,
            updateData: updateFormData
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <div>
            {!isFirstStep && (
              <Button
                variant="outline"
                onClick={goToPrevious}
                disabled={isLoading}
              >
                Previous
              </Button>
            )}
          </div>
          
          <div className="flex space-x-2">
            {onCancel && (
              <Button
                variant="outline"
                onClick={onCancel}
                disabled={isLoading}
              >
                Cancel
              </Button>
            )}
            <Button
              onClick={goToNext}
              disabled={isLoading}
              className="bg-yorent-600 hover:bg-yorent-700"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Validating...</span>
                </div>
              ) : isLastStep ? (
                "Complete"
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
