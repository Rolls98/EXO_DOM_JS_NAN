/*
    ecrire une fonction qui prends en parametre un tableau
    et qui retourne la somme des longueurs de chaque element dans le tableau.
    si le tableau contient un element different de string
    la fonction retourne false

*/

function lab(arr) {
  var check = false;
  var som = 0;
  arr.forEach(function(el) {
    typeof el != "string" ? (check = true) : (som += el.length);
  });

  return check ? !check : som;
}
