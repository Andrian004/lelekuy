"use client";

import { motion } from "framer-motion";
import { BadgeCheck, HandCoins, Recycle, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

const features = [
  { icon: BadgeCheck, title: "Kualitas Unggul", text: "Seleksi ketat untuk tiap tahap produksi." },
  { icon: Shield, title: "Proses Higienis", text: "SOP sanitasi dan kontrol kualitas air terpantau." },
  { icon: Recycle, title: "Ramah Lingkungan", text: "Model pakan dan limbah berbasis ekonomi sirkular." },
  { icon: HandCoins, title: "Harga Kompetitif", text: "Nilai terbaik untuk skala kecil hingga besar." }
];

export function WhyUsSection() {
  return (
    <AnimatedSection id="keunggulan" className="px-6 py-20 md:px-12 lg:px-20">
      <SectionHeading
        eyebrow="Keunggulan"
        title="Kenapa Mitra Memilih Kami"
        description="Kami menggabungkan ketelitian budidaya tradisional dengan pendekatan modern berbasis data."
      />

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.45 }}
            className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"
          >
            <feature.icon className="mb-4 h-8 w-8 text-cyan-300" />
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-cyan-100/85">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
