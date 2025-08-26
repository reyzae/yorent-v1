import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { Button } from "./button"

interface SidebarItem {
  id: string
  label: string
  href?: string
  icon?: React.ReactNode
  children?: SidebarItem[]
}

interface SidebarProps {
  items: SidebarItem[]
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function Sidebar({ items, isOpen, onClose, className }: SidebarProps) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const renderItem = (item: SidebarItem) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.has(item.id)

    return (
      <div key={item.id}>
        <div className="flex items-center justify-between">
          {item.href ? (
            <a
              href={item.href}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex-1"
            >
              {item.icon && <span className="w-4 h-4">{item.icon}</span>}
              <span>{item.label}</span>
            </a>
          ) : (
            <button
              onClick={() => hasChildren ? toggleItem(item.id) : undefined}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex-1"
            >
              {item.icon && <span className="w-4 h-4">{item.icon}</span>}
              <span>{item.label}</span>
            </button>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-6 mt-1 space-y-1">
            {item.children!.map(renderItem)}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:relative lg:translate-x-0 lg:z-auto",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {items.map(renderItem)}
        </nav>
      </div>
    </>
  )
}
