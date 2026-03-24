"use client";

import { motion } from "framer-motion";
import { Fish, Leaf, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const products = [
  {
    icon: Fish,
    title: "Lele Konsumsi",
    description: "Lele segar, padat daging, dan terjaga higienitasnya dari panen hingga distribusi.",
    points: ["Ukuran seragam", "Fresh harian", "Standar sanitasi tinggi"]
  },
  {
    icon: ShieldCheck,
    title: "Benih Lele (Bibit)",
    description: "Benih ber-genetik kuat dengan tingkat survival rate tinggi untuk hasil panen optimal.",
    points: ["Pertumbuhan stabil", "Seleksi indukan", "Pendampingan budidaya"]
  },
  {
    icon: Leaf,
    title: "Maggot Feed",
    description: "Sumber protein alternatif berkelanjutan untuk lele, ayam, dan ternak lainnya.",
    points: ["Protein tinggi", "Eco-friendly", "Efisiensi biaya pakan"]
  }
];

export function ProductsSection() {
  return (
    <AnimatedSection id="produk" className="px-6 py-20 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Produk"
        title="Solusi Budidaya dari Hulu ke Hilir"
        description="Tiga lini utama kami dirancang untuk menjaga performa ternak dan profitabilitas usaha Anda."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="group relative h-full overflow-hidden transition-all hover:border-emerald-300/40 hover:shadow-glow">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/25 blur-3xl transition-opacity group-hover:opacity-100" />
              <product.icon className="mb-4 h-10 w-10 text-emerald-300" />
              <CardTitle>{product.title}</CardTitle>
              <CardDescription className="mt-3 text-sm leading-relaxed">{product.description}</CardDescription>
              <ul className="mt-6 space-y-2 text-sm text-cyan-100/90">
                {product.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
