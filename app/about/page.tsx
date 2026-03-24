import Link from "next/link";
import { ArrowRight, Fish, Leaf, TimerReset } from "lucide-react";
import { Footer } from "@/sections/footer";

const milestones = [
  {
    year: "2020",
    title: "LeleKuy Farm Berdiri",
    desc: "Dimulai dari kolam skala kecil dengan fokus pada lele konsumsi berkualitas premium."
  },
  {
    year: "2022",
    title: "Ekspansi Benih & QC",
    desc: "Membangun sistem seleksi benih dan monitoring air terstandar untuk menjaga survival rate."
  },
  {
    year: "2024",
    title: "Produksi Maggot Feed",
    desc: "Mengembangkan pakan alternatif berprotein tinggi yang lebih berkelanjutan dan efisien."
  },
  {
    year: "2026",
    title: "Kemitraan & Distribusi",
    desc: "Menjangkau lebih banyak mitra peternak dan pasar dengan sistem distribusi lebih modern."
  }
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03111f] pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_85%_0%,rgba(16,185,129,0.25),transparent_35%),linear-gradient(to_bottom,#021a2b,#031726_35%,#041522)]" />

      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-xl md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">About Us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Bertumbuh Sejak 2020, Membangun Masa Depan Budidaya Lele yang Lebih Cerdas
          </h1>
          <p className="mt-6 max-w-3xl text-cyan-100/85">
            LeleKuy Farm lahir pada tahun <strong>2020</strong> dari misi sederhana: menghasilkan lele premium dengan proses
            yang lebih higienis, efisien, dan berkelanjutan. Hari ini, kami terus berkembang dengan inovasi pada benih, manajemen
            budidaya, dan produksi maggot feed sebagai sumber protein masa depan.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#produk"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02]"
            >
              Lihat Produk <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#kontak"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Diskusi Kemitraan
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <Fish className="h-8 w-8 text-cyan-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">Catfish Excellence</h3>
            <p className="mt-2 text-cyan-100/85">Kualitas lele konsisten melalui kontrol pakan, air, dan kesehatan ikan.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <Leaf className="h-8 w-8 text-emerald-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">Sustainable Feed</h3>
            <p className="mt-2 text-cyan-100/85">Maggot feed sebagai solusi protein tinggi yang lebih ramah lingkungan.</p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <TimerReset className="h-8 w-8 text-orange-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">Continuous Growth</h3>
            <p className="mt-2 text-cyan-100/85">Sejak 2020, kami bertumbuh bersama mitra melalui inovasi berkelanjutan.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-xl md:p-10">
          <h2 className="text-3xl font-bold text-white">Perjalanan Kami</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {milestones.map((item) => (
              <article key={item.year} className="rounded-2xl border border-cyan-200/20 bg-[#07263a]/70 p-5">
                <p className="text-sm font-semibold text-emerald-300">{item.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-cyan-100/85">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
