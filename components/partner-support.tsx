"use client"

import { Card } from "@/components/ui/card"
import { FileText, Users, MessageSquare, BarChart3 } from "lucide-react"

export function PartnerSupport() {
  const supports = [
    {
      icon: FileText,
      title: "Materi Promosi Siap Pakai",
      items: ["Poster menarik", "Brosur digital", "Video promosi", "Caption media sosial"],
    },
    {
      icon: Users,
      title: "Training & Pendampingan",
      items: ["Training untuk ustadz", "Panduan marketing", "Best practices sharing", "Mentoring berkelanjutan"],
    },
    {
      icon: MessageSquare,
      title: "Komunikasi Mudah",
      items: ["Grup WhatsApp khusus", "Support team responsif", "Konsultasi gratis", "Respon cepat"],
    },
    {
      icon: BarChart3,
      title: "Transparansi Penuh",
      items: ["Laporan komprehensif", "Tracking jamaah real-time", "Perhitungan komisi jelas", "Dashboard akses"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Dukungan <span className="text-primary">untuk Mitra</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami tidak hanya menyediakan produk, tetapi ekosistem lengkap untuk kesuksesan pesantren
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {supports.map((support, idx) => {
            const Icon = support.icon
            return (
              <Card key={idx} className="p-8 border-border hover:border-primary/50 transition-all">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{support.title}</h3>
                <ul className="space-y-2">
                  {support.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
