# 🚗 YORENT - Car Rental Booking System

YORENT adalah platform booking rental mobil modern yang dibangun dengan Next.js 14, TypeScript, dan Prisma.

## ✨ Fitur Utama

- 🔐 **Authentication System** - Login/Register dengan NextAuth.js
- 🚗 **Vehicle Catalog** - Katalog mobil dengan detail lengkap
- 📅 **Booking System** - Sistem booking yang mudah dan intuitif
- 💳 **Payment Integration** - Integrasi Stripe untuk pembayaran
- 📧 **Email Notifications** - Notifikasi email otomatis
- 📊 **Admin Dashboard** - Dashboard admin untuk manajemen
- 📱 **Responsive Design** - Tampilan yang responsif di semua device

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL
- **Authentication:** NextAuth.js
- **Payment:** Stripe
- **Image Storage:** Cloudinary
- **Email:** Resend
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account
- Cloudinary account
- Resend account

### Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd yorent
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

4. **Configure environment variables**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/yorent"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Resend
RESEND_API_KEY="re_..."
```

5. **Setup database**
```bash
npx prisma generate
npx prisma db push
```

6. **Run development server**
```bash
npm run dev
```

7. **Open browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
yorent/
├── app/                    # Next.js 14 app directory
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── forms/            # Form components
├── lib/                  # Utility functions
├── prisma/               # Database schema
├── types/                # TypeScript types
└── public/               # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 📊 Database Schema

### Users
- id, email, name, phone, role, created_at

### Vehicles  
- id, name, brand, model, year, category, price_per_day, images, status

### Bookings
- id, user_id, vehicle_id, start_date, end_date, total_price, status, payment_status

### Payments
- id, booking_id, amount, payment_method, status, transaction_id

## 🎨 UI Components

Project menggunakan shadcn/ui untuk komponen UI yang konsisten dan modern.

## 🔐 Authentication

Sistem authentication menggunakan NextAuth.js dengan multiple providers:
- Email/Password
- Google OAuth
- GitHub OAuth

## 💳 Payment Integration

Integrasi Stripe untuk:
- Payment processing
- Webhook handling
- Invoice generation

## 📧 Email System

Menggunakan Resend untuk:
- Booking confirmations
- Payment receipts
- Admin notifications

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically

### Manual Deployment
1. Build the project: `npm run build`
2. Start production server: `npm run start`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

Untuk bantuan dan pertanyaan, silakan buat issue di repository ini.
