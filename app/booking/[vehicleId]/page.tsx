import { Suspense } from 'react'
import BookingForm from '@/components/booking-form'
import VehicleDetails from '@/components/vehicle-details'

interface BookingPageProps {
  params: {
    vehicleId: string
  }
}

export default function BookingPage({ params }: BookingPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Booking Mobil
          </h1>
          <p className="text-gray-600">
            Lengkapi detail pemesanan Anda
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-semibold mb-6">Detail Pemesanan</h2>
              
              <Suspense fallback={<div>Loading booking form...</div>}>
                <BookingForm vehicleId={params.vehicleId} />
              </Suspense>
            </div>
          </div>

          {/* Vehicle Details & Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Detail Mobil</h2>
              
              <Suspense fallback={<div>Loading vehicle details...</div>}>
                <VehicleDetails vehicleId={params.vehicleId} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
