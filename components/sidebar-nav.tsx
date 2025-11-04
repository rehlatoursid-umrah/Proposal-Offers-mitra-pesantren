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
      <div className="px-6 mb-8 flex justify-center">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src="/rem.png"
            alt="Logo"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      </div>

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
