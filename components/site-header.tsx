"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FishSymbol, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "/#produk" },
  { label: "Keunggulan", href: "/#keunggulan" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Kontak", href: "/#kontak" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-[#031726]/70 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 p-2">
            <FishSymbol className="h-5 w-5 text-emerald-300" />
          </span>
          <div>
            <p className="text-sm font-bold tracking-wide">LeleKuy Farm</p>
            <p className="text-[11px] text-cyan-100/70">Since 2020 • Premium Aquaculture</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/about" ? pathname === "/about" : false;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-cyan-100/80 transition-all hover:bg-white/10 hover:text-white",
                  isActive && "bg-gradient-to-r from-cyan-500/70 to-emerald-500/70 text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/20 p-2 text-cyan-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/15 bg-[#041d2f]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2 text-sm font-medium text-cyan-100/90 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
