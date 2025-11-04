"use client"

import { Users, TrendingUp, Heart } from "lucide-react"

export function WhyPesantren() {
  const reasons = [
    {
      icon: Heart,
      title: "Pusat Pendidikan & Dakwah Umat",
      description:
        "Pesantren menjadi tempat lahirnya ilmu, akhlak, dan dakwah yang membawa manfaat luas bagi masyarakat",
    },
    {
      icon: Users,
      title: "Basis Jamaah yang Kuat",
      description:
        "Dengan santri, wali santri, alumni, dan simpatisan, pesantren memiliki jaringan potensial untuk difasilitasi dalam keberangkatan ibadah umroh",
    },
    {
      icon: TrendingUp,
      title: "Tingkat Kepercayaan Tinggi",
      description:
        "Pesantren dipandang sebagai lembaga amanah, sehingga jamaah merasa lebih tenang bila keberangkatannya melalui rekomendasi pesantren",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Kenapa Harus <span className="text-primary">Pesantren?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pesantren memiliki posisi istimewa dalam ekosistem umat Islam
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Melalui Program Affiliate Rehlatours.id</h3>
          <ul className="text-lg space-y-3 mb-6 max-w-2xl mx-auto">
            <li className="flex items-center justify-center gap-3">
              <span className="text-accent">✓</span>
              Pesantren dapat memfasilitasi ibadah jamaah menuju tanah suci dengan mudah dan aman
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-accent">✓</span>
              Pesantren memperoleh manfaat finansial nyata untuk mendukung dakwah dan pendidikan
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-accent">✓</span>
              Kerjasama menjadi jalan keberkahan bersama, menguatkan peran pesantren
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
