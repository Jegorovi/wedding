import { Lang } from "./context";

interface TranslationFields {
  title: string;
  and: string;
  latviaEvent: string;
  portugalEvent: string;
  finlandEvent: string;
  saveTheDate: string;
}

export const translations: Record<Lang, TranslationFields> = {
  [Lang.en]: {
    title: "Wedding{}of",
    and: "and",
    saveTheDate: "Save the date!",
    latviaEvent: "Saturday, 04/07/2020 - Party | Latvia",
    portugalEvent: "Saturday, 18/07/2020 - Dinner | Portugal",
    finlandEvent: "Saturday, 11/07/2020 - Dinner | Finland",
  },
  [Lang.se]: {
    title: "Wedding{}of",
    and: "and",
    saveTheDate: "Save the date!",
    latviaEvent: "Saturday, 04/07/2020 - Party | Latvia",
    portugalEvent: "Saturday, 18/07/2020 - Dinner | Portugal",
    finlandEvent: "Saturday, 11/07/2020 - Dinner | Finland",
  },
  [Lang.pt]: {
    title: "Wedding{}of",
    and: "and",
    saveTheDate: "Save the date!",
    latviaEvent: "Saturday, 04/07/2020 - Party | Latvia",
    portugalEvent: "Saturday, 18/07/2020 - Dinner | Portugal",
    finlandEvent: "Saturday, 11/07/2020 - Dinner | Finland",
  },
  [Lang.lv]: {
    title: "Kāzas",
    and: "un",
    saveTheDate: "Save the date!",
    latviaEvent: "Sestdien, 04/07/2020 - Party | Latvia",
    portugalEvent: "Sestdien, 18/07/2020 - Dinner | Portugal",
    finlandEvent: "Sestdien, 11/07/2020 - Dinner | Finland",
  },
  [Lang.ru]: {
    title: "Wedding{}of",
    and: "and",
    saveTheDate: "Save the date!",
    latviaEvent: "Saturday, 04/07/2020 - Party | Latvia",
    portugalEvent: "Saturday, 18/07/2020 - Dinner | Portugal",
    finlandEvent: "Saturday, 11/07/2020 - Dinner | Finland",
  },
}

export const translate = (value: string, placeholder: any) => {
  return value.replace("{}", placeholder);
}