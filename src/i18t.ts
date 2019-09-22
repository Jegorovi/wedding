import { Lang } from "./context";

interface TranslationFields {
  title: string;
  and: string;
  latviaEvent: string;
  portugalEvent: string;
  finlandEvent: string;
  saveTheDate: string;
  sara: string;
  roland: string;
}

export const translations: Record<Lang, TranslationFields> = {
  [Lang.en]: {
    title: "Wedding{}of",
    and: "and",
    saveTheDate: "Save the date!",
    latviaEvent: "Saturday, 04/07/2020 - Party | Latvia",
    portugalEvent: "Saturday, 18/07/2020 - Dinner | Portugal",
    finlandEvent: "Saturday, 11/07/2020 - Dinner | Finland",
    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",
  },
  [Lang.se]: {
    title: "Bröllop",
    and: "och",
    saveTheDate: "",
    latviaEvent: "Lördag, 04/07/2020 - Fest | Lettland",
    portugalEvent: "Lördag, 18/07/2020 - Middag | Portugal",
    finlandEvent: "Lördag, 11/07/2020 - Middag | Finland",
    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",
  },
  [Lang.pt]: {
    title: "Casamento{}de",
    and: "e",
    saveTheDate: "",
    latviaEvent: "Sábado, 04/07/2020 - Festa | Letônia",
    portugalEvent: "Sábado, 18/07/2020 - Jantar | Portugal",
    finlandEvent: "Sábado, 11/07/2020 - Jantar | Finlândia",
    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",
  },
  [Lang.lv]: {
    title: "Kāzas",
    and: "un",
    saveTheDate: "",
    latviaEvent: "Sestdiena, 04/07/2020 - Ballīte | Latvija",
    portugalEvent: "Sestdiena, 18/07/2020 - Vakariņas | Portugāle",
    finlandEvent: "Sestdiena, 11/07/2020 - Vakariņas | Somija",
    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",
  },
  [Lang.ru]: {
    title: "Свадьба",
    and: "и",
    saveTheDate: "",
    latviaEvent: "Суббота, 04/07/2020 - Вечеринка | Латвия",
    portugalEvent: "Суббота, 18/07/2020 - Ужин | Португалия",
    finlandEvent: "Суббота, 11/07/2020 - Ужин | Финляндия",
    sara: "Сары Нурдмир да Кунья",
    roland: "Роланда Егорова",
  },
}

export const translate = (value: string, placeholder: any) => {
  return value.replace("{}", placeholder);
}