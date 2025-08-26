'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Car, Users, Zap, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'

// Mock data - replace with actual API call
const mockVehicles = [
  {
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
    features: ['AC', 'Power Steering', 'Audio System']
  },
  {
    id: '2',
    name: 'Honda Brio',
    brand: 'Honda',
    model: 'Brio',
    year: 2023,
    category: 'HATCHBACK',
    pricePerDay: 250000,
    images: ['/images/brio.jpg'],
    status: 'AVAILABLE',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    seats: 5,
    features: ['AC', 'Power Steering', 'Audio System']
  },
  {
    id: '3',
    name: 'Toyota Innova',
    brand: 'Toyota',
    model: 'Innova',
    year: 2021,
    category: 'MPV',
    pricePerDay: 450000,
    images: ['/images/innova.jpg'],
    status: 'AVAILABLE',
    fuelType: 'DIESEL',
    transmission: 'AUTOMATIC',
    seats: 8,
    features: ['AC', 'Power Steering', 'Audio System', 'Leather Seats']
  },
  {
    id: '4',
    name: 'Suzuki Ertiga',
    brand: 'Suzuki',
    model: 'Ertiga',
    year: 2022,
    category: 'MPV',
    pricePerDay: 300000,
    images: ['/images/ertiga.jpg'],
    status: 'AVAILABLE',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    seats: 7,
    features: ['AC', 'Power Steering', 'Audio System']
  },
  {
    id: '5',
    name: 'Daihatsu Xenia',
    brand: 'Daihatsu',
    model: 'Xenia',
    year: 2021,
    category: 'MPV',
    pricePerDay: 280000,
    images: ['/images/xenia.jpg'],
    status: 'AVAILABLE',
    fuelType: 'PETROL',
    transmission: 'MANUAL',
    seats: 7,
    features: ['AC', 'Power Steering']
  },
  {
    id: '6',
    name: 'Honda Jazz',
    brand: 'Honda',
    model: 'Jazz',
    year: 2023,
    category: 'HATCHBACK',
    pricePerDay: 320000,
    images: ['/images/jazz.jpg'],
    status: 'AVAILABLE',
    fuelType: 'PETROL',
    transmission: 'AUTOMATIC',
    seats: 5,
    features: ['AC', 'Power Steering', 'Audio System', 'Magic Seats']
  }
]

export default function VehicleGrid() {
  const [vehicles] = useState(mockVehicles)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
          {/* Vehicle Image */}
          <div className="relative h-48 bg-gray-200">
            <Image
              src={vehicle.images[0] || '/images/placeholder-car.jpg'}
              alt={vehicle.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                vehicle.status === 'AVAILABLE' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {vehicle.status === 'AVAILABLE' ? 'Tersedia' : 'Tidak Tersedia'}
              </span>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {vehicle.name}
            </h3>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{vehicle.seats} Kursi</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>{vehicle.transmission}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{vehicle.year}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-yorent-600">
                  {formatPrice(vehicle.pricePerDay)}
                </p>
                <p className="text-sm text-gray-500">per hari</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{vehicle.category}</p>
                <p className="text-xs text-gray-500">{vehicle.fuelType}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Link href={`/vehicles/${vehicle.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  Detail
                </Button>
              </Link>
              <Link href={`/booking/${vehicle.id}`} className="flex-1">
                <Button className="w-full bg-yorent-600 hover:bg-yorent-700">
                  Booking
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
