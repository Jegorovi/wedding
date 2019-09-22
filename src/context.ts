import { createContext } from "react";

export enum Lang {
  en = "en",
  pt = "pt",
  se = "se",
  lv = "lv",
  ru = "ru",
}

export const LanguageContext = createContext<Lang>(Lang.en);

export const LanguageContextProvider = LanguageContext.Provider;
