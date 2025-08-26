import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yorent-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Tentang Kami
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Mengenal <span className="text-yorent-600">YORENT</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platform rental mobil terpercaya yang menghubungkan Anda dengan kendaraan berkualitas 
            untuk perjalanan yang nyaman dan aman.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-yorent-600">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Menyediakan layanan rental mobil yang mudah, aman, dan terjangkau untuk semua kalangan. 
                  Kami berkomitmen memberikan pengalaman terbaik dengan kendaraan berkualitas dan 
                  pelayanan profesional.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-yorent-600">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi platform rental mobil terdepan di Indonesia yang dikenal dengan inovasi, 
                  keamanan, dan kepuasan pelanggan. Kami ingin memudahkan akses mobilitas untuk 
                  semua orang.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip yang menjadi dasar dalam memberikan layanan terbaik kepada pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yorent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Kepercayaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Membangun kepercayaan melalui transparansi, keamanan, dan pelayanan yang konsisten.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yorent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Inovasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Terus berinovasi dalam teknologi dan layanan untuk memberikan pengalaman terbaik.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yorent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle>Kepuasan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mengutamakan kepuasan pelanggan dalam setiap aspek layanan yang kami berikan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yorent-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">YORENT dalam Angka</h2>
            <p className="text-yorent-100 max-w-2xl mx-auto">
              Pencapaian kami dalam memberikan layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-yorent-100">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-yorent-100">Kendaraan Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-yorent-100">Kota Terjangkau</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-yorent-100">Uptime Layanan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dipimpin oleh para profesional berpengalaman yang berkomitmen memberikan layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>CEO & Founder</CardTitle>
                <CardDescription>Memimpin strategi dan pengembangan bisnis</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>CTO</CardTitle>
                <CardDescription>Bertanggung jawab atas teknologi dan inovasi</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle>Head of Operations</CardTitle>
                <CardDescription>Mengelola operasional dan layanan pelanggan</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelanggan yang telah mempercayai YORENT untuk kebutuhan 
            rental mobil mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/vehicles"
              className="inline-flex items-center justify-center px-8 py-3 bg-yorent-600 text-white font-medium rounded-md hover:bg-yorent-700 transition-colors"
            >
              Cari Mobil Sekarang
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-yorent-600 text-yorent-600 font-medium rounded-md hover:bg-yorent-50 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
