/* =========================================================
   BusLux — PRICE LIST (edit this file to change prices)
   ---------------------------------------------------------
   Prices are per passenger, in EUR, "from" (від).
     comfort = Comfort class, departure 08:00
     lux     = Lux class, departure 18:00
     open    = true -> price shown as "from ... +" (open upper tier)
   UAH is calculated automatically: EUR × rate, rounded to 10 ₴.

   Source:   https://eurotour.in.ua/  (route cards + its pricing
             engine, EUR per class by travel time)
   Checked:  19.11.2026
   Rate:     NBU official EUR rate on 19.11.2026 = 49.5717 ₴
             https://bank.gov.ua/  (update `rate` + `rateDate`)
   ========================================================= */
window.BUSLUX_PRICES = {
  rate: 49.5717,
  rateDate: "19.11.2026",
  checked: "19.11.2026",
  discounts: { pensioners: 10, children: 15 },
  popular: 12, // how many cards are shown before "show all"

  routes: [
    // Poland
    { from: "kyiv", to: "warsaw", c: "pl", comfort: 150, lux: 190 },
    { from: "lviv", to: "warsaw", c: "pl", comfort: 100, lux: 140 },
    { from: "kyiv", to: "krakow", c: "pl", comfort: 150, lux: 190 },
    { from: "lviv", to: "krakow", c: "pl", comfort: 90, lux: 120 },
    { from: "kyiv", to: "prague", c: "cz", comfort: 160, lux: 200 },
    { from: "kyiv", to: "berlin", c: "de", comfort: 160, lux: 200 },
    { from: "kyiv", to: "vienna", c: "at", comfort: 160, lux: 200 },
    { from: "lviv", to: "prague", c: "cz", comfort: 130, lux: 170 },
    { from: "kyiv", to: "paris", c: "fr", comfort: 200, lux: 240 },
    { from: "lviv", to: "amsterdam", c: "nl", comfort: 160, lux: 200 },
    { from: "kyiv", to: "milan", c: "it", comfort: 200, lux: 240 },
    { from: "kyiv", to: "rome", c: "it", comfort: 210, lux: 250 },
    // — the rest (shown after "show all") —
    { from: "kyiv", to: "wroclaw", c: "pl", comfort: 160, lux: 200 },
    { from: "lviv", to: "wroclaw", c: "pl", comfort: 100, lux: 140 },
    { from: "lviv", to: "berlin", c: "de", comfort: 140, lux: 180 },
    { from: "kyiv", to: "dresden", c: "de", comfort: 160, lux: 200 },
    { from: "kyiv", to: "bratislava", c: "sk", comfort: 160, lux: 200 },
    { from: "lviv", to: "bratislava", c: "sk", comfort: 130, lux: 170 },
    { from: "kyiv", to: "budapest", c: "hu", comfort: 160, lux: 200 },
    { from: "lviv", to: "budapest", c: "hu", comfort: 130, lux: 170 },
    { from: "lviv", to: "vienna", c: "at", comfort: 130, lux: 170 },
    { from: "kyiv", to: "bucharest", c: "ro", comfort: 160, lux: 200 },
    { from: "odesa", to: "bucharest", c: "ro", comfort: 130, lux: 170 },
    { from: "kyiv", to: "chisinau", c: "md", comfort: 130, lux: 170 },
    { from: "odesa", to: "chisinau", c: "md", comfort: 90, lux: 120 },
    { from: "lviv", to: "milan", c: "it", comfort: 170, lux: 210 },
    { from: "kyiv", to: "venice", c: "it", comfort: 190, lux: 230 },
    { from: "lviv", to: "venice", c: "it", comfort: 160, lux: 200 },
    { from: "kyiv", to: "bologna", c: "it", comfort: 200, lux: 240 },
    { from: "lviv", to: "bologna", c: "it", comfort: 160, lux: 200 },
    { from: "kyiv", to: "turin", c: "it", comfort: 200, lux: 240 },
    { from: "lviv", to: "turin", c: "it", comfort: 170, lux: 210 },
    { from: "lviv", to: "rome", c: "it", comfort: 180, lux: 220 },
    { from: "kyiv", to: "naples", c: "it", comfort: 210, lux: 250 },
    { from: "lviv", to: "naples", c: "it", comfort: 190, lux: 230 },
    { from: "kyiv", to: "strasbourg", c: "fr", comfort: 190, lux: 230 },
    { from: "lviv", to: "strasbourg", c: "fr", comfort: 160, lux: 200 },
    { from: "kyiv", to: "lyon", c: "fr", comfort: 210, lux: 250 },
    { from: "lviv", to: "lyon", c: "fr", comfort: 180, lux: 220 },
    { from: "kyiv", to: "marseille", c: "fr", comfort: 210, lux: 250 },
    { from: "lviv", to: "marseille", c: "fr", comfort: 190, lux: 230 },
    { from: "kyiv", to: "nice", c: "fr", comfort: 210, lux: 250 },
    { from: "lviv", to: "nice", c: "fr", comfort: 180, lux: 220 },
    { from: "kyiv", to: "madrid", c: "es", comfort: 240, lux: 280 },
    { from: "lviv", to: "madrid", c: "es", comfort: 210, lux: 250 },
    { from: "kyiv", to: "barcelona", c: "es", comfort: 220, lux: 260 },
    { from: "lviv", to: "barcelona", c: "es", comfort: 200, lux: 240 },
    { from: "kyiv", to: "valencia", c: "es", comfort: 230, lux: 270 },
    { from: "lviv", to: "valencia", c: "es", comfort: 210, lux: 250 },
    { from: "kyiv", to: "alicante", c: "es", comfort: 240, lux: 280 },
    { from: "lviv", to: "alicante", c: "es", comfort: 210, lux: 250 },
    { from: "kyiv", to: "lisbon", c: "pt", comfort: 250, lux: 290, open: true },
    { from: "lviv", to: "lisbon", c: "pt", comfort: 230, lux: 270 },
    { from: "kyiv", to: "porto", c: "pt", comfort: 250, lux: 290, open: true },
    { from: "lviv", to: "porto", c: "pt", comfort: 220, lux: 260 }
  ],

  // City names in 3 languages
  cities: {
    kyiv: ["Київ", "Киев", "Kyiv"], lviv: ["Львів", "Львов", "Lviv"], odesa: ["Одеса", "Одесса", "Odesa"],
    warsaw: ["Варшава", "Варшава", "Warsaw"], krakow: ["Краків", "Краков", "Kraków"], wroclaw: ["Вроцлав", "Вроцлав", "Wrocław"],
    berlin: ["Берлін", "Берлин", "Berlin"], dresden: ["Дрезден", "Дрезден", "Dresden"], prague: ["Прага", "Прага", "Prague"],
    bratislava: ["Братислава", "Братислава", "Bratislava"], budapest: ["Будапешт", "Будапешт", "Budapest"], vienna: ["Відень", "Вена", "Vienna"],
    bucharest: ["Бухарест", "Бухарест", "Bucharest"], chisinau: ["Кишинів", "Кишинёв", "Chișinău"],
    milan: ["Мілан", "Милан", "Milan"], rome: ["Рим", "Рим", "Rome"], venice: ["Венеція", "Венеция", "Venice"], bologna: ["Болонья", "Болонья", "Bologna"],
    turin: ["Турин", "Турин", "Turin"], naples: ["Неаполь", "Неаполь", "Naples"],
    paris: ["Париж", "Париж", "Paris"], lyon: ["Ліон", "Лион", "Lyon"], marseille: ["Марсель", "Марсель", "Marseille"], nice: ["Ніцца", "Ницца", "Nice"],
    strasbourg: ["Страсбург", "Страсбург", "Strasbourg"], amsterdam: ["Амстердам", "Амстердам", "Amsterdam"],
    madrid: ["Мадрид", "Мадрид", "Madrid"], barcelona: ["Барселона", "Барселона", "Barcelona"], valencia: ["Валенсія", "Валенсия", "Valencia"],
    alicante: ["Аліканте", "Аликанте", "Alicante"], lisbon: ["Лісабон", "Лиссабон", "Lisbon"], porto: ["Порту", "Порту", "Porto"]
  },

  // Country filter labels in 3 languages
  countries: {
    pl: ["Польща", "Польша", "Poland"], cz: ["Чехія", "Чехия", "Czechia"], de: ["Німеччина", "Германия", "Germany"],
    at: ["Австрія", "Австрия", "Austria"], sk: ["Словаччина", "Словакия", "Slovakia"], hu: ["Угорщина", "Венгрия", "Hungary"],
    it: ["Італія", "Италия", "Italy"], fr: ["Франція", "Франция", "France"], nl: ["Нідерланди", "Нидерланды", "Netherlands"],
    es: ["Іспанія", "Испания", "Spain"], pt: ["Португалія", "Португалия", "Portugal"], ro: ["Румунія", "Румыния", "Romania"],
    md: ["Молдова", "Молдова", "Moldova"]
  }
};
