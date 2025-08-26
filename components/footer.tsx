import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    layanan: [
      { name: 'Rental Mobil', href: '/vehicles' },
      { name: 'Rental Harian', href: '/vehicles?duration=daily' },
      { name: 'Rental Mingguan', href: '/vehicles?duration=weekly' },
      { name: 'Rental Bulanan', href: '/vehicles?duration=monthly' },
    ],
    perusahaan: [
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Karir', href: '/careers' },
      { name: 'Berita', href: '/news' },
      { name: 'Kebijakan Privasi', href: '/privacy' },
    ],
    bantuan: [
      { name: 'Pusat Bantuan', href: '/help' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Kontak', href: '/contact' },
      { name: 'Syarat & Ketentuan', href: '/terms' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yorent-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="text-2xl font-bold">YORENT</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Platform rental mobil terpercaya yang menghubungkan Anda dengan kendaraan berkualitas 
              untuk perjalanan yang nyaman dan aman.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yorent-600 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    )}
                    {social.icon === 'instagram' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98.196-1.353.569-.373.373-.569.863-.569 1.353s.196.98.569 1.353c.373.373.863.569 1.353.569s.98-.196 1.353-.569c.373-.373.569-.863.569-1.353s-.196-.98-.569-1.353c-.373-.373-.863-.569-1.353-.569z"/>
                    )}
                    {social.icon === 'twitter' && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    )}
                    {social.icon === 'youtube' && (
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              {footerLinks.bantuan.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2">Layanan Pelanggan 24/7</h4>
              <p className="text-yorent-400 text-lg font-semibold">021-1234-5678</p>
              <p className="text-gray-400 text-sm">Senin - Minggu</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-yorent-400 font-semibold">support@yorent.com</p>
              <p className="text-gray-400 text-sm">Respon dalam 2 jam</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2">Kantor Pusat</h4>
              <p className="text-gray-300">Jl. Sudirman No. 123</p>
              <p className="text-gray-400 text-sm">Jakarta Selatan, 12190</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">
                © {currentYear} YORENT. Semua hak dilindungi.
              </p>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                Made with ❤️ in Indonesia
              </Badge>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privasi
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Syarat & Ketentuan
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
