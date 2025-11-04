"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/8 via-background to-accent/5 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Perjalanan Spiritual</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
          Umrah Berkah <span className="text-primary">Bersama Pesantren</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Rehlatours.id menghadirkan perjalanan umrah yang amanah, legal, dan terpercaya untuk seluruh umat Islam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Jadi Mitra
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 bg-transparent">
            Lihat Paket
          </Button>
        </div>
      </div>
    </section>
  )
}
