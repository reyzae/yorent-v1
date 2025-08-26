import * as React from "react"
import { cn } from "@/lib/utils"
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react"

interface ToastProps {
  type?: "success" | "error" | "warning" | "info"
  title?: string
  message: string
  onClose?: () => void
  duration?: number
  className?: string
}

const toastIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info
}

const toastStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-white",
  info: "bg-blue-500 text-white"
}

export function Toast({ type = "info", title, message, onClose, duration = 5000, className }: ToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const Icon = toastIcons[type]

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose?.()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 max-w-sm w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4",
        className
      )}
    >
      <div className="flex items-start space-x-3">
        <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", toastStyles[type])} />
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
          )}
          <p className="text-sm text-gray-600">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={() => {
              setIsVisible(false)
              onClose()
            }}
            className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>
    </div>
  )
}
