import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
  label?: string
  name?: string
  value?: string
}

export function Radio({ checked, onCheckedChange, disabled = false, className, label, name, value }: RadioProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "border-yorent-600" : "hover:border-gray-400",
          className
        )}
      >
        {checked && (
          <div className="h-2 w-2 rounded-full bg-yorent-600" />
        )}
      </button>
      {label && (
        <span className="text-sm text-gray-700">{label}</span>
      )}
    </label>
  )
}
