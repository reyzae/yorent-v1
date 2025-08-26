# YORENT - Car Rental Booking Website

## 🚀 Project Overview

YORENT adalah platform rental mobil modern yang dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS. Website ini menyediakan pengalaman booking mobil yang mudah, aman, dan user-friendly.

## ✨ Fitur Utama

### 🏠 Halaman Utama
- **Landing Page** - Hero section dengan call-to-action yang menarik
- **Features Section** - Menampilkan keunggulan YORENT
- **About Section** - Informasi tentang perusahaan
- **Contact Section** - Informasi kontak dan jam operasional

### 🚗 Katalog Mobil
- **Vehicle Grid** - Tampilan grid mobil dengan informasi lengkap
- **Filter System** - Filter berdasarkan kategori, bahan bakar, transmisi, dan harga
- **Search Functionality** - Pencarian mobil berdasarkan nama atau spesifikasi
- **Vehicle Details** - Halaman detail mobil dengan spesifikasi lengkap

### 📅 Sistem Booking
- **Booking Form** - Form booking dengan validasi
- **Date Selection** - Pemilihan tanggal sewa dan pengembalian
- **Location Selection** - Pemilihan lokasi pickup dan dropoff
- **Price Calculation** - Kalkulasi harga otomatis
- **Booking Confirmation** - Konfirmasi booking

### 👤 Sistem Autentikasi
- **Login Page** - Halaman masuk dengan validasi
- **Register Page** - Halaman pendaftaran dengan form lengkap
- **Social Login** - OAuth dengan Google dan Twitter (placeholder)
- **Password Recovery** - Sistem reset password

### 📊 Dashboard User
- **User Profile** - Informasi profil pengguna
- **Booking History** - Riwayat booking
- **Statistics** - Statistik penggunaan
- **Quick Actions** - Aksi cepat untuk booking baru

### 📞 Halaman Informasi
- **About Page** - Tentang perusahaan, misi, visi, dan tim
- **Contact Page** - Form kontak dan informasi kantor
- **FAQ Section** - Pertanyaan umum

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI component library

### Backend (Planned)
- **Next.js API Routes** - Backend API
- **Prisma ORM** - Database ORM
- **PostgreSQL** - Database utama
- **NextAuth.js** - Authentication system

### External Services (Planned)
- **Stripe** - Payment gateway
- **Cloudinary** - Image storage
- **Resend** - Email service
- **Vercel** - Deployment platform

## 📁 Struktur Project

```
yorent/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── booking/                  # Booking pages
│   │   └── [vehicleId]/
│   ├── vehicles/                 # Vehicle catalog
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── dashboard/                # User dashboard
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── ui/                      # UI components (shadcn/ui)
│   ├── navigation.tsx           # Main navigation
│   ├── footer.tsx               # Footer component
│   ├── vehicle-grid.tsx         # Vehicle grid
│   ├── vehicle-filters.tsx      # Vehicle filters
│   ├── booking-form.tsx         # Booking form
│   └── vehicle-details.tsx      # Vehicle details
├── lib/                         # Utility libraries
│   ├── utils.ts                 # Utility functions
│   └── prisma.ts                # Prisma client
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
├── prisma/                      # Database schema
│   └── schema.prisma            # Prisma schema
├── public/                      # Static assets
│   └── images/                  # Image assets
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: YORENT Blue (`#2563eb`)
- **Secondary**: Gray scale
- **Accent**: Success, Warning, Error colors

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights
- **Body**: Regular weights

### Components
- **Cards** - For content containers
- **Buttons** - Multiple variants and sizes
- **Forms** - Input fields, labels, validation
- **Navigation** - Header and footer
- **Badges** - Status indicators
- **Modals** - Overlay dialogs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL (for production)

### Installation
```bash
# Clone repository
git clone <repository-url>
cd yorent

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

# External Services
STRIPE_SECRET_KEY="sk_..."
CLOUDINARY_CLOUD_NAME="..."
RESEND_API_KEY="..."
```

## 📱 Responsive Design

Website ini fully responsive dengan breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

## 📈 Performance Features

- **Image Optimization** - Next.js Image component
- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Components loaded on demand
- **SEO Optimized** - Meta tags and structured data
- **Accessibility** - ARIA labels and keyboard navigation

## 🔒 Security Features

- **Input Validation** - Form validation on client and server
- **XSS Protection** - Built-in Next.js protection
- **CSRF Protection** - Token-based protection
- **Secure Headers** - Security headers configuration

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify** - Static site deployment
- **Railway** - Full-stack deployment
- **DigitalOcean** - VPS deployment

## 📊 Database Schema

### Users
- id, email, name, phone, role, createdAt, updatedAt

### Vehicles
- id, name, brand, model, year, category, fuelType, transmission, seats, pricePerDay, status, images

### Bookings
- id, userId, vehicleId, startDate, endDate, pickupLocation, dropoffLocation, totalPrice, status

### Payments
- id, bookingId, amount, method, status, transactionId

## 🔮 Future Enhancements

### Phase 2
- [ ] Admin dashboard
- [ ] Real-time availability
- [ ] Payment integration
- [ ] Email notifications
- [ ] Mobile app

### Phase 3
- [ ] AI recommendations
- [ ] Loyalty program
- [ ] Multi-language support
- [ ] Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

- **Email**: support@yorent.com
- **Phone**: 021-1234-5678
- **Website**: https://yorent.com

---

**YORENT** - Your Trusted Car Rental Partner 🚗✨
