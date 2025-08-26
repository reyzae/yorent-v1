import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface CheckboxProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
  label?: string
}

export function Checkbox({ checked, onCheckedChange, disabled = false, className, label }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "h-4 w-4 rounded border border-gray-300 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          checked ? "bg-yorent-600 border-yorent-600" : "bg-white hover:bg-gray-50",
          className
        )}
      >
        {checked && <Check className="h-3 w-3 text-white" />}
      </button>
      {label && (
        <span className="text-sm text-gray-700">{label}</span>
      )}
    </label>
  )
}
