"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/i18n";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const lang = useLang();
  const t = translations.contact;

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("Mesaj göndərildi");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("Xəta oldu");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              {t.badge[lang]}
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {t.title[lang]}
            </h2>

            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              {t.subtitle[lang]}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.emailLabel[lang]}</p>
                  <p className="font-medium text-foreground">Prezentra@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.addressLabel[lang]}</p>
                  <p className="font-medium text-foreground">{t.address[lang]}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8"
          >
            <FloatingInput id="name" name="name" label={t.formName[lang]} />
            <FloatingInput id="email" name="email" type="email" label={t.formEmail[lang]} />
            <FloatingInput id="subject" name="subject" label={t.formSubject[lang]} />
            <FloatingInput id="message" name="message" textarea label={t.formMessage[lang]} />

            <motion.button
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60"
            >
              {loading ? "Sending..." : t.formSubmit[lang]}
              <Send className="h-4 w-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function FloatingInput({
  id,
  name,
  label,
  type = "text",
  textarea = false,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value.length > 0;

  const shared =
    "peer w-full rounded-xl border border-border bg-secondary/50 px-4 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          className={`${shared} pt-6 pb-2 resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={`${shared} h-14 pt-5 pb-1`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      )}

      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all ${
          isActive
            ? "top-2 text-xs text-primary"
            : textarea
            ? "top-4 text-sm text-muted-foreground"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
