import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: string
  className?: string
}

export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultOpen || null)

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId)
  }

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-lg">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                openItem === item.id ? "rotate-180" : ""
              )}
            />
          </button>
          {openItem === item.id && (
            <div className="px-4 pb-3 border-t border-gray-100">
              <div className="pt-3">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
