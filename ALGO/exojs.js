/*
algorithme 1
retourne les plus petits
function([[4,2],[3,1],[5,1]])

algorithme 1 :

traduire la date d'anglais en francais
exemple : 
tuesday 12 march 2020
-> Mardi 12 Mars 2020;

sans espace
return Erreur Date au mauvais format

ecrire une fonction qui prends en parametre un calcul d'addition de fraction
la fonction retourne la somme des deux fractions (sans simplifaction);

exemple : 
    "2/2+4/2" ="6/2";
    "2/3+4/2" = "16/6"; 
*/

function ordonne(a, b) {
  if (a[0] - a[1] > b[0] - b[1]) return 1;
  if (a[0] - a[1] < b[0] - b[1]) return -1;
  return 0;
}

function pluspetit(tab) {
  let tabEl = [];
  let elm = 2;
  tab.sort(ordonne);
  for (var i = 1; i < tab.length - 1; i++) {
    if (tab[0][0] - tab[0][1] == tab[i][0] - tab[i][1]) {
      elm++;
    }
  }
  console.log(tab.slice(0, elm));
}

pluspetit([
  [9, 3],
  [4, 1],
  [5, 1],
  [13, 10]
]);
