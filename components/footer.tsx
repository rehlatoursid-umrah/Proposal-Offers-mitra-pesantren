"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="bg-primary-foreground/10 rounded-2xl p-12 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Mari Bersama Memudahkan Umat</h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Dengan bergabung dalam program afiliasi Rehlatours.id, pesantren tidak hanya menjadi pembimbing spiritual,
            tetapi juga penyedia solusi perjalanan umrah yang aman, nyaman, dan sesuai syariah.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold">
            Hubungi Kami Sekarang
          </Button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-primary-foreground/20">
          <div>
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Lokasi
            </h3>
            <p className="text-sm opacity-90">
              Permata Biru, Cinunuk
              <br />
              Cileunyi, Bandung
              <br />
              Jawa Barat
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Hubungi
            </h3>
            <p className="text-sm opacity-90">
              <a href="tel:+628319732165 8" className="hover:underline">
                +62 831-9732-1658
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email
            </h3>
            <p className="text-sm opacity-90">
              <a href="mailto:admin@rehlatours.id" className="hover:underline">
                admin@rehlatours.id
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-sm opacity-90">
          <p className="mb-2">© 2025 Rehlatours.id - Travel Halal & Amanah</p>
        </div>
      </div>
    </footer>
  )
}
