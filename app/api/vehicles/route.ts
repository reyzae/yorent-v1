import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET - Get all vehicles with filters
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const fuelType = searchParams.get('fuelType')
    const transmission = searchParams.get('transmission')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const search = searchParams.get('search')

    // Build where clause
    const where: any = {
      status: 'AVAILABLE'
    }

    if (category) where.category = category
    if (fuelType) where.fuelType = fuelType
    if (transmission) where.transmission = transmission
    if (minPrice || maxPrice) {
      where.pricePerDay = {}
      if (minPrice) where.pricePerDay.gte = parseInt(minPrice)
      if (maxPrice) where.pricePerDay.lte = parseInt(maxPrice)
    }
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { brand: { contains: search, mode: 'insensitive' } },
        { model: { contains: search, mode: 'insensitive' } }
      ]
    }

    const vehicles = await prisma.vehicle.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(vehicles)

  } catch (error) {
    console.error('Get vehicles error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}

// POST - Create new vehicle (Admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      brand,
      model,
      year,
      category,
      fuelType,
      transmission,
      seats,
      pricePerDay,
      description,
      images
    } = body

    // Validation
    if (!name || !brand || !model || !year || !category || !fuelType || !transmission || !seats || !pricePerDay) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      )
    }

    const vehicle = await prisma.vehicle.create({
      data: {
        name,
        brand,
        model,
        year: parseInt(year),
        category,
        fuelType,
        transmission,
        seats: parseInt(seats),
        pricePerDay: parseFloat(pricePerDay),
        description,
        images: images || [],
        status: 'AVAILABLE'
      }
    })

    return NextResponse.json(vehicle, { status: 201 })

  } catch (error) {
    console.error('Create vehicle error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    )
  }
}
