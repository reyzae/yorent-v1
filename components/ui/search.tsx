import * as React from "react"
import { cn } from "@/lib/utils"
import { Search as SearchIcon, X } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"

interface SearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  onSearch?: (value: string) => void
  className?: string
}

export function Search({ value, onChange, placeholder = "Search...", onSearch, className }: SearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(value)
  }

  const clearSearch = () => {
    onChange("")
  }

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="pl-10 pr-10"
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </form>
  )
}

interface SearchResult {
  id: string
  title: string
  description?: string
  url?: string
}

interface SearchWithResultsProps extends SearchProps {
  results: SearchResult[]
  onResultClick?: (result: SearchResult) => void
  isLoading?: boolean
}

export function SearchWithResults({ 
  value, 
  onChange, 
  results, 
  onResultClick, 
  isLoading, 
  ...props 
}: SearchWithResultsProps) {
  const [showResults, setShowResults] = React.useState(false)

  React.useEffect(() => {
    setShowResults(value.length > 0 && (results.length > 0 || isLoading))
  }, [value, results, isLoading])

  return (
    <div className="relative">
      <Search
        value={value}
        onChange={onChange}
        {...props}
      />
      
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => {
                    onResultClick?.(result)
                    setShowResults(false)
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium text-gray-900">{result.title}</div>
                  {result.description && (
                    <div className="text-sm text-gray-500 mt-1">
                      {result.description}
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
