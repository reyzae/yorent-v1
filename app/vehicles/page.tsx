import { Suspense } from 'react'
import VehicleGrid from '@/components/vehicle-grid'
import VehicleFilters from '@/components/vehicle-filters'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Katalog Mobil
          </h1>
          <p className="text-gray-600">
            Pilih mobil favorit Anda dari koleksi kami
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-yorent-600" />
                <h2 className="text-lg font-semibold">Filter</h2>
              </div>
              
              <Suspense fallback={<div>Loading filters...</div>}>
                <VehicleFilters />
              </Suspense>
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari mobil berdasarkan nama, brand, atau model..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yorent-500 focus:border-transparent"
                  />
                </div>
                <Button className="bg-yorent-600 hover:bg-yorent-700">
                  Cari
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Hasil Pencarian</h2>
                <span className="text-gray-600">12 mobil ditemukan</span>
              </div>

              <Suspense fallback={<div>Loading vehicles...</div>}>
                <VehicleGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
