import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface DropdownItem {
  id: string
  label: string
  onClick: () => void
  disabled?: boolean
}

interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  className?: string
}

export function Dropdown({ trigger, items, className }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled) {
      item.onClick()
      setIsOpen(false)
    }
  }

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
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
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
              className={cn(
                "w-full px-3 py-2 text-left text-sm hover:bg-gray-50 transition-colors first:rounded-t-md last:rounded-b-md",
                item.disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
