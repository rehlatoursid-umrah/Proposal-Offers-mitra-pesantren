import { SidebarNav } from "@/components/sidebar-nav"
import { ProposalHeader } from "@/components/proposal-header"
import { Fleet } from "@/components/fleet"

export default function Home() {
  return (
    <div
      className="flex min-h-screen bg-background relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff", // warna dasar putih
      }}
    >
      {/* BACKGROUND PATTERN ANIMASI */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none animate-[bgmove_20s_linear_infinite]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #3a0519 0,
            #3a0519 1px,
            transparent 1px,
            transparent 40px
          )`,
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      <SidebarNav />

      <main className="flex-1 ml-64 relative z-10">
        <ProposalHeader />

        <div className="max-w-4xl mx-auto">
          {/* Seluruh konten kamu tetap sama di sini */}
          {/* ... semua section tetap seperti sebelumnya ... */}
        </div>
      </main>

      {/* Tambahkan animasi keyframes di bawah */}
      <style jsx global>{`
        @keyframes bgmove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 80px 80px;
          }
        }
      `}</style>
    </div>
  )
}
