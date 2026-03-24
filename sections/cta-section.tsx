import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <AnimatedSection className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-emerald-200/20 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-orange-400/20 p-10 text-center shadow-2xl backdrop-blur-xl md:p-14">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Siap Panen Lebih Cepat & Lebih Untung?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-cyan-100/90">
          Konsultasikan kebutuhan lele konsumsi, benih, atau maggot feed Anda. Tim kami siap membantu skema terbaik untuk
          usaha Anda.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/#kontak">
            <Button size="lg">Pesan Sekarang</Button>
          </Link>
          <Link href="https://wa.me/6281234567890">
            <Button size="lg" variant="secondary">
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
