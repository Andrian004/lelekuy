import { FishSymbol } from "lucide-react";

const navs = ["Tentang", "Produk", "Keunggulan", "Galeri", "Kontak"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-white">
          <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 p-2">
            <FishSymbol className="h-5 w-5 text-emerald-300" />
          </span>
          <div>
            <p className="font-semibold">LeleKuy Farm</p>
            <p className="text-xs text-cyan-100/70">Premium Catfish & Sustainable Maggot Feed</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-4 text-sm text-cyan-100/80">
          {navs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
