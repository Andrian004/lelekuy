import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const images = [
  {
    src: "https://images.unsplash.com/photo-1554647286-f365d7defc2c?auto=format&fit=crop&w=1200&q=80",
    alt: "Kolam budidaya lele"
  },
  {
    src: "https://images.unsplash.com/photo-1570528812862-8af6869f4f83?auto=format&fit=crop&w=1200&q=80",
    alt: "Proses panen"
  },
  {
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    alt: "Produksi maggot"
  }
];

export function GallerySection() {
  return (
    <AnimatedSection id="galeri" className="px-6 py-20 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Galeri"
        title="Visual Budidaya yang Transparan"
        description="Lihat langsung bagaimana kami menjaga kualitas dari kolam hingga produk jadi."
      />

      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {images.map((image) => (
          <div key={image.src} className="group relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={image.src}
              alt={image.alt}
              width={700}
              height={500}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041b2d]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
