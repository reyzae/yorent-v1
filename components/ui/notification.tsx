import * as React from "react"
import { cn } from "@/lib/utils"
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react"

interface NotificationProps {
  type?: "success" | "error" | "warning" | "info"
  title?: string
  message: string
  onClose?: () => void
  className?: string
}

const notificationIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info
}

const notificationStyles = {
  success: "bg-green-50 border-green-200 text-green-800",
  error: "bg-red-50 border-red-200 text-red-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  info: "bg-blue-50 border-blue-200 text-blue-800"
}

export function Notification({ type = "info", title, message, onClose, className }: NotificationProps) {
  const Icon = notificationIcons[type]

  return (
    <div
      className={cn(
        "border rounded-lg p-4 flex items-start space-x-3",
        notificationStyles[type],
        className
      )}
    >
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-medium mb-1">{title}</h4>
        )}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
