'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'

const categories = [
  { id: 'SEDAN', label: 'Sedan', count: 8 },
  { id: 'SUV', label: 'SUV', count: 12 },
  { id: 'MPV', label: 'MPV', count: 15 },
  { id: 'HATCHBACK', label: 'Hatchback', count: 6 },
  { id: 'PICKUP', label: 'Pickup', count: 4 },
  { id: 'VAN', label: 'Van', count: 3 },
  { id: 'LUXURY', label: 'Luxury', count: 5 },
  { id: 'SPORTS', label: 'Sports', count: 2 }
]

const fuelTypes = [
  { id: 'PETROL', label: 'Bensin', count: 25 },
  { id: 'DIESEL', label: 'Diesel', count: 8 },
  { id: 'ELECTRIC', label: 'Listrik', count: 3 },
  { id: 'HYBRID', label: 'Hybrid', count: 4 }
]

const transmissions = [
  { id: 'AUTOMATIC', label: 'Automatic', count: 30 },
  { id: 'MANUAL', label: 'Manual', count: 10 }
]

const priceRanges = [
  { id: '0-200000', label: 'Dibawah Rp 200.000', min: 0, max: 200000 },
  { id: '200000-400000', label: 'Rp 200.000 - Rp 400.000', min: 200000, max: 400000 },
  { id: '400000-600000', label: 'Rp 400.000 - Rp 600.000', min: 400000, max: 600000 },
  { id: '600000+', label: 'Diatas Rp 600.000', min: 600000, max: null }
]

export default function VehicleFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([])
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const toggleFuelType = (fuelTypeId: string) => {
    setSelectedFuelTypes(prev => 
      prev.includes(fuelTypeId) 
        ? prev.filter(id => id !== fuelTypeId)
        : [...prev, fuelTypeId]
    )
  }

  const toggleTransmission = (transmissionId: string) => {
    setSelectedTransmissions(prev => 
      prev.includes(transmissionId) 
        ? prev.filter(id => id !== transmissionId)
        : [...prev, transmissionId]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedFuelTypes([])
    setSelectedTransmissions([])
    setSelectedPriceRange('')
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Kategori Mobil</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => toggleCategory(category.id)}
                  className="rounded border-gray-300 text-yorent-600 focus:ring-yorent-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category.label}</span>
              </div>
              <span className="text-xs text-gray-500">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fuel Types */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Jenis Bahan Bakar</h3>
        <div className="space-y-2">
          {fuelTypes.map((fuelType) => (
            <label key={fuelType.id} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedFuelTypes.includes(fuelType.id)}
                  onChange={() => toggleFuelType(fuelType.id)}
                  className="rounded border-gray-300 text-yorent-600 focus:ring-yorent-500"
                />
                <span className="ml-2 text-sm text-gray-700">{fuelType.label}</span>
              </div>
              <span className="text-xs text-gray-500">({fuelType.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Transmissions */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Transmisi</h3>
        <div className="space-y-2">
          {transmissions.map((transmission) => (
            <label key={transmission.id} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedTransmissions.includes(transmission.id)}
                  onChange={() => toggleTransmission(transmission.id)}
                  className="rounded border-gray-300 text-yorent-600 focus:ring-yorent-500"
                />
                <span className="ml-2 text-sm text-gray-700">{transmission.label}</span>
              </div>
              <span className="text-xs text-gray-500">({transmission.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Rentang Harga</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                checked={selectedPriceRange === range.id}
                onChange={() => setSelectedPriceRange(range.id)}
                className="border-gray-300 text-yorent-600 focus:ring-yorent-500"
              />
              <span className="ml-2 text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <div className="pt-4 border-t">
        <Button 
          onClick={clearFilters}
          variant="outline" 
          className="w-full"
        >
          Bersihkan Filter
        </Button>
      </div>
    </div>
  )
}
