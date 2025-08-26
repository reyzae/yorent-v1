import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Car, Shield, Clock, Star, MapPin, Phone } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yorent-600 to-yorent-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sewa Mobil Mudah dengan{' '}
              <span className="text-yellow-300">YORENT</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yorent-100">
              Platform booking rental mobil terpercaya dengan ribuan mobil berkualitas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/vehicles">
                <Button size="lg" className="bg-white text-yorent-600 hover:bg-gray-100">
                  Cari Mobil Sekarang
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yorent-600">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih YORENT?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan layanan rental mobil terbaik dengan berbagai keunggulan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yorent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-yorent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobil Berkualitas</h3>
              <p className="text-gray-600">
                Semua mobil kami terawat dengan baik dan siap pakai
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yorent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yorent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Terpercaya</h3>
              <p className="text-gray-600">
                Ribuan customer telah mempercayai layanan kami
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yorent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yorent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Customer service siap membantu kapan saja
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yorent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yorent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Harga Terbaik</h3>
              <p className="text-gray-600">
                Dapatkan harga terbaik dengan kualitas premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yorent-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Siap untuk Memulai Perjalanan?
          </h2>
          <p className="text-xl mb-8 text-yorent-100">
            Booking mobil favorit Anda sekarang dan nikmati perjalanan yang nyaman
          </p>
          <Link href="/vehicles">
            <Button size="lg" className="bg-white text-yorent-700 hover:bg-gray-100">
              Mulai Booking Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ada pertanyaan? Tim kami siap membantu Anda
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-yorent-600 mr-3" />
                  <span className="text-lg">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-yorent-600 mr-3" />
                  <span className="text-lg">Jl. Sudirman No. 123, Jakarta</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Jam Operasional</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span>08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span>09:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
