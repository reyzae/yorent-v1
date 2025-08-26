import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface GalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  columns?: 1 | 2 | 3 | 4
  gap?: "sm" | "md" | "lg"
  className?: string
}

export function Gallery({ images, columns = 3, gap = "md", className }: GalleryProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6"
  }

  return (
    <div className={cn("grid", columnClasses[columns], gapClasses[gap], className)}>
      {images.map((image, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
