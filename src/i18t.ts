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
  registrationDeadline: string;
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

    latviaEventDesc: "A midsummer inspired event with family and friends, and, of course, food and drinks. We will account for allergies and other special needs mentioned in the registration form below. The recommended attire is formal but that’s not mandatory. Place and time will be given after registration.",
    portugalEventDesc: "A warm family evening dinner in the beautiful coastal town of Sesimbra. Place and time will be specified after registration.",
    finlandEventDesc: "A cosy evening dinner in a nice restaurant in Vaasa to meet with the family. Place and time will be specified after registration.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Gifts are optional. If you still decide to give us a gift, we will be grateful for a money donation towards our future family house. An account will be setup for transfers",
    travelCard: "We would love to see you, but, unfortunately, travel expenses are not covered by us. In Latvia, accommodations will be provided for the day of the wedding.",
    foodCard: "We all love tasty food. Food and drinks will be covered by us",

    registrationDeadline: "Registration deadline for the wedding is {}",
  },
  [Lang.se]: {
    title: "Bröllopet {} mellan",
    and: "och",
    saveTheDate: "Save the date!",
    latviaEvent: "Lördag, 20/06/2020 - Fest | Lettland",
    portugalEvent: "Lördag, 04/07/2020 - Middag | Portugal",
    finlandEvent: "Lördag, 27/06/2020 - Middag | Finland",
    latviaEventShort: "Fest i Lettland",
    portugalEventShort: "Middag i Portugal",
    finlandEventShort: "Middag i Finland",

    latviaEventDesc: "En midsommarinspirerad fest med familj och vänner, och självklart mat och drinkar. Vi frågar därför efter allergier och specialdieter i formuläret nedan. Klädkoden är formell (inte obligatorisk). Plats och tid får du veta efter att du fyllt i formuläret.",
    portugalEventDesc: "En familjemiddag i den vackra kuststaden Sesimbra. Plats och tid får du veta efter att du fyllt i formuläret.",
    finlandEventDesc: "En mysig kväll på en fin restaurang tillsammans med familjen. Plats och tid får du veta efter att du fyllt i formuläret.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Gåvor är inget måste. Om du vill ge oss en gåva är vi tacksamma för en liten donation för vårt kommande hus. Ett konto kommer att grundas för detta",
    travelCard: "Det skulle vara så roligt att se er, men tyvärr står vi inte för resekostnaderna. I Lettland står vi för boendet på bröllopsdagen.",
    foodCard: "Vi älskar alla god mat. Mat och dryck står vi för.",

    registrationDeadline: "Anmälningen stänger {}",
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

    latviaEventDesc: "Um evento inspirado no solstício do verão, com família, amigos e, claro, comida e bebida. Teremos em atenção alergias ou outras necessidades especiais mencionadas no formulário de registo abaixo. O vestuário recomendado será formal, mas não é obrigatório. O sitio e hora serão enviados após registo.",
    portugalEventDesc: "Um jantar de família acolhedor, no final da tarde, na linda vila piscatória de Sesimbra. O sitio e hora serão enviados após registo.",
    finlandEventDesc: "Um jantar aconchegante de final de tarde, num bom restaurante em Vaasa para reunir com a família. O sitio e hora serão enviados após registo.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Presentes são opcionais. No entanto, se ainda assim decidir dar-nos um presente, a prenda que nos ajudará mais é dinheiro. Iremos definir uma conta para que possa fazer transferência.",
    travelCard: "Adoraríamos contar com a vossa presença, infelizmente não conseguimos cobrir despesas de viagem. Na Letónia, alojamento será providenciado, no entanto, apenas na noite do casamento.",
    foodCard: "A comida e bebida serão oferecidas por nós.",

    registrationDeadline: "A data limite para efectuar o registro é {}",
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

    latviaEventDesc: "Pirms līgo svētku ballīte ar ģimeni un draugiem un, protams, ēdieniem un dzērieninem. Mēs ņemism vērā jūsu alerģijas un īpašās vajadzības, kuras norādīsiet reģistrācijas formā. Rekomendējam vilkt formālu apģērbu, bet tas nav obligāts nosacījums. Vieta un laiks būs norādīts pēc reģistrācijas.",
    portugalEventDesc: "Ģimenes vakariņas skaistā piekrastes pilsētā Sezimbra. Vieta un laiks būs norādīts pēc reģistrācijas.",
    finlandEventDesc: "Mājīgas vakariņas jaukā restorānā Somijas pilsētā Vāzā (Vaasa), lai satiktos ar ģimeni. Vieta un laiks būs norādīts pēc reģistrācijas.",

    sara: "Sara Nordmyr da Cunha",
    roland: "Rolands Jegorovs",

    giftCard: "Dāvanas nav obligātas. Ja Jūs tomēr izlemjat mums pasniegt dāvanu, mēs būsim pateicīgi par naudas ziedošanu mūsu nākotnes ģimenes mājai. Konts būs uzstādīts šim mērķim",
    travelCard: "Mēs priecātos Jūs redzēt, bet, diemžēl, ceļošanas izmaksas mēs neapmaksājam. Tomēr, Latvijā dzīvesvieta tiks nodrošināta ballītes laikā",
    foodCard: "Mēs visi mīlam gardi paēst. Ēdieni un dzērieni būs nodrošināti",

    registrationDeadline: "Pieteikšanās termiņš kāzām ir līdz {}",
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

    latviaEventDesc: "Летняя вечеринка с семьей и друзьями и, конечно, едой и напитками. Мы учтем аллергии и другие особенние потребности, которые Вы укажите в форме регистрации ниже. Рекомендованный дресс код - формальный. Место и время будет дано после регистрации",
    portugalEventDesc: "Теплый семейный ужин в прекрасном прибрежном городе Сезимбра. Место и время будет дано после регистрации.",
    finlandEventDesc: "Уютный ужин в приятном ресторане в Васа, чтобы встретиться с семьей.  Место и время будет дано после регистрации",

    sara: "Сары Нурдмир да Кунья",
    roland: "Роланда Егорова",

    giftCard: "Подарки не обязательны. Если Вы все же решите нам что-то дарить, мы были бы благодарны за денежное пожертвование для нашего будушего семейного дома. Банковский счет будет сделан для этой цели",
    travelCard: "Мы хотим Вас видеть, но, к сожалению, затраты на путешествия мы не оплачиваем. Однако, в Латвии жилье будет предоставлено во время вечеринки",
    foodCard: "Мы все любим вкусно поесть. Еда и напитки будут предоставлены",

    registrationDeadline: "Крайний срок регистрации на свадьбу {}",
  },
}

export const translate = (value: string, placeholder: any) => {
  return value.replace("{}", placeholder);
}
