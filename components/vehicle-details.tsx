'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { Car, Users, Zap, Calendar, Check } from 'lucide-react'

interface VehicleDetailsProps {
  vehicleId: string
}

// Mock vehicle data - replace with API call
const mockVehicle = {
  id: '1',
  name: 'Toyota Avanza',
  brand: 'Toyota',
  model: 'Avanza',
  year: 2022,
  category: 'MPV',
  pricePerDay: 350000,
  images: ['/images/avanza.jpg'],
  status: 'AVAILABLE',
  fuelType: 'PETROL',
  transmission: 'AUTOMATIC',
  seats: 7,
  features: ['AC', 'Power Steering', 'Audio System', 'Bluetooth', 'USB Charger'],
  description: 'Toyota Avanza 2022 dengan kondisi terawat, nyaman untuk keluarga dan perjalanan bisnis.'
}

export default function VehicleDetails({ vehicleId }: VehicleDetailsProps) {
  const [vehicle, setVehicle] = useState(mockVehicle)

  return (
    <div className="space-y-4">
      {/* Vehicle Image */}
      <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={vehicle.images[0] || '/images/placeholder-car.jpg'}
          alt={vehicle.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            Tersedia
          </span>
        </div>
      </div>

      {/* Vehicle Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {vehicle.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {vehicle.description}
        </p>

        {/* Specifications */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Brand</span>
            <span className="font-medium">{vehicle.brand}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Model</span>
            <span className="font-medium">{vehicle.model}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Tahun</span>
            <span className="font-medium">{vehicle.year}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Kategori</span>
            <span className="font-medium">{vehicle.category}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-2">Fitur Utama</h4>
          <div className="grid grid-cols-2 gap-2">
            {vehicle.features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Specs */}
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 p-3 rounded-lg">
            <Users className="w-5 h-5 text-yorent-600 mx-auto mb-1" />
            <div className="text-sm font-medium">{vehicle.seats}</div>
            <div className="text-xs text-gray-500">Kursi</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <Zap className="w-5 h-5 text-yorent-600 mx-auto mb-1" />
            <div className="text-sm font-medium">{vehicle.transmission}</div>
            <div className="text-xs text-gray-500">Transmisi</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <Car className="w-5 h-5 text-yorent-600 mx-auto mb-1" />
            <div className="text-sm font-medium">{vehicle.fuelType}</div>
            <div className="text-xs text-gray-500">Bahan Bakar</div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-6 p-4 bg-yorent-50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-yorent-600">
              {formatPrice(vehicle.pricePerDay)}
            </div>
            <div className="text-sm text-gray-600">per hari</div>
          </div>
        </div>
      </div>
    </div>
  )
}
