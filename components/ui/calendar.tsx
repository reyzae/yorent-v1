import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"

interface CalendarProps {
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
  className?: string
}

export function Calendar({ selectedDate, onDateSelect, className }: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(selectedDate || new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    onDateSelect?.(newDate)
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate)
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className={cn("w-full max-w-sm", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousMonth}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <h2 className="text-lg font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextMonth}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startingDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="h-10" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
          const isSelected = selectedDate && 
            date.toDateString() === selectedDate.toDateString()
          const isToday = date.toDateString() === new Date().toDateString()

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={cn(
                "h-10 rounded-md text-sm font-medium transition-colors",
                isSelected
                  ? "bg-yorent-600 text-white"
                  : isToday
                  ? "bg-yorent-100 text-yorent-600"
                  : "hover:bg-gray-100 text-gray-700"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
