# 🚀 Panduan Setup YORENT

## 📋 Prerequisites

Sebelum memulai, pastikan Anda telah menginstall:

- **Node.js** (versi 18 atau lebih baru)
- **npm** atau **yarn**
- **PostgreSQL** database
- **Git**

## 🛠️ Installation Steps

### 1. Clone Repository
```bash
git clone <repository-url>
cd yorent
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
cp env.example .env.local
```

Edit file `.env.local` dan isi dengan konfigurasi yang sesuai:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/yorent"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe (untuk payment)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Cloudinary (untuk image storage)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Resend (untuk email)
RESEND_API_KEY="re_..."
```

### 4. Setup Database

#### Option A: Local PostgreSQL
1. Install PostgreSQL
2. Buat database baru:
```sql
CREATE DATABASE yorent;
```
3. Update DATABASE_URL di `.env.local`

#### Option B: Supabase (Recommended)
1. Daftar di [supabase.com](https://supabase.com)
2. Buat project baru
3. Copy connection string ke DATABASE_URL

### 5. Run Database Migrations
```bash
npx prisma generate
npx prisma db push
```

### 6. Seed Database (Optional)
```bash
npx prisma db seed
```

### 7. Start Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Database commands
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
```

## 📁 Project Structure

```
yorent/
├── app/                    # Next.js 14 app directory
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── api/               # API routes
│   ├── booking/           # Booking pages
│   ├── vehicles/          # Vehicle pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── forms/            # Form components
│   └── providers.tsx     # Context providers
├── lib/                  # Utility functions
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Utility functions
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
├── types/                # TypeScript types
│   └── index.ts          # Type definitions
└── public/               # Static assets
```

## 🔐 Authentication Setup

### NextAuth.js Configuration

1. **Email/Password Authentication**
   - Sudah dikonfigurasi secara default
   - Gunakan form register/login

2. **Google OAuth** (Optional)
   - Buat project di [Google Cloud Console](https://console.cloud.google.com)
   - Setup OAuth 2.0 credentials
   - Tambahkan ke environment variables

3. **GitHub OAuth** (Optional)
   - Buat OAuth App di GitHub Settings
   - Tambahkan ke environment variables

## 💳 Payment Integration

### Stripe Setup

1. Daftar di [stripe.com](https://stripe.com)
2. Dapatkan API keys dari dashboard
3. Update environment variables
4. Setup webhook endpoint

### Payment Flow

1. User memilih mobil
2. Mengisi form booking
3. Redirect ke Stripe Checkout
4. Payment processing
5. Webhook confirmation
6. Email notification

## 📧 Email Integration

### Resend Setup

1. Daftar di [resend.com](https://resend.com)
2. Dapatkan API key
3. Update environment variables
4. Setup email templates

### Email Templates

- Booking confirmation
- Payment receipt
- Admin notifications
- Reminder emails

## 🖼️ Image Storage

### Cloudinary Setup

1. Daftar di [cloudinary.com](https://cloudinary.com)
2. Dapatkan credentials
3. Update environment variables
4. Setup upload presets

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository di Vercel
3. Configure environment variables
4. Deploy

### Manual Deployment

1. Build project:
```bash
npm run build
```

2. Start production server:
```bash
npm run start
```

## 🔍 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Periksa DATABASE_URL
   - Pastikan PostgreSQL berjalan
   - Cek firewall settings

2. **Prisma Errors**
   - Run `npx prisma generate`
   - Run `npx prisma db push`
   - Restart development server

3. **Environment Variables**
   - Pastikan file `.env.local` ada
   - Restart development server setelah update

4. **Port Already in Use**
   - Kill process di port 3000
   - Atau gunakan port lain: `npm run dev -- -p 3001`

## 📞 Support

Untuk bantuan lebih lanjut:

- Buat issue di repository
- Hubungi tim development
- Cek dokumentasi Next.js dan Prisma

## 🎯 Next Steps

Setelah setup selesai:

1. **Customize Branding**
   - Update logo dan warna
   - Customize email templates
   - Setup domain

2. **Add Features**
   - Admin dashboard
   - User management
   - Reporting system
   - Mobile app

3. **Optimization**
   - Performance optimization
   - SEO setup
   - Analytics integration
   - Security hardening
