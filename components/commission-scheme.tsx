"use client"

import { Card } from "@/components/ui/card"

export function CommissionScheme() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Komisi <span className="text-primary">untuk Pesantren</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Skema insentif transparan yang menguntungkan</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Commission Structure */}
          <div className="space-y-4">
            <Card className="p-6 border-primary border-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground">Umrah Reguler</p>
                <p className="text-lg font-bold text-primary">Rp 1.000.000</p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Per jamaah</p>
            </Card>

            <Card className="p-6 border-accent border-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground">Umrah Plus</p>
                <p className="text-lg font-bold text-accent">Rp 1.500.000</p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Per jamaah</p>
            </Card>
          </div>

          {/* Simulation */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-background border-primary/50">
            <h3 className="text-lg font-bold text-foreground mb-6">Contoh Simulasi</h3>
            <p className="text-sm text-muted-foreground mb-4">Pesantren memberangkatkan 10 jamaah Umrah Reguler</p>
            <div className="bg-background rounded-lg p-4 border-l-4 border-accent mb-4">
              <p className="text-xs text-muted-foreground mb-1">Total Komisi</p>
              <p className="text-3xl font-bold text-primary">Rp 10 Juta</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Untuk mendukung kegiatan dakwah, pendidikan, dan pemberdayaan umat
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
