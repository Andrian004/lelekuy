"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-28 md:px-12 lg:px-20">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.35),transparent_35%),linear-gradient(to_bottom,#021827,#031d2f_35%,#0a2632)]" />
      <motion.div
        className="absolute -left-20 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/30 blur-[120px]"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-8 -z-10 h-72 w-72 rounded-full bg-emerald-400/25 blur-[110px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-emerald-300" />
          Future-Ready Freshwater Farming
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Lele Unggul, Pakan Berkualitas, Masa Depan Peternakan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-cyan-100/85"
        >
          Kami menghadirkan lele premium dan maggot feed berprotein tinggi lewat proses higienis, teknologi budidaya modern,
          dan semangat keberlanjutan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="lg">Lihat Produk</Button>
          <Button variant="secondary" size="lg">
            Hubungi Kami
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-2 text-sm text-cyan-100/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="h-4 w-4" /> Scroll untuk menjelajah
        </motion.div>
      </div>
    </section>
  );
}
