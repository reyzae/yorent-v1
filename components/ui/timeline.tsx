import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineItem {
  id: string
  title: string
  description?: string
  date?: string
  status?: "completed" | "current" | "upcoming"
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isCompleted = item.status === "completed"
        const isCurrent = item.status === "current"
        const isUpcoming = item.status === "upcoming"

        return (
          <div key={item.id} className="flex items-start space-x-4">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-3 h-3 rounded-full border-2",
                  isCompleted
                    ? "bg-yorent-600 border-yorent-600"
                    : isCurrent
                    ? "bg-white border-yorent-600"
                    : "bg-gray-200 border-gray-300"
                )}
              />
              {index < items.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 h-8 mt-2",
                    isCompleted ? "bg-yorent-600" : "bg-gray-200"
                  )}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-4">
              <div className="flex items-center justify-between">
                <h4
                  className={cn(
                    "text-sm font-medium",
                    isCompleted || isCurrent ? "text-gray-900" : "text-gray-500"
                  )}
                >
                  {item.title}
                </h4>
                {item.date && (
                  <span className="text-xs text-gray-500">{item.date}</span>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
