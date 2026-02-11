"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Clock } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/i18n";

const icons = [Sparkles, Zap, Clock];

export default function Campaigns() {
  const lang = useLang();
  const t = translations.campaigns;

  return (
    <section id="campaigns" className="relative py-24 md:py-32">
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

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {t.items.map((campaign, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className={`group relative overflow-hidden rounded-2xl border p-8 transition-shadow ${
                  campaign.highlight
                    ? "border-primary/40 bg-card shadow-[0_0_40px_-10px] shadow-primary/20"
                    : "border-border bg-card hover:shadow-[0_0_30px_-5px] hover:shadow-primary/10"
                }`}
              >
                {/* Badge */}
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    campaign.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {campaign.badge[lang]}
                </span>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">{campaign.title[lang]}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{campaign.description[lang]}</p>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                    campaign.highlight
                      ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                      : "border border-border bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  }`}
                >
                  {t.contactBtn[lang]}
                </a>

                {/* Gradient border for highlighted */}
                {campaign.highlight && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/20" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
