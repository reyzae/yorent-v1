import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'

// GET - Get user bookings
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const bookings = await prisma.booking.findMany({
      where: {
        userId: session.user.id
      },
      include: {
        vehicle: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(bookings)

  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

// POST - Create new booking
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const {
      vehicleId,
      startDate,
      endDate,
      pickupLocation,
      dropoffLocation,
      totalPrice
    } = body

    // Validation
    if (!vehicleId || !startDate || !endDate || !pickupLocation || !dropoffLocation || !totalPrice) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      )
    }

    // Check if vehicle is available
    const vehicle = await prisma.vehicle.findUnique({
      where: { id: vehicleId }
    })

    if (!vehicle || vehicle.status !== 'AVAILABLE') {
      return NextResponse.json(
        { error: 'Kendaraan tidak tersedia' },
        { status: 400 }
      )
    }

    // Check for date conflicts
    const conflictingBooking = await prisma.booking.findFirst({
      where: {
        vehicleId,
        status: {
          in: ['PENDING', 'CONFIRMED', 'ACTIVE']
        },
        OR: [
          {
            startDate: {
              lte: new Date(endDate),
              gte: new Date(startDate)
            }
          },
          {
            endDate: {
              gte: new Date(startDate),
              lte: new Date(endDate)
            }
          }
        ]
      }
    })

    if (conflictingBooking) {
      return NextResponse.json(
        { error: 'Kendaraan sudah dibooking untuk tanggal tersebut' },
        { status: 400 }
      )
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        vehicleId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        pickupLocation,
        dropoffLocation,
        totalPrice: parseFloat(totalPrice),
        status: 'PENDING'
      },
      include: {
        vehicle: true
      }
    })

    return NextResponse.json(booking, { status: 201 })

  } catch (error) {
    console.error('Create booking error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
