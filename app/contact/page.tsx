import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yorent-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Hubungi Kami
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kami Siap <span className="text-yorent-600">Membantu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami 
            untuk pertanyaan, bantuan, atau feedback.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yorent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle>Telepon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Layanan Pelanggan 24/7</p>
                <p className="text-2xl font-bold text-yorent-600">021-1234-5678</p>
                <p className="text-sm text-gray-500 mt-2">Senin - Minggu</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yorent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Respon Cepat</p>
                <p className="text-lg font-semibold text-yorent-600">support@yorent.com</p>
                <p className="text-sm text-gray-500 mt-2">Respon dalam 2 jam</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-yorent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Bantuan Instan</p>
                <Button className="w-full bg-yorent-600 hover:bg-yorent-700">
                  Mulai Chat
                </Button>
                <p className="text-sm text-gray-500 mt-2">Online 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Office */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Isi form di bawah ini dan tim kami akan segera menghubungi Anda.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Nama Depan</Label>
                    <Input id="firstName" placeholder="Masukkan nama depan" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nama Belakang</Label>
                    <Input id="lastName" placeholder="Masukkan nama belakang" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="contoh@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input id="phone" placeholder="0812-3456-7890" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Apa yang bisa kami bantu?" />
                </div>
                
                <div>
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-yorent-600 hover:bg-yorent-700">
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kantor Kami</h2>
              <p className="text-gray-600 mb-8">
                Kunjungi kantor kami untuk layanan langsung atau konsultasi.
              </p>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-yorent-600">Kantor Pusat</CardTitle>
                    <CardDescription>Jakarta Selatan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        <strong>Alamat:</strong><br />
                        Jl. Sudirman No. 123<br />
                        Jakarta Selatan, 12190
                      </p>
                      <p className="text-gray-600">
                        <strong>Jam Operasional:</strong><br />
                        Senin - Jumat: 08:00 - 18:00<br />
                        Sabtu: 09:00 - 15:00
                      </p>
                      <p className="text-gray-600">
                        <strong>Telepon:</strong> 021-1234-5678
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-yorent-600">Kantor Cabang</CardTitle>
                    <CardDescription>Bandung</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        <strong>Alamat:</strong><br />
                        Jl. Asia Afrika No. 456<br />
                        Bandung, 40111
                      </p>
                      <p className="text-gray-600">
                        <strong>Jam Operasional:</strong><br />
                        Senin - Jumat: 08:00 - 18:00<br />
                        Sabtu: 09:00 - 15:00
                      </p>
                      <p className="text-gray-600">
                        <strong>Telepon:</strong> 022-1234-5678
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Bagaimana cara melakukan booking mobil?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pilih mobil yang diinginkan, tentukan tanggal sewa, isi data diri, 
                  dan lakukan pembayaran. Tim kami akan menghubungi untuk konfirmasi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Apa syarat untuk menyewa mobil?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  KTP, SIM A, dan deposit. Untuk penyewaan lebih dari 7 hari, 
                  diperlukan surat keterangan kerja atau referensi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Apakah ada asuransi untuk kendaraan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ya, semua kendaraan kami sudah dilengkapi asuransi all risk 
                  untuk memberikan ketenangan pikiran selama perjalanan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Bagaimana jika ada masalah teknis?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hubungi hotline 24/7 kami. Tim teknisi akan segera datang 
                  untuk memberikan bantuan darurat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Siap Memulai Perjalanan?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika ada pertanyaan. 
            Tim support kami siap membantu Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/vehicles"
              className="inline-flex items-center justify-center px-8 py-3 bg-yorent-600 text-white font-medium rounded-md hover:bg-yorent-700 transition-colors"
            >
              Cari Mobil Sekarang
            </a>
            <a
              href="tel:021-1234-5678"
              className="inline-flex items-center justify-center px-8 py-3 border border-yorent-600 text-yorent-600 font-medium rounded-md hover:bg-yorent-50 transition-colors"
            >
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
