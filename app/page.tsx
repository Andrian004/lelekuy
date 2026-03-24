import { ContactSection } from "@/sections/contact-section";
import { CtaSection } from "@/sections/cta-section";
import { Footer } from "@/sections/footer";
import { GallerySection } from "@/sections/gallery-section";
import { HeroSection } from "@/sections/hero-section";
import { ProductsSection } from "@/sections/products-section";
import { WhyUsSection } from "@/sections/why-us-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03111f] pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <HeroSection />
      <ProductsSection />
      <WhyUsSection />
      <GallerySection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
