'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '0812-3456-7890',
    memberSince: '2024',
    totalBookings: 12,
    totalSpent: 2500000,
  }

  // Mock booking history
  const bookings = [
    {
      id: 'BK001',
      vehicle: 'Toyota Avanza',
      date: '2024-01-15',
      duration: '3 hari',
      status: 'completed',
      amount: 450000,
    },
    {
      id: 'BK002',
      vehicle: 'Honda Brio',
      date: '2024-01-20',
      duration: '1 hari',
      status: 'active',
      amount: 200000,
    },
    {
      id: 'BK003',
      vehicle: 'Suzuki Ertiga',
      date: '2024-02-01',
      duration: '2 hari',
      status: 'upcoming',
      amount: 300000,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Selesai</Badge>
      case 'active':
        return <Badge variant="warning">Sedang Berjalan</Badge>
      case 'upcoming':
        return <Badge variant="info">Akan Datang</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Kelola akun dan booking Anda</p>
            </div>
            <Link href="/vehicles">
              <Button className="bg-yorent-600 hover:bg-yorent-700">
                Booking Mobil Baru
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* User Profile */}
            <Card className="mb-6">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <div className="w-full h-full bg-yorent-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-yorent-600">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                </Avatar>
                <CardTitle className="text-lg">{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Telepon:</span>
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member sejak:</span>
                    <span>{user.memberSince}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total booking:</span>
                    <span>{user.totalBookings}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Aksi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/vehicles">
                  <Button variant="outline" className="w-full justify-start">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Booking Baru
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button variant="outline" className="w-full justify-start">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Edit Profil
                  </Button>
                </Link>
                <Link href="/support">
                  <Button variant="outline" className="w-full justify-start">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Bantuan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Booking</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{user.totalBookings}</div>
                  <p className="text-xs text-muted-foreground">
                    +2 dari bulan lalu
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pengeluaran</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp {user.totalSpent.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    +12% dari bulan lalu
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Booking Aktif</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">
                    Sedang berjalan
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Riwayat Booking Terbaru</CardTitle>
                <CardDescription>
                  Booking terakhir Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yorent-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">{booking.vehicle}</h4>
                          <p className="text-sm text-gray-600">
                            {booking.date} • {booking.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="mb-2">{getStatusBadge(booking.status)}</div>
                        <div className="font-semibold">Rp {booking.amount.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link href="/bookings">
                    <Button variant="outline">
                      Lihat Semua Booking
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Tips & Informasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yorent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Booking Lebih Awal</h4>
                      <p className="text-sm text-gray-600">
                        Booking minimal 1 hari sebelumnya untuk mendapatkan harga terbaik
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yorent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-yorent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Member Benefits</h4>
                      <p className="text-sm text-gray-600">
                        Nikmati diskon khusus dan layanan prioritas sebagai member
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
