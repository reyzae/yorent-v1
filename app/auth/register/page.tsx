'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptTerms) {
      alert('Anda harus menyetujui syarat dan ketentuan')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok')
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle registration logic here
      console.log('Registration attempt:', formData)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yorent-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-yorent-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">Y</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">YORENT</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Buat Akun Baru</h1>
          <p className="text-gray-600">Bergabunglah dengan ribuan pelanggan puas</p>
        </div>

        {/* Register Form */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Daftar</CardTitle>
            <CardDescription>
              Isi data diri Anda untuk membuat akun
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nama Depan</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Nama depan"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nama Belakang</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Nama belakang"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="contoh@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0812-3456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Minimal 8 karakter"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Ulangi password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 rounded border-gray-300 text-yorent-600 focus:ring-yorent-500"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  Saya menyetujui{' '}
                  <Link href="/terms" className="text-yorent-600 hover:text-yorent-700">
                    Syarat & Ketentuan
                  </Link>{' '}
                  dan{' '}
                  <Link href="/privacy" className="text-yorent-600 hover:text-yorent-700">
                    Kebijakan Privasi
                  </Link>{' '}
                  YORENT
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-yorent-600 hover:bg-yorent-700"
                disabled={isLoading || !acceptTerms}
              >
                {isLoading ? 'Memproses...' : 'Daftar Sekarang'}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Atau</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full" disabled>
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Daftar dengan Google
                </Button>
                
                <Button variant="outline" className="w-full" disabled>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Daftar dengan Twitter
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Sudah punya akun?{' '}
                <Link
                  href="/auth/login"
                  className="text-yorent-600 hover:text-yorent-700 font-medium"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Keuntungan Bergabung</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-yorent-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600">Booking lebih cepat dan mudah</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-yorent-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600">Harga khusus member</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-yorent-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600">Riwayat booking tersimpan</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-yorent-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600">Notifikasi promo dan diskon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
