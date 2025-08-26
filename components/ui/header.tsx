import * as React from "react"
import { cn } from "@/lib/utils"
import { Menu, Bell, User, Search } from "lucide-react"
import { Button } from "./button"
import { Avatar } from "./avatar"
import { Search as SearchComponent } from "./search"

interface HeaderProps {
  title?: string
  subtitle?: string
  onMenuClick?: () => void
  showSearch?: boolean
  searchValue?: string
  onSearchChange?: (value: string) => void
  onSearch?: (value: string) => void
  user?: {
    name: string
    email: string
    avatar?: string
  }
  notifications?: number
  onNotificationClick?: () => void
  className?: string
}

export function Header({
  title,
  subtitle,
  onMenuClick,
  showSearch = false,
  searchValue = "",
  onSearchChange,
  onSearch,
  user,
  notifications = 0,
  onNotificationClick,
  className
}: HeaderProps) {
  return (
    <header className={cn("bg-white border-b border-gray-200 px-4 py-3", className)}>
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          )}
          
          <div>
            {title && (
              <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            )}
            {subtitle && (
              <p className="text-sm text-gray-600">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Center - Search */}
        {showSearch && onSearchChange && (
          <div className="flex-1 max-w-md mx-4">
            <SearchComponent
              value={searchValue}
              onChange={onSearchChange}
              onSearch={onSearch}
              placeholder="Search..."
            />
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center space-x-2">
          {/* Notifications */}
          {onNotificationClick && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onNotificationClick}
              className="relative"
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications > 99 ? "99+" : notifications}
                </span>
              )}
            </Button>
          )}

          {/* User menu */}
          {user && (
            <div className="flex items-center space-x-2">
              <Avatar
                src={user.avatar}
                fallback={user.name}
                size="sm"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
