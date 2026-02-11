"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { LangProvider } from "@/lib/lang-context";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Campaigns from "@/components/campaigns";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  const [lang, setLang] = useState<Lang>("AZ");
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
  };

  return (
    <LangProvider lang={lang}>
      <main className="min-h-screen">
        <Navbar
          lang={lang}
          setLang={setLang}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />
        <Hero />
        <Services />
        <Portfolio />
        <Campaigns />
        <Contact />
        <Footer />
      </main>
    </LangProvider>
  );
}
