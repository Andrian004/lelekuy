import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <AnimatedSection id="tentang" className="px-6 py-20 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Tentang Kami"
        title="Dari Kolam Lokal ke Standar Premium"
        description="Perjalanan kami dimulai dari semangat membangun budidaya lele yang lebih sehat, terukur, dan bernilai tinggi."
      />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-cyan-50 shadow-2xl backdrop-blur-xl">
          <p className="text-lg leading-relaxed text-cyan-100/90">
            Kami percaya ketahanan pangan dimulai dari budidaya yang bertanggung jawab. Karena itu, setiap siklus produksi
            lele konsumsi, benih, hingga maggot feed dijalankan dengan quality control ketat, monitoring kualitas air, dan
            praktik higienis berlapis.
          </p>
          <p className="mt-6 leading-relaxed text-cyan-100/80">
            Visi kami sederhana: membawa peternakan tradisional ke era modern—lebih efisien, lebih ramah lingkungan, dan
            memberi hasil yang konsisten bagi mitra petani maupun konsumen.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-emerald-300/30">
          <Image
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1400&q=80"
            alt="Kolam budidaya lele modern"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031620]/80 via-transparent to-transparent" />
        </div>
      </div>
    </AnimatedSection>
  );
}
