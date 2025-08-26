import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./button"
import { Avatar } from "./avatar"

interface NavigationItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface NavigationProps {
  items: NavigationItem[]
  user?: {
    name: string
    email: string
    avatar?: string
  }
  onLogin?: () => void
  onLogout?: () => void
  className?: string
}

export function Navigation({ items, user, onLogin, onLogout, className }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("bg-white border-b border-gray-200", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yorent-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="text-xl font-bold text-gray-900">YORENT</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 text-sm font-medium transition-colors",
                    isActive
                      ? "text-yorent-600"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <Avatar
                  src={user.avatar}
                  fallback={user.name}
                  size="sm"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                </div>
                {onLogout && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onLogout}
                  >
                    Logout
                  </Button>
                )}
              </div>
            ) : (
              onLogin && (
                <Button
                  onClick={onLogin}
                  className="bg-yorent-600 hover:bg-yorent-700"
                >
                  Login
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

// Mobile Navigation
interface MobileNavigationProps extends NavigationProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileNavigation({ items, user, onLogin, onLogout, isOpen, onToggle, className }: MobileNavigationProps) {
  const pathname = usePathname()

  return (
    <div className={cn("md:hidden", className)}>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            {items.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onToggle}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActive
                      ? "bg-yorent-100 text-yorent-600"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center space-x-2">
                    {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>
                </Link>
              )
            })}
            
            {/* User section */}
            {user ? (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center space-x-2 px-3 py-2">
                  <Avatar
                    src={user.avatar}
                    fallback={user.name}
                    size="sm"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                {onLogout && (
                  <button
                    onClick={() => {
                      onLogout()
                      onToggle()
                    }}
                    className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    Logout
                  </button>
                )}
              </div>
            ) : (
              onLogin && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <Button
                    onClick={() => {
                      onLogin()
                      onToggle()
                    }}
                    className="w-full bg-yorent-600 hover:bg-yorent-700"
                  >
                    Login
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
