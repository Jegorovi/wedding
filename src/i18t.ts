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
  giftCard: string;
  travelCard: string;
  foodCard: string;
}

export const translations: Record<Lang, TranslationFields> = {
  [Lang.en]: {
    title: "Wedding{}of",
    and: "and",
    saveTheDate: "Save the date!",
    latviaEvent: "Saturday, 20/06/2020 - Party | Latvia",
    portugalEvent: "Saturday, 04/07/2020 - Dinner | Portugal",
    finlandEvent: "Saturday, 27/06/2020 - Dinner | Finland",
    latviaEventShort: "Party in Latvia",
    portugalEventShort: "Dinner in Portugal",
    finlandEventShort: "Dinner in Finland",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Gifts are optional. If you still decide to give us a gift, the only option we accept is money. An account will be setup for transfers",
    travelCard: "We would love to see you, but, unfortunately, travel expenses are not covered by us. In Latvia, accommodations will be provided.",
    foodCard: "Food and drinks will be covered by us",
  },
  [Lang.se]: {
    title: "Bröllop",
    and: "och",
    saveTheDate: "",
    latviaEvent: "Lördag, 20/06/2020 - Fest | Lettland",
    portugalEvent: "Lördag, 04/07/2020 - Middag | Portugal",
    finlandEvent: "Lördag, 27/06/2020 - Middag | Finland",
    latviaEventShort: "Fest i Lettland",
    portugalEventShort: "Middag i Portugal",
    finlandEventShort: "Middag i Finland",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Gifts are optional. If you still decide to give us a gift, the only option we accept is money. An account will be setup for transfers",
    travelCard: "We would love to see you, but, unfortunately, travel expenses are not covered by us. In Latvia, accommodations will be provided.",
    foodCard: "Food and drinks will be covered by us",
  },
  [Lang.pt]: {
    title: "Casamento{}de",
    and: "e",
    saveTheDate: "",
    latviaEvent: "Sábado, 20/06/2020 - Festa | Letônia",
    portugalEvent: "Sábado, 04/07/2020 - Jantar | Portugal",
    finlandEvent: "Sábado, 27/06/2020 - Jantar | Finlândia",
    latviaEventShort: "Festa na Letônia",
    portugalEventShort: "Jantar em Portugal",
    finlandEventShort: "Jantar na Finlândia",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Gifts are optional. If you still decide to give us a gift, the only option we accept is money. An account will be setup for transfers",
    travelCard: "We would love to see you, but, unfortunately, travel expenses are not covered by us. In Latvia, accommodations will be provided.",
    foodCard: "Food and drinks will be covered by us",
  },
  [Lang.lv]: {
    title: "Kāzas",
    and: "un",
    saveTheDate: "",
    latviaEvent: "Sestdiena, 20/06/2020 - Ballīte | Latvija",
    portugalEvent: "Sestdiena, 04/07/2020 - Vakariņas | Portugāle",
    finlandEvent: "Sestdiena, 27/06/2020 - Vakariņas | Somija",
    latviaEventShort: "Ballīte Latvijā",
    portugalEventShort: "Vakariņas Portugālē",
    finlandEventShort: "Vakariņas Somija",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Gifts are optional. If you still decide to give us a gift, the only option we accept is money. An account will be setup for transfers",
    travelCard: "We would love to see you, but, unfortunately, travel expenses are not covered by us. In Latvia, accommodations will be provided.",
    foodCard: "Food and drinks will be covered by us",
  },
  [Lang.ru]: {
    title: "Свадьба",
    and: "и",
    saveTheDate: "",
    latviaEvent: "Суббота, 20/06/2020 - Вечеринка | Латвия",
    portugalEvent: "Суббота, 04/07/2020 - Ужин | Португалия",
    finlandEvent: "Суббота, 27/06/2020 - Ужин | Финляндия",
    latviaEventShort: "Вечеринка в Латвии",
    portugalEventShort: "Ужин в Португалии",
    finlandEventShort: "Ужин в Финляндии",

    latviaEventDesc: "A midsummer inspired outdoor event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Hopefully the weather will be on our side, but just in case bring a jacket. We will ensure places to hide from rain. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet the family. Place and time will be specified after registration.",

    sara: "Сары Нурдмир да Кунья",
    roland: "Роланда Егорова",

    giftCard: "Gifts are optional. If you still decide to give us a gift, the only option we accept is money. An account will be setup for transfers",
    travelCard: "We would love to see you, but, unfortunately, travel expenses are not covered by us. In Latvia, accommodations will be provided.",
    foodCard: "Food and drinks will be covered by us",
  },
}

export const translate = (value: string, placeholder: any) => {
  return value.replace("{}", placeholder);
}
