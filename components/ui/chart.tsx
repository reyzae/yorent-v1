import * as React from "react"
import { cn } from "@/lib/utils"

interface ChartData {
  label: string
  value: number
  color?: string
}

interface ChartProps {
  data: ChartData[]
  type?: "bar" | "pie" | "line"
  className?: string
}

export function Chart({ data, type = "bar", className }: ChartProps) {
  const maxValue = Math.max(...data.map(item => item.value))
  const total = data.reduce((sum, item) => sum + item.value, 0)

  if (type === "bar") {
    return (
      <div className={cn("space-y-2", className)}>
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-20 text-sm text-gray-600">{item.label}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-4">
              <div
                className="h-4 rounded-full transition-all duration-300"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color || "#0ea5e9"
                }}
              />
            </div>
            <div className="w-12 text-sm text-gray-600 text-right">{item.value}</div>
          </div>
        ))}
      </div>
    )
  }

  if (type === "pie") {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90">
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100
              const circumference = 2 * Math.PI * 50
              const strokeDasharray = (percentage / 100) * circumference
              const strokeDashoffset = circumference - strokeDasharray
              const rotation = data
                .slice(0, index)
                .reduce((sum, d) => sum + (d.value / total) * 360, 0)

              return (
                <circle
                  key={index}
                  cx="64"
                  cy="64"
                  r="50"
                  fill="none"
                  stroke={item.color || "#0ea5e9"}
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  transform={`rotate(${rotation} 64 64)`}
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-semibold">{total}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
