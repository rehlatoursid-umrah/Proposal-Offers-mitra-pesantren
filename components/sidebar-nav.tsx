"use client"

import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["700"], // Bold
  subsets: ["latin"],
})

const navItems = [
  { id: "intro", label: "Introduction" },
  { id: "about", label: "About Us" },
  { id: "packages", label: "Our Packages" },
  { id: "why-pesantren", label: "Why Pesantren?" },
  { id: "benefits", label: "Partnership Benefits" },
  { id: "commission", label: "Your Investment" },
  { id: "testimonials", label: "Testimonials" },
  { id: "team", label: "Our Team" },
  { id: "next-steps", label: "Next Steps" },
]

export function SidebarNav() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border overflow-y-auto pt-6">
      {/* LOGO */}
      <div className="px-6 mb-4 flex justify-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <Image
            src="/rem.png"
            alt="Logo Rehlatours"
            width={160}
            height={160}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className={`space-y-1 px-6 ${roboto.className}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-[15px] font-bold text-muted-foreground hover:text-foreground py-1.5 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
