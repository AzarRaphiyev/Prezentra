"use client";

import { motion } from "framer-motion";
import { Presentation, Globe } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/i18n";

const icons = [Presentation, Globe];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  const lang = useLang();
  const t = translations.services;

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            {t.badge[lang]}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.title[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t.subtitle[lang]}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {t.items.map((service, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[0_0_30px_-5px] hover:shadow-primary/15 md:p-10"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-foreground">{service.title[lang]}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{service.description[lang]}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features[lang].map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
