function translateDate(str) {
  let toutEstEspace = true;
  let jour = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche"
  ];
  let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    ,
    "friday",
    "saturday",
    "sunday"
  ];
  let mois = [
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "decembre"
  ];
  let month = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];

  let tabDate = str.split(" ");

  tabDate[0] = jour[days.indexOf(tabDate[0])];
  tabDate[2] = mois[month.indexOf(tabDate[2])];

  if (tabDate.length == 4) {
    console.log(tabDate.join(" "));
  } else {
    console.log("Erreur Date au mauvais format");
  }
}

translateDate("wednesday 12 february 2020");
