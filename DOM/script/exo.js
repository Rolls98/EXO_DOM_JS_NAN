function aleatoire(min, max) {
  return min < max
    ? parseInt(Math.random() * (max + 1 - min)) + min
    : "impossible que le min soit superieur au max";
}

function Game(img, dev) {
  var nbAl = aleatoire(1, 5);
  const msg = document.getElementById("msg");
  if (dev.includes(nbAl)) {
    if (dev.includes(".jpeg")) {
      msg.innerHTML = "Bravo vous avez reussi à deviner l'image";
    } else {
      msg.innerHTML = "Veuillez saisir un bon nom example(1.jpeg)";
    }
  } else {
    msg.innerHTML =
      "Desolé vous avez echoué :) <br> la bonne image est : " + nbAl + ".jpeg";
  }

  img.setAttribute("src", "images/" + nbAl + ".jpeg");
}

var image = document.getElementsByTagName("img")[0];

var js = document.getElementById("jouer");

js.addEventListener("click", function() {
  var input = document.getElementsByTagName("input")[0].value;
  Game(image, input);
});

var np = "2,	3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71,	73,	79,	83,	89,	97"
  .split(",")
  .map(el => parseInt(el));
var fac = [];

function listFacteur(nb) {
  var tmp = nb;
  var tmpi = 0;
  for (var i = 0; i < np.length; i++) {
    if (tmp % np[i] === 0) {
      fac.push(np[i]);
      tmp /= np[i];
      tmpi = i;
      i = tmpi;
    } else {
      continue;
    }
  }
}

listFacteur(11);
console.log(Math.max(...fac));
