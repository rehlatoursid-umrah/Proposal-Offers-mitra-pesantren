"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Lock, FileCheck, Camera } from "lucide-react"

export function Trust() {
  const trustPoints = [
    {
      icon: CheckCircle,
      title: "Berizin Resmi via PIHK",
      description: "Seluruh keberangkatan difasilitasi melalui PIHK mitra resmi berizin Kementerian Agama RI",
    },
    {
      icon: Lock,
      title: "Pelayanan Standar Tinggi",
      description: "Fasilitas sesuai standar: tiket pesawat, hotel berbintang, konsumsi halal, transportasi nyaman",
    },
    {
      icon: FileCheck,
      title: "Transparansi untuk Mitra",
      description: "Laporan resmi jumlah jamaah dan hak komisi diberikan secara jelas dan akuntabel",
    },
    {
      icon: Camera,
      title: "Bukti Nyata di Lapangan",
      description: "Dokumentasi perjalanan dan testimoni jamaah sebagai bentuk pertanggungjawaban",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Bukti & <span className="text-primary">Kepercayaan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami terhadap amanah dan transparansi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <Card key={idx} className="p-8 border-border hover:border-primary/50 transition-all">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-foreground text-lg">
            Dengan sistem ini, Rehlatours.id tetap dapat menghadirkan layanan umrah yang
          </p>
          <p className="text-2xl font-bold text-foreground mt-2">aman, nyaman, dan penuh berkah</p>
        </div>
      </div>
    </section>
  )
}
