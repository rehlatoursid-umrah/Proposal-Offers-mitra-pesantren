"use client";

import { SidebarNav } from "@/components/sidebar-nav";
import { ProposalHeader } from "@/components/proposal-header";
import { Fleet } from "@/components/fleet";

export default function Page() {
  return (
    <div className="flex min-h-screen relative">
      {/* ✈️ Animasi pesawat di background */}
      <div className="bg-floating-icons absolute inset-0 -z-10 pointer-events-none">
        <svg className="icon" viewBox="0 0 24 24" fill="#3a0519" style={{ opacity: 0.35 }}>
          <path d="M2 16l9-4-9-4v3l7 1-7 1v3zm19-5h-7l-2-5h-2l1 5h-5v2h5l-1 5h2l2-5h7v-2z" />
        </svg>
        <svg className="icon" viewBox="0 0 24 24" fill="#3a0519" style={{ opacity: 0.35 }}>
          <path d="M2 16l9-4-9-4v3l7 1-7 1v3zm19-5h-7l-2-5h-2l1 5h-5v2h5l-1 5h2l2-5h7v-2z" />
        </svg>
        <svg className="icon" viewBox="0 0 24 24" fill="#3a0519" style={{ opacity: 0.35 }}>
          <path d="M2 16l9-4-9-4v3l7 1-7 1v3zm19-5h-7l-2-5h-2l1 5h-5v2h5l-1 5h2l2-5h7v-2z" />
        </svg>
        <svg className="icon" viewBox="0 0 24 24" fill="#3a0519" style={{ opacity: 0.35 }}>
          <path d="M2 16l9-4-9-4v3l7 1-7 1v3zm19-5h-7l-2-5h-2l1 5h-5v2h5l-1 5h2l2-5h7v-2z" />
        </svg>
      </div>

      {/* Konten utama */}
      <SidebarNav />
      <main className="flex-1 ml-64 relative z-10">
        <ProposalHeader />

        <div className="max-w-4xl mx-auto">
          {/* Semua section kamu di sini */}
          {/* ... (copy seluruh section kamu seperti TENTANG, PAKET, FLEET, TESTIMONIALS, TIM, FOOTER, dll) ... */}

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
    </div>
  );
}
