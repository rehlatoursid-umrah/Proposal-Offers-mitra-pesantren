"use client"

import { Check } from "lucide-react"

export function About() {
  const values = [
    {
      title: "Amanah",
      description: "Menjaga kepercayaan jamaah dan mitra dengan pelayanan yang jujur dan transparan",
    },
    {
      title: "Legal",
      description: "Memastikan seluruh keberangkatan sesuai dengan regulasi pemerintah melalui PIHK resmi",
    },
    {
      title: "Nyaman",
      description: "Menciptakan pengalaman ibadah yang tenang, tertib, dan berkesan",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Tentang <span className="text-primary">Rehlatours.id</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Rehlatours.id adalah brand travel halal yang berpusat di Bandung, Jawa Barat, dengan visi menghadirkan
              perjalanan ibadah yang amanah, legal, dan nyaman bagi umat Islam di seluruh Indonesia.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Kami bermitra langsung dengan PIHK (Penyelenggara Ibadah Haji & Umroh) resmi berizin Kementerian Agama RI.
              Hal ini menjadi jaminan bahwa seluruh perjalanan jamaah kami fasilitasi berjalan sesuai aturan pemerintah
              dan terjamin legalitasnya.
            </p>

            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🕌</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Pusat Pendidikan & Dakwah</h3>
              <p className="text-sm text-muted-foreground">
                Mendukung pesantren dalam memfasilitasi ibadah umrah dengan pendampingan profesional
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Berizin Resmi</h3>
              <p className="text-sm text-muted-foreground">Bermitra dengan PIHK berlisensi Kementerian Agama RI</p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Kepercayaan Jamaah</h3>
              <p className="text-sm text-muted-foreground">
                500+ jamaah telah merasakan pengalaman ibadah berkah bersama kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
