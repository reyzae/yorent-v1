import * as React from "react"
import { cn } from "@/lib/utils"
import { MapPin } from "lucide-react"

interface MapProps {
  address: string
  className?: string
}

export function Map({ address, className }: MapProps) {
  // This is a placeholder component
  // In a real application, you would integrate with Google Maps, Mapbox, or similar
  return (
    <div className={cn("w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center", className)}>
      <div className="text-center">
        <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-gray-600">{address}</p>
        <p className="text-sm text-gray-500 mt-1">Map integration required</p>
      </div>
    </div>
  )
}

// Example usage with Google Maps (requires API key)
export function GoogleMap({ address, className }: MapProps) {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`
  
  return (
    <div className={cn("w-full h-64 rounded-lg overflow-hidden", className)}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
