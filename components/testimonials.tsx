"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Hana Fatimah, S.Gz., M.Gz",
      text: "Pengalaman umroh backpacker yang bikin ketagihan mau lagi dan lagi! Kalau di rehlatours kita gaperlu ribet ngurus ini itu. Sebelum berangkat ada tim dari rehla yang bantu kolektifin dari mulai tiket pesawat, hotel, visa, dll.",
      highlight: "Umroh berkali-kali dengan fleksibel dan murah",
      rating: 5,
    },
    {
      name: "Reviani Lestari, S.P.",
      text: "Alhamdulillah Allah pertemukan saya dengan rehlatour. Di awal saya sudah tertarik karena rehlatour pakai metode backpacker. Mulai dari persiapan sampai pulang, saya mendapatkan layanan yang memuaskan.",
      highlight: "Fasilitas yang diberikan juga worth it",
      rating: 5,
    },
    {
      name: "Bapak Mulyadi",
      text: "Dengan konsep Umroh Backpacker, pengalaman ini jadi ibadah paling seru dan bermakna dalam hidup saya. Perjalanan bareng Rehlatour tetap nyaman dan terorganisir dengan baik.",
      highlight: "Friendly, fleksibel, dan pas untuk anak muda",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Apa Kata <span className="text-primary">Mereka?</span>
          </h2>
          <p className="text-lg text-muted-foreground">Pengalaman nyata dari jamaah Rehlatours</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8 border-border hover:border-primary/50 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{testimonial.text}</p>

              <div className="bg-primary/10 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-primary">"{testimonial.highlight}"</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
