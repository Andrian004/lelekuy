import { MapPin, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <AnimatedSection id="kontak" className="px-6 py-20 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Kontak"
        title="Mari Tumbuh Bersama"
        description="Hubungi kami untuk pemesanan, konsultasi budidaya, dan kemitraan distribusi."
      />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
          <div className="space-y-4 text-cyan-100/90">
            <a href="https://wa.me/6281234567890" className="flex items-center gap-3 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-4 text-white">
              <MessageCircle className="h-5 w-5 text-emerald-300" /> WhatsApp: +62 812-3456-7890
            </a>
            <p className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-cyan-300" /> Telepon: (021) 555-1234
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-300" /> Jl. Budidaya Lestari No. 88, Jawa Barat
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Lokasi"
              src="https://maps.google.com/maps?q=Bandung&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
          <div className="space-y-4">
            <Input placeholder="Nama" />
            <Input placeholder="Nomor WhatsApp" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Ceritakan kebutuhan Anda..." />
            <Button className="w-full">Kirim Pesan</Button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
