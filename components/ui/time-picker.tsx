import * as React from "react"
import { cn } from "@/lib/utils"
import { Clock, ChevronDown } from "lucide-react"
import { Button } from "./button"

interface TimePickerProps {
  value?: string
  onChange?: (time: string) => void
  placeholder?: string
  className?: string
}

export function TimePicker({ value, onChange, placeholder = "Select time", className }: TimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(value)
  const timePickerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timePickerRef.current && !timePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    onChange?.(time)
    setIsOpen(false)
  }

  const generateTimeOptions = () => {
    const times = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        times.push(timeString)
      }
    }
    return times
  }

  const timeOptions = generateTimeOptions()

  return (
    <div ref={timePickerRef} className={cn("relative", className)}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span className={selectedTime ? "text-gray-900" : "text-gray-500"}>
            {selectedTime || placeholder}
          </span>
        </div>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 z-50 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              className={cn(
                "w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors",
                selectedTime === time ? "bg-yorent-100 text-yorent-600" : "text-gray-700"
              )}
            >
              {time}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
