'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { formatPrice, calculateDays } from '@/lib/utils'
import { Calendar, MapPin, User, Phone, CreditCard } from 'lucide-react'

interface BookingFormProps {
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
  features: ['AC', 'Power Steering', 'Audio System']
}

export default function BookingForm({ vehicleId }: BookingFormProps) {
  const router = useRouter()
  const [vehicle, setVehicle] = useState(mockVehicle)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropoffLocation, setDropoffLocation] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // Calculate total price when dates change
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      const days = calculateDays(start, end)
      setTotalPrice(days * vehicle.pricePerDay)
    }
  }, [startDate, endDate, vehicle.pricePerDay])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Mock API call - replace with actual booking API
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Redirect to payment page
      router.push(`/payment?bookingId=YOR-123456-ABC123`)
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Date Selection */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Tanggal Mulai
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={today}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Tanggal Selesai
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate || tomorrow}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Location Selection */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Lokasi Pickup
          </label>
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
          >
            <option value="">Pilih lokasi pickup</option>
            <option value="jakarta_center">Jakarta Pusat</option>
            <option value="jakarta_south">Jakarta Selatan</option>
            <option value="jakarta_north">Jakarta Utara</option>
            <option value="jakarta_east">Jakarta Timur</option>
            <option value="jakarta_west">Jakarta Barat</option>
            <option value="airport">Bandara Soekarno-Hatta</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Lokasi Dropoff
          </label>
          <select
            value={dropoffLocation}
            onChange={(e) => setDropoffLocation(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
          >
            <option value="">Pilih lokasi dropoff</option>
            <option value="jakarta_center">Jakarta Pusat</option>
            <option value="jakarta_south">Jakarta Selatan</option>
            <option value="jakarta_north">Jakarta Utara</option>
            <option value="jakarta_east">Jakarta Timur</option>
            <option value="jakarta_west">Jakarta Barat</option>
            <option value="airport">Bandara Soekarno-Hatta</option>
          </select>
        </div>
      </div>

      {/* Customer Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Informasi Customer</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Nama Lengkap
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Nomor Telepon
            </label>
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Price Summary */}
      {totalPrice > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ringkasan Biaya</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Harga per hari:</span>
              <span>{formatPrice(vehicle.pricePerDay)}</span>
            </div>
            <div className="flex justify-between">
              <span>Durasi sewa:</span>
              <span>{startDate && endDate ? calculateDays(new Date(startDate), new Date(endDate)) : 0} hari</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span className="text-yorent-600">{formatPrice(totalPrice)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isLoading || !startDate || !endDate || !pickupLocation || !dropoffLocation || !customerName || !customerPhone || !customerEmail}
          className="flex-1 bg-yorent-600 hover:bg-yorent-700"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Memproses...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Lanjut ke Pembayaran
            </div>
          )}
        </Button>
      </div>
    </form>
  )
}
