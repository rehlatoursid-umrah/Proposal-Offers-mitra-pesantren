"use client"

import Image from "next/image"

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
    <div className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border overflow-y-auto pt-8">
      {/* LOGO SECTION */}
      <div className="px-6 mb-12 flex justify-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <Image
            src="/rem.png"
            alt="Logo"
            width={160}
            height={160}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="space-y-2 px-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
