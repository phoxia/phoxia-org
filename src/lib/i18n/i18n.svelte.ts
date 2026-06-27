import en from "./en-US.locales";
import ptBR from "./pt-BR.locales";
import type { LocaleShape } from "./types";

const LANG_KEY = "phoxia-lang";

const translations: Record<string, LocaleShape> = {
  en,
  "pt-BR": ptBR,
};

function readStoredLang(): string {
  if (typeof localStorage === "undefined") return "";
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && translations[stored]) return stored;
  return "";
}

function detectBrowserLang(): string {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.split("-")[0];
  if (lang === "pt") return "pt-BR";
  return "en";
}

function initLang(): string {
  if (typeof window === "undefined") return "en";
  return readStoredLang() || detectBrowserLang();
}

let _lang = $state(initLang());

export function getLang(): string {
  return _lang;
}

export function setLang(lang: string) {
  if (!translations[lang]) return;
  _lang = lang;
  if (typeof localStorage !== "undefined") localStorage.setItem(LANG_KEY, lang);
}

export function cycleLang() {
  setLang(_lang === "en" ? "pt-BR" : "en");
}

export function t(): LocaleShape {
  return translations[_lang] ?? translations["en"];
}
