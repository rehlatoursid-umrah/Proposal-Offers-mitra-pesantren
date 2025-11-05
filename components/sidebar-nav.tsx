"use client"

import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
})

const navItems = [
  { id: "intro", label: "Introduction" },
  { id: "salam", label: "Hormat Kami" },
  { id: "program", label: "Program Kami" },
  { id: "kedudukan", label: "Kedudukan Pesantren" },
  { id: "komisi", label: "Skema Kerja Sama" },
  { id: "testimonials", label: "Apa Kata Mereka?" },
  { id: "armada", label: "Armada & Hotel" },
  { id: "team", label: "Tim Kami" },
  { id: "next-steps", label: "Lahkah Berikutnya" },
]

export function SidebarNav() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border overflow-y-auto pt-10">
      {/* LOGO */}
      <div className="pl-8 mb-4 flex items-start">
        <Image
          src="/rem.png"
          alt="Logo Rehlatours"
          width={170}     // ukuran logo tetap besar
          height={170}
          className="object-contain"
          priority
        />
      </div>

      {/* NAVIGATION */}
      <nav className={`space-y-1 pl-9 ${roboto.className}`}>
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
