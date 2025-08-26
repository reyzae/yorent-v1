import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@yorent.com' },
    update: {},
    create: {
      email: 'admin@yorent.com',
      name: 'Admin YORENT',
      phone: '081234567890',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Create sample customer
  const customerPassword = await bcrypt.hash('customer123', 12)
  const customer = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      email: 'customer@example.com',
      name: 'John Doe',
      phone: '081234567891',
      password: customerPassword,
      role: 'CUSTOMER',
    },
  })

  // Create sample vehicles
  const vehicles = await Promise.all([
    prisma.vehicle.upsert({
      where: { id: 'vehicle-1' },
      update: {},
      create: {
        id: 'vehicle-1',
        name: 'Toyota Avanza',
        brand: 'Toyota',
        model: 'Avanza',
        year: 2022,
        category: 'MPV',
        pricePerDay: 300000,
        fuelType: 'PETROL',
        transmission: 'AUTOMATIC',
        seats: 7,
        mileage: 15000,
        licensePlate: 'B 1234 ABC',
        status: 'AVAILABLE',
        description: 'MPV nyaman untuk keluarga, irit BBM, AC dingin',
        features: ['AC', 'Power Steering', 'Power Windows', 'Audio System'],
        images: [
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
        ],
      },
    }),
    prisma.vehicle.upsert({
      where: { id: 'vehicle-2' },
      update: {},
      create: {
        id: 'vehicle-2',
        name: 'Honda Brio',
        brand: 'Honda',
        model: 'Brio',
        year: 2023,
        category: 'HATCHBACK',
        pricePerDay: 250000,
        fuelType: 'PETROL',
        transmission: 'AUTOMATIC',
        seats: 5,
        mileage: 8000,
        licensePlate: 'B 5678 DEF',
        status: 'AVAILABLE',
        description: 'City car yang lincah, mudah diparkir, cocok untuk jalan sempit',
        features: ['AC', 'Power Steering', 'Power Windows', 'Bluetooth Audio'],
        images: [
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
        ],
      },
    }),
    prisma.vehicle.upsert({
      where: { id: 'vehicle-3' },
      update: {},
      create: {
        id: 'vehicle-3',
        name: 'Suzuki Ertiga',
        brand: 'Suzuki',
        model: 'Ertiga',
        year: 2021,
        category: 'MPV',
        pricePerDay: 280000,
        fuelType: 'PETROL',
        transmission: 'MANUAL',
        seats: 7,
        mileage: 25000,
        licensePlate: 'B 9012 GHI',
        status: 'AVAILABLE',
        description: 'MPV dengan handling yang baik, irit BBM',
        features: ['AC', 'Power Steering', 'Power Windows', 'Audio System'],
        images: [
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
        ],
      },
    }),
    prisma.vehicle.upsert({
      where: { id: 'vehicle-4' },
      update: {},
      create: {
        id: 'vehicle-4',
        name: 'Toyota Innova',
        brand: 'Toyota',
        model: 'Innova',
        year: 2022,
        category: 'MPV',
        pricePerDay: 450000,
        fuelType: 'DIESEL',
        transmission: 'AUTOMATIC',
        seats: 8,
        mileage: 12000,
        licensePlate: 'B 3456 JKL',
        status: 'AVAILABLE',
        description: 'MPV premium dengan performa tinggi, cocok untuk perjalanan jauh',
        features: ['AC', 'Power Steering', 'Power Windows', 'Audio System', 'Cruise Control'],
        images: [
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
          'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
        ],
      },
    }),
  ])

  console.log('✅ Database seeded successfully!')
  console.log('👤 Admin user:', admin.email)
  console.log('👤 Customer user:', customer.email)
  console.log('🚗 Vehicles created:', vehicles.length)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
