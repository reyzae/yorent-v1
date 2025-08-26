export interface User {
  id: string
  name: string
  email: string
  phone?: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

export interface Vehicle {
  id: string
  name: string
  brand: string
  model: string
  year: number
  category: VehicleCategory
  pricePerDay: number
  images: string[]
  status: VehicleStatus
  description?: string
  features: string[]
  fuelType: FuelType
  transmission: Transmission
  seats: number
  mileage?: number
  licensePlate?: string
  createdAt: Date
  updatedAt: Date
}

export interface Booking {
  id: string
  userId: string
  vehicleId: string
  startDate: Date
  endDate: Date
  totalPrice: number
  status: BookingStatus
  paymentStatus: PaymentStatus
  pickupLocation?: string
  dropoffLocation?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
  user: User
  vehicle: Vehicle
  payment?: Payment
}

export interface Payment {
  id: string
  bookingId: string
  amount: number
  paymentMethod: PaymentMethod
  status: PaymentStatus
  transactionId?: string
  stripePaymentId?: string
  paidAt?: Date
  createdAt: Date
  updatedAt: Date
  booking: Booking
}

export enum UserRole {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  CUSTOMER = 'CUSTOMER'
}

export enum VehicleCategory {
  SEDAN = 'SEDAN',
  SUV = 'SUV',
  MPV = 'MPV',
  HATCHBACK = 'HATCHBACK',
  PICKUP = 'PICKUP',
  VAN = 'VAN',
  LUXURY = 'LUXURY',
  SPORTS = 'SPORTS'
}

export enum VehicleStatus {
  AVAILABLE = 'AVAILABLE',
  RENTED = 'RENTED',
  MAINTENANCE = 'MAINTENANCE',
  OUT_OF_SERVICE = 'OUT_OF_SERVICE'
}

export enum FuelType {
  PETROL = 'PETROL',
  DIESEL = 'DIESEL',
  ELECTRIC = 'ELECTRIC',
  HYBRID = 'HYBRID'
}

export enum Transmission {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC'
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED'
}

export enum PaymentMethod {
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  CASH = 'CASH',
  DIGITAL_WALLET = 'DIGITAL_WALLET'
}

export interface BookingFormData {
  startDate: string
  endDate: string
  pickupLocation: string
  dropoffLocation: string
  customerName: string
  customerPhone: string
  customerEmail: string
}

export interface VehicleFilters {
  categories: string[]
  fuelTypes: string[]
  transmissions: string[]
  priceRange: string
  search: string
}
