import { Lang } from "./context";

interface TranslationFields {
  title: string;
  and: string;
  latviaEvent: string;
  portugalEvent: string;
  finlandEvent: string;
  latviaEventShort: string;
  portugalEventShort: string;
  finlandEventShort: string;
  latviaEventDesc: string;
  portugalEventDesc: string;
  finlandEventDesc: string;
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
    latviaEventShort: "Party in Latvia",
    portugalEventShort: "Dinner in Portugal",
    finlandEventShort: "Dinner in Finland",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

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
    latviaEventShort: "Fest i Lettland",
    portugalEventShort: "Middag i Portugal",
    finlandEventShort: "Middag i Finland",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

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
    latviaEventShort: "Festa na Letônia",
    portugalEventShort: "Jantar em Portugal",
    finlandEventShort: "Jantar na Finlândia",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

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
    latviaEventShort: "Ballīte Latvijā",
    portugalEventShort: "Vakariņas Portugālē",
    finlandEventShort: "Vakariņas Somija",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

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
    latviaEventShort: "Вечеринка в Латвии",
    portugalEventShort: "Ужин в Португалии",
    finlandEventShort: "Ужин в Финляндии",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

    sara: "Сары Нурдмир да Кунья",
    roland: "Роланда Егорова",
  },
}

export const translate = (value: string, placeholder: any) => {
  return value.replace("{}", placeholder);
}
