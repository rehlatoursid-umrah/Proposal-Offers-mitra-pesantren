"use client"

import { Card } from "@/components/ui/card"
import { Users, Package, Briefcase } from "lucide-react"

export function Fleet() {
  const vehicles = [
    {
      name: "Sedan camry /setaraf",
      seats: 2,
      smallBaggage: 2,
      largeBaggage: 2,
      count: 4,
      image: "/sedan.png",
    },
    {
      name: "Hyundai h1/ Hiece",
      seats: 7,
      smallBaggage: 7,
      largeBaggage: 7,
      count: 7,
      image: "/h1.png",
    },
    {
      name: "Hyundai staria",
      seats: 5,
      smallBaggage: 5,
      largeBaggage: 5,
      count: 5,
      image: "/staria.png",
    },
    {
      name: "suv GMC",
      seats: 4,
      smallBaggage: 4,
      largeBaggage: 4,
      count: 4,
      image: "/gmc.png",
    },
    {
      name: "Toyota Coaster",
      seats: 16,
      smallBaggage: 16,
      largeBaggage: 16,
      count: 16,
      image: "/Coaster.png",
    },
    {
      name: "Big Bus Mercy",
      seats: 45,
      smallBaggage: 45,
      largeBaggage: 45,
      count: 45,
      image: "/bis_.png",
    },
  ]

  const hotelsByCity = [
    {
      city: "Cairo, Egypt",
      category: "Mesir",
      hotels: [
        {
          name: "Indiana Hotel Cairo",
          image: "/hotel-indiana-cairo.jpg",
        },
        {
          name: "Meshk Airport Hotel",
          image: "/hotel-meshk-airport-cairo.jpg",
        },
        {
          name: "Hotel New One Cairo",
          image: "/hotel-new-one-cairo.jpg",
        },
      ],
    },
    {
      city: "Istanbul, Turkey",
      category: "Turki",
      hotels: [
        {
          name: "Paradise Boutique Hotel",
          image: "/hotel-paradise-boutique-istanbul.jpg",
        },
        {
          name: "Intercity Airport Hotel",
          image: "/hotel-intercity-airport-istanbul.jpg",
        },
        {
          name: "Turkish Heritage Hotel",
          image: "/hotel-turkish-heritage-istanbul.jpg",
        },
      ],
    },
    {
      city: "Makkah, Saudi Arabia",
      category: "Makkah",
      hotels: [
        {
          name: "Mahd Alresala Hotel",
          image: "/hotel-mahd-alresala-makkah.jpg",
        },
        {
          name: "Grand Zowar Hotel",
          image: "/hotel-grand-zowar-makkah.jpg",
        },
        {
          name: "Emaar Elite Hotel",
          image: "/hotel-emaar-elite-makkah.jpg",
        },
      ],
    },
    {
      city: "Madinah, Saudi Arabia",
      category: "Madinah",
      hotels: [
        {
          name: "Sidra Alia Aldahabi",
          image: "/hotel-sidra-alia-aldahabi-madinah.jpg",
        },
        {
          name: "Hilltown Airport Hotel",
          image: "/hotel-hilltown-airport-madinah.jpg",
        },
        {
          name: "Artal Taeba Hotel",
          image: "/hotel-artal-taeba-madinah.jpg",
        },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Armada <span className="text-primary">&</span> Akomodasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fasilitas premium dan standar internasional untuk kenyamanan perjalanan ibadah Anda
          </p>
        </div>

        {/* Vehicles Gallery */}
        <div className="mb-20">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-2">Armada Kendaraan Kami</h3>
            <p className="text-muted-foreground">6 jenis kendaraan premium dengan berbagai kapasitas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="h-40 bg-muted overflow-hidden">
                  <img
                    src={vehicle.image || `/placeholder.svg?height=160&width=300&query=${vehicle.name}`}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">{vehicle.name}</h4>

                  <div className="space-y-3">
                    {/* Seats */}
                    <div className="flex items-center gap-3 pb-3 border-b border-border">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Kapasitas Penumpang</p>
                        <p className="font-semibold text-foreground">{vehicle.seats} Kursi</p>
                      </div>
                    </div>

                    {/* Small Baggage */}
                    <div className="flex items-center gap-3 pb-3 border-b border-border">
                      <Briefcase className="w-5 h-5 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Bagasi Kecil</p>
                        <p className="font-semibold text-foreground">{vehicle.smallBaggage} Kompartemen</p>
                      </div>
                    </div>

                    {/* Large Baggage */}
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Bagasi Besar</p>
                        <p className="font-semibold text-foreground">{vehicle.largeBaggage} Kompartemen</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">{vehicle.count} Unit Tersedia</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-primary/10 rounded-lg p-6 border border-primary/20 text-center">
            <p className="text-foreground font-semibold mb-2">Standar Kualitas Armada</p>
            <p className="text-sm text-muted-foreground">
              ✓ AC Premium | ✓ Standar Keamanan Internasional | ✓ Pengemudi Berpengalaman | ✓ Perawatan Rutin
            </p>
          </div>
        </div>

        {/* Hotels Gallery */}
        <div>
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-2">Hotel Mitra Pilihan</h3>
            <p className="text-muted-foreground">12 hotel berkualitas di 4 kota destinasi utama</p>
          </div>

          <div className="space-y-12">
            {hotelsByCity.map((location, idx) => (
              <div key={idx}>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">{location.category}</p>
                  <h3 className="text-2xl font-bold text-foreground">{location.city}</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {location.hotels.map((hotel, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                      <div className="h-40 bg-muted overflow-hidden">
                        <img
                          src={hotel.image || `/placeholder.svg?height=160&width=300&query=${hotel.name} hotel`}
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-foreground mb-3">{hotel.name}</h4>
                        <div className="flex gap-2 text-xs text-muted-foreground">
                          <span>✓ ★★★★</span>
                          <span>✓ Halal</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
