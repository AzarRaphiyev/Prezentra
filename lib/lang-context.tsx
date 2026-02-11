"use client";

import React from "react"

import { createContext, useContext } from "react";
import type { Lang } from "./i18n";

const LangContext = createContext<Lang>("AZ");

export function LangProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
