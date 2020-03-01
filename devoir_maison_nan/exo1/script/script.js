var main = document.querySelectorAll(".carte");
var srcs = [
  "as_club.png",
  "as_de_coeur.png",
  "pique.png",
  "as_club.png",
  "as_de_coeur.png",
  "pique.png"
];
const img = document.querySelectorAll("img");
var checked = { pr: "" }; //permettant de specifier le premier clique

main.forEach(el => {
  /*on écoute toutes les cartes au clique*/
  el.addEventListener("click", function() {
    el.parentNode.classList.toggle("mainR"); //on retourne pour voir ce qui se cache derriere la div
    /* premiere verification pour savoir si un élement a été deja cliqué */
    if (checked.pr != "") {
      if (
        checked.pr.children[1].children[0].src ===
        el.children[1].children[0].src
      ) {
        /* si le premier element est égale au deuxieme element on fait disparaitre les deux */
        setTimeout(function() {
          main.forEach(function(m) {
            if (m.parentNode.classList.contains("mainR")) {
              m.parentNode.style.opacity = 0;
            }
          });
          for (var l in checked) {
            checked[l] = "";
          }
        }, 1000); //on attend une seconde avant de faire disparaitre
      } else {
        /* sinon on cache encore la carte */
        setTimeout(function() {
          main.forEach(function(m) {
            if (m.parentNode.classList.contains("mainR")) {
              m.parentNode.classList.toggle("mainR");
            }
          });
          for (var l in checked) {
            checked[l] = ""; // on vide le checked
          }
        }, 1000); //on attend une seconde avant d'appliquer le changement
      }
    } else {
      checked.pr = el;
    }
  });
});

function nbAleatoire(min, max) {
  return parseInt(Math.random() * (max + 1 - min)) + min;
}

function distribution(src) {
  for (var i = 0; i < img.length; i++) {
    img[i].setAttribute(
      "src",
      "images/" + src.splice(nbAleatoire(0, src.length - 1), 1)
    );
  }
}

window.onload = distribution(srcs);

