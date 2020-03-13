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
  for (var i = 2; i < tab.length - 1; i++) {
    if (
      tab[0][0] - tab[0][1] == tab[i][0] - tab[i][1] ||
      tab[1][0] - tab[1][1] == tab[i][0] - tab[i][1]
    ) {
      elm++;
    }
  }
  console.log(tab.slice(0, elm));
}

function AutreMethod(tab) {
  let tabfinal = [];
  let petitab = [];
  for (let i = 0; i < tab.length; i++) {
    petitab.push(tab[i][0] - tab[i][1]);
  }
  petittab = petitab.sort();

  for (let elt of tab) {
    if (elt[0] - elt[1] == petitab[0] || elt[0] - elt[1] == petitab[1])
      tabfinal.push(elt);
  }

  console.log(tabfinal);
}

function tableau(tab) {
  let min = tab.map(l => l[0] - l[1]);
  var t = Min(min);
  return tab.filter(el => t.includes(el[0] - el[1]));
}

function Min(tab) {
  let output = [];
  let min = tab[0];
  while (output.length < 2) {
    for (let i = 0; i < tab.length; i++) {
      if (min > tab[i] && tab[i] != min) {
        min = tab[i];
      }
    }
    output.push(min);
    tab.splice(tab.indexOf(min), 1);
    min = tab[0];
  }
  return output;
}
// pluspetit([
//   [1, 4],
//   [4, 2],
//   [5, 2],
//   [4, 3],
//   [11, 10],
//   [7, 6]
// ]);

// // AutreMethod([
// //   [1, 4],
// //   [4, 2],
// //   [5, 2],
// //   [4, 3],
// //   [11, 10],
// //   [7, 6]
// // ]);

// console.log(
//   tableau([
//     [1, 4],
//     [4, 2],
//     [5, 2],
//     [4, 3],
//     [11, 10],
//     [7, 6]
//   ])
// );
