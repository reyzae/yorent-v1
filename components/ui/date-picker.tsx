import * as React from "react"
import { cn } from "@/lib/utils"
import { Calendar, ChevronDown } from "lucide-react"
import { Button } from "./button"
import { Calendar as CalendarComponent } from "./calendar"

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date) => void
  placeholder?: string
  className?: string
}

export function DatePicker({ value, onChange, placeholder = "Select date", className }: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value)
  const datePickerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    onChange?.(date)
    setIsOpen(false)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div ref={datePickerRef} className={cn("relative", className)}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span className={selectedDate ? "text-gray-900" : "text-gray-500"}>
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </span>
        </div>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <CalendarComponent
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </div>
      )}
    </div>
  )
}
