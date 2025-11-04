"use client"

import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UmrahPackages() {
  const packages = [
    {
      name: "Umrah Reguler",
      duration: "7 Malam 8 Hari",
      price: "Harga Kompetitif",
      hotel: "★★★★ Setaraf",
      image: "/umrah-reguler-makkah-madinah.jpg",
      highlights: [
        "Tiket pesawat PP & visa Saudi",
        "Mutawwif profesional",
        "Transfer bandara & city tour",
        "Hotel + meals halal",
        "Ziarah lengkap",
        "Asuransi perjalanan",
      ],
      excludes: ["Passport", "Vaksin meningitis", "Kebutuhan pribadi"],
      featured: false,
    },
    {
      name: "Umrah Plus Mesir",
      duration: "11 Malam 12 Hari",
      price: "Investasi Berkah",
      hotel: "★★★★ Setaraf",
      image: "/piramida-giza-cairo-egypt.jpg",
      highlights: [
        "Tiket PP Jakarta - Jeddah - Kairo",
        "Visa Umrah & Mesir",
        "Mutawwif & tour guide bahasa Indonesia",
        "Ziarah lengkap Makkah & Madinah",
        "Kunjungan Piramida Giza, Sphinx",
        "Air zamzam 5L",
      ],
      excludes: ["Passport", "Vaksin meningitis", "Kebutuhan pribadi"],
      featured: true,
    },
    {
      name: "Umrah Plus Turki",
      duration: "11 Malam 12 Hari",
      price: "Paket Premium",
      hotel: "★★★★ Setaraf",
      image: "/istanbul-blue-mosque-turkey.jpg",
      highlights: [
        "Tiket PP Jakarta - Jeddah - Istanbul",
        "Visa Umrah & e-Visa Turki",
        "Mutawwif profesional",
        "City tour Istanbul premium",
        "Masjid Biru, Hagia Sophia, Grand Bazaar",
        "Air zamzam 5L",
      ],
      excludes: ["Passport", "Vaksin meningitis", "Kebutuhan pribadi"],
      featured: false,
    },
  ]

  return (
    <section id="packages" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Paket <span className="text-primary">Umrah Pilihan</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tiga paket unggulan dengan fasilitas premium dan harga kompetitif
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden transition-transform hover:scale-105 ${
                pkg.featured ? "md:scale-105 md:shadow-xl" : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
                  UNGGULAN
                </div>
              )}

              <Card className={`h-full flex flex-col ${pkg.featured ? "border-accent border-2" : "border-border"}`}>
                {/* Image */}
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-40 object-cover" />

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-2">{pkg.name}</h3>

                  <div className="space-y-1 mb-6">
                    <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                    <p className="text-sm text-muted-foreground">{pkg.hotel}</p>
                  </div>

                  {/* Highlights - condensed */}
                  <ul className="space-y-1 mb-6 flex-1">
                    {pkg.highlights.slice(0, 5).map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      pkg.featured
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "border-primary text-primary hover:bg-primary/5"
                    }`}
                    size="sm"
                  >
                    Hubungi Kami
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
