"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="https://greetenergy.com" className="flex-shrink-0 transition-smooth hover:opacity-80">
            <Image
              src="/images/greet-20logo.png"
              alt="Greet Energy"
              width={40}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Cotiza Ya CTA */}
          <div className="flex items-center">
            <a href="#contacto">
              <button className="bg-accent text-white px-8 py-2.5 rounded-full text-sm font-semibold transition-smooth hover:shadow-lg hover:scale-105">
                Cotiza Ya
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
