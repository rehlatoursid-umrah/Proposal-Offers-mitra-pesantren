export function ProposalHeader() {
  return (
    <div className="relative bg-primary text-primary-foreground py-16 px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="/kaaba-masjidil-haram-holy-mosque.jpg" alt="Holy Mosque Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-balance">INTRODUCTION</h1>
        <p className="text-xl mt-6 opacity-90 leading-relaxed max-w-2xl">
          Bersama Pesantren, mewujudkan perjalanan suci yang mudah & aman dengan Rehlatours.id
        </p>
      </div>
    </div>
  )
}
