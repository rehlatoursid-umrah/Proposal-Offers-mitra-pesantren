"use client";

import { SidebarNav } from "@/components/sidebar-nav";
import { ProposalHeader } from "@/components/proposal-header";
import { Fleet } from "@/components/fleet";

export default function Home() {
  return (
    <div className="flex min-h-screen relative overflow-y-auto bg-background">
      {/* ✈️ Background animasi pesawat */}
      <div className="bg-floating-icons pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <svg
            key={i}
            className="icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2 16l9-4-9-4v3l7 1-7 1v3zm19-5h-7l-2-5h-2l1 5h-5v2h5l-1 5h2l2-5h7v-2z" />
          </svg>
        ))}
      </div>

      <SidebarNav />

      <main className="flex-1 ml-64 relative z-10">
        {/* === Semua konten utama dimulai di sini === */}
        <ProposalHeader />

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
            {[ /* ... daftar paket seperti di kodenya kamu ... */ ]}
          </div>
        </section>

        {/* MENGAPA PESANTREN */}
        <section id="why-pesantren" className="py-16 px-8 bg-card border-t border-border">
          {/* ... isi sama seperti sebelumnya ... */}
        </section>

        {/* SKEMA KOMISI */}
        <section id="commission" className="py-16 px-8 border-t border-border">
          {/* ... isi sama seperti sebelumnya ... */}
        </section>

        {/* FLEET */}
        <Fleet />

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-16 px-8 bg-card border-t border-border">
          {/* ... isi sama seperti sebelumnya ... */}
        </section>

        {/* TIM KAMI */}
        <section id="team" className="py-16 px-8 border-t border-border">
          {/* ... isi sama seperti sebelumnya ... */}
        </section>

        {/* LANGKAH BERIKUTNYA */}
        <section
          id="next-steps"
          className="py-16 px-8 bg-primary text-primary-foreground border-t border-border"
        >
          {/* ... isi sama seperti sebelumnya ... */}
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
      </main>
    </div>
  );
}
