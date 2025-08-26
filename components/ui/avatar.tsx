import * as React from "react"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"

interface AvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function Avatar({ src, alt, fallback, size = "md", className }: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  }

  if (src && !imageError) {
    return (
      <div className={cn("relative rounded-full overflow-hidden", sizeClasses[size], className)}>
        <img
          src={src}
          alt={alt || "Avatar"}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-gray-200 text-gray-600",
        sizeClasses[size],
        className
      )}
    >
      {fallback ? (
        <span className="font-medium text-sm">
          {fallback.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <User className={iconSizes[size]} />
      )}
    </div>
  )
}
