"use client"

import { Card } from "@/components/ui/card"

export function Team() {
  const team = [
    {
      name: "Habib Arifin Makhtum",
      role: "Founder & Director",
      image: "/professional-portrait-man.jpg",
    },
    {
      name: "Hannan Nur Ridwan Fauzi, Lc.",
      role: "Co-Founder & Owner",
      image: "/professional-portrait-man.jpg",
    },
    {
      name: "Muhammad, S.T.",
      role: "Tour Leader",
      image: "/professional-portrait-man.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tim <span className="text-primary">Rehlatours</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Profesional berpengalaman dalam pengelolaan umrah dan haji khusus
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card key={idx} className="overflow-hidden border-border hover:border-primary/50 transition-all">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mt-1">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-bold text-foreground mb-4">Dukungan untuk Mitra Pesantren</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-foreground mb-3">Rehlatours.id mendampingi setiap langkah:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Materi promosi siap pakai (poster, brosur digital, video)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Training singkat untuk ustadz/ustadzah</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Grup WhatsApp khusus mitra</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Admin support untuk follow-up jamaah</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pesantren dapat tetap fokus pada dakwah dan pendidikan, sementara teknis perjalanan ditangani oleh tim
                Rehlatours.id yang profesional dan berpengalaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
