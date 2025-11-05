"use client";

import { SidebarNav } from "@/components/sidebar-nav";
import { ProposalHeader } from "@/components/proposal-header";
import { Fleet } from "@/components/fleet";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-64">
        <ProposalHeader />

        <div className="max-w-4xl mx-auto">
          {/* TENTANG REHLATOURS */}
          <section id="about" className="py-16 px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <img
                  src="/professional-travel-agency-office-team-meeting.jpg"
                  alt="Rehlatours Team"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8">TENTANG REHLATOURS</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Rehlatours.id adalah brand travel halal yang berpusat di Bandung, Jawa Barat,
                  dengan visi menghadirkan perjalanan ibadah yang amanah, legal, dan nyaman bagi umat
                  Islam di seluruh Indonesia.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Amanah",
                  desc: "Menjaga kepercayaan jamaah dan mitra dengan pelayanan yang jujur dan transparan",
                },
                {
                  title: "Legal",
                  desc: "Memastikan seluruh keberangkatan sesuai dengan regulasi pemerintah melalui PIHK resmi",
                },
                {
                  title: "Nyaman",
                  desc: "Menciptakan pengalaman ibadah yang tenang, tertib, dan berkesan",
                },
              ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PAKET UMRAH PILIHAN */}
          <section id="packages" className="py-16 px-8 border-t border-border">
            <h2 className="text-4xl font-bold mb-8">PAKET UMRAH PILIHAN</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Umrah Reguler",
                  duration: "7 Malam 8 Hari",
                  price: "Hub. Admin",
                  features: [
                    "Tiket pesawat PP",
                    "Hotel ★★★★",
                    "Mutawwif Berpengalaman",
                    "Transportasi Lengkap",
                    "Manasik Online",
                  ],
                  image: "/masjid-haram-makkah-umrah-pilgrimage-kaaba.jpg",
                },
                {
                  name: "Umrah Plus Mesir",
                  duration: "11 Malam 12 Hari",
                  price: "Hub. Admin",
                  features: [
                    "Paket Reguler +",
                    "Visa Mesir Termasuk",
                    "Pemandu Wisata",
                    "Piramida & Museum",
                    "Air Zamzam 5L",
                  ],
                  image: "/piramida-giza-kairo-mesir-ancient-egypt.jpg",
                },
                {
                  name: "Umrah Plus Turki",
                  duration: "11 Malam 12 Hari",
                  price: "Hub. Admin",
                  features: [
                    "Paket Reguler +",
                    "e-Visa Turki",
                    "City Tour Istanbul",
                    "Masjid Biru & Hagia Sophia",
                    "Kapal Bosporus",
                  ],
                  image: "/masjid-biru-blue-mosque-istanbul-turki.jpg",
                },
              ].map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-40 overflow-hidden bg-muted">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.duration}</p>
                    <p className="text-2xl font-bold text-accent mb-6">{pkg.price}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MENGAPA PESANTREN */}
          <section id="why-pesantren" className="py-16 px-8 bg-card border-t border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">MENGAPA PESANTREN?</h2>
                {[
                  {
                    title: "Pusat Pendidikan & Dakwah Umat",
                    desc: "Pesantren menjadi tempat lahirnya ilmu, akhlak, dan dakwah yang membawa manfaat luas bagi masyarakat.",
                  },
                  {
                    title: "Memiliki Basis Jamaah yang Kuat",
                    desc: "Dengan adanya santri, wali santri, alumni, dan simpatisan, pesantren memiliki jaringan yang potensial untuk difasilitasi.",
                  },
                  {
                    title: "Tingkat Kepercayaan Tinggi di Masyarakat",
                    desc: "Pesantren dipandang sebagai lembaga yang amanah, sehingga jamaah merasa lebih tenang bila keberangkatannya melalui rekomendasi pesantren.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src="/pesantren-islamic-boarding-school-students-learnin.jpg"
                  alt="Pesantren"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* SKEMA KOMISI */}
          <section id="commission" className="py-16 px-8 border-t border-border">
            <h2 className="text-4xl font-bold mb-8">SKEMA KOMISI UNTUK PESANTREN</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src="/business-partnership-agreement-contract-profession.jpg"
                  alt="Kerjasama Pesantren"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Umrah Reguler</p>
                    <p className="text-3xl font-bold text-primary">Rp 1.000.000</p>
                    <p className="text-sm text-muted-foreground">per jamaah</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Umrah Plus (Turki, Mesir)</p>
                    <p className="text-3xl font-bold text-primary">Rp 1.500.000</p>
                    <p className="text-sm text-muted-foreground">per jamaah</p>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <p className="font-semibold mb-4">Contoh Simulasi:</p>
                  <p className="text-muted-foreground mb-4">
                    Apabila sebuah pesantren berhasil memberangkatkan 10 jamaah Umrah Reguler:
                  </p>
                  <p className="text-2xl font-bold text-accent">Rp 10.000.000</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Komisi yang diterima pesantren
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FLEET */}
          <Fleet />

          {/* TESTIMONIALS */}
          <section id="testimonials" className="py-16 px-8 bg-card border-t border-border">
            <h2 className="text-4xl font-bold mb-8">KATA MEREKA</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Hana Fatimah, S.Gz., M.Gz",
                  text: "Pengalaman umroh yang bikin ketagihan. Di rehlatours kita tidak perlu ribet ngurus.",
                  image: "/professional-woman-portrait.png",
                },
                {
                  name: "Reviani Lestari, S.P.",
                  text: "Rehlatour beda banget. Mulai dari persiapan sampai pulang, layanannya memuaskan.",
                  image: "/professional-woman-smiling-portrait.png",
                },
                {
                  name: "Bapak Mulyadi",
                  text: "Umroh dengan Rehlatour adalah ibadah paling seru dan bermakna dalam hidup saya.",
                  image: "/professional-man-portrait.png",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border rounded-lg overflow-hidden"
                >
                  <div className="h-40 bg-muted overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground italic mb-3 line-clamp-3">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TIM KAMI */}
          <section id="team" className="py-16 px-8 border-t border-border">
            <h2 className="text-4xl font-bold mb-8">TIM KAMI</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Habib Arifin Makhtum",
                  role: "Founder & Director",
                  image: "/professional-man-founder-director.jpg",
                },
                {
                  name: "Hannan Nur",
                  role: "Co-Founder",
                  image: "/professional-man-co-founder.jpg",
                },
                {
                  name: "Ridwan Fauzi, Lc.",
                  role: "Tour Leader",
                  image: "/professional-man-tour-guide.jpg",
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition"
                >
                  <div className="h-56 bg-muted overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LANGKAH BERIKUTNYA */}
          <section
            id="next-steps"
            className="py-16 px-8 bg-primary text-primary-foreground border-t border-border"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">LANGKAH BERIKUTNYA</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Hubungi Tim Kami",
                      desc: "Silakan hubungi kami untuk informasi lebih lanjut tentang program kemitraan pesantren.",
                    },
                    {
                      step: "02",
                      title: "Diskusi Program",
                      desc: "Kami akan membahas kebutuhan spesifik pesantren Anda dan solusi terbaik.",
                    },
                    {
                      step: "03",
                      title: "Mulai Kerjasama",
                      desc: "Bergabunglah dengan pesantren mitra lainnya dalam mewujudkan perjalanan suci yang bermakna.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-3xl font-bold opacity-50 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                        <p className="opacity-90">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Hubungi Kami
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>

              <div>
                <img
                  src="/partnership-collaboration-success-business-growth.jpg"
                  alt="Kemitraan Sukses"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="py-12 px-8 border-t border-border bg-card">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-4">Kontak</h4>
                <p className="text-sm text-muted-foreground">admin@rehlatours.id</p>
                <p className="text-sm text-muted-foreground">+62 831-9732-1658</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Alamat</h4>
                <p className="text-sm text-muted-foreground">
                  Permata Biru RW 001 RT 027 <br />
                  Desa Cinunuk, Kec. Cileunyi <br />
                  Kab. Bandung, Jawa Barat
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Tentang</h4>
                <p className="text-sm text-muted-foreground">
                  Travel halal & amanah yang berkomitmen menghadirkan perjalanan ibadah berkualitas
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 Rehlatours.id. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
        <style jsx global>{`
  body {
    background-color: white;
    background-image: radial-gradient(
      rgba(58, 5, 25, 0.2) 1px,
      transparent 1px
    );
    background-size: 40px 40px;
    animation: subtleMove 20s linear infinite;
  }

  @keyframes subtleMove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100px 100px;
    }
  }
`}</style>
    </div>
  );
}
