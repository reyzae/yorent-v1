import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps {
  value: number
  max?: number
  className?: string
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

export function Progress({ value, max = 100, className, showLabel = false, size = "md" }: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100)

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3"
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-1">
        {showLabel && (
          <span className="text-sm font-medium text-gray-700">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div
        className={cn(
          "w-full bg-gray-200 rounded-full overflow-hidden",
          sizeClasses[size]
        )}
      >
        <div
          className={cn(
            "bg-yorent-600 transition-all duration-300 ease-in-out",
            sizeClasses[size]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
