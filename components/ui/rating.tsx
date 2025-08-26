import * as React from "react"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface RatingProps {
  value: number
  max?: number
  onChange?: (value: number) => void
  readonly?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Rating({ value, max = 5, onChange, readonly = false, size = "md", className }: RatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= value
        const isHalf = !isFilled && starValue - 0.5 <= value

        return (
          <button
            key={index}
            type="button"
            disabled={readonly}
            onClick={() => onChange?.(starValue)}
            className={cn(
              "transition-colors",
              !readonly && "hover:scale-110",
              readonly ? "cursor-default" : "cursor-pointer"
            )}
          >
            <Star
              className={cn(
                sizeClasses[size],
                isFilled
                  ? "fill-yellow-400 text-yellow-400"
                  : isHalf
                  ? "fill-yellow-400/50 text-yellow-400"
                  : "text-gray-300"
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
