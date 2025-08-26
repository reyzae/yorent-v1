import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface CollapsibleProps {
  trigger: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  className?: string
}

export function Collapsible({ trigger, children, defaultOpen = false, className }: CollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div className={cn("border border-gray-200 rounded-lg", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        {trigger}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-3 border-t border-gray-100">
          <div className="pt-3">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
