import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  sections?: FooterSection[]
  copyright?: string
  socialLinks?: {
    name: string
    href: string
    icon: React.ReactNode
  }[]
  className?: string
}

export function Footer({ sections, copyright, socialLinks, className }: FooterProps) {
  const defaultSections: FooterSection[] = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Car Rental", href: "/vehicles" },
        { label: "Booking", href: "/booking" },
        { label: "Pricing", href: "/pricing" },
        { label: "Locations", href: "/locations" }
      ]
    }
  ]

  const sectionsToRender = sections || defaultSections
  const copyrightText = copyright || `© ${new Date().getFullYear()} YORENT. All rights reserved.`

  return (
    <footer className={cn("bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-yorent-400 mb-4">YORENT</h3>
            <p className="text-gray-400 mb-4">
              Platform booking rental mobil terpercaya dengan ribuan mobil berkualitas.
            </p>
            {socialLinks && (
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Sections */}
          {sectionsToRender.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{copyrightText}</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ in Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
