let roue = document.querySelector(".roue");
let btnClick = document.querySelector("#btn");
let deg = -15;
let connex = document.querySelector('input[type="submit"]');
let montant = document.querySelector("#montant");
let mise = document.querySelector("#mise");
let neg = document.querySelector("#neg");
let pos = document.querySelector("#pos");
let user = { montant: 10000 };
let tabHis = [];
let tbody = document.querySelector("table tbody");
let total = document.querySelectorAll("table tfoot td")[1];
let his = document.querySelector("#historique");

connex.addEventListener("click", e => {
  e.preventDefault();
  let p = connex.parentNode;
  user.name = document.querySelector('#user form input[type="text"]').value;
  if (user.name === "") {
    alert("le nom peut pas etre vide");
  } else {
    p.style = "opacity:0";
    setTimeout(() => {
      p.style = "display:none";
    }, 500);
    CreateMontant();
  }
});

btnClick.addEventListener("click", function(e) {
  e.preventDefault();
  if (parseInt(mise.value)) {
    if (parseInt(mise.value) < 500) {
      alert("la mise min est 500");
    } else if (parseInt(mise.value) < user.montant) {
      tabHis.unshift("-" + mise.value);
      neg.innerHTML = "-" + mise.value;
      neg.style = "top:0;opacity:0";
      his.style.opacity = "1";
      user.montant -= mise.value;
      tourne();
      AfficheMontant();
      tbody.innerHTML = "";
      Historique();
    } else {
      alert("vous n'avez pas assez de pieces");
    }
  } else {
    alert("Veuillez inserer votre mise");
  }
});

/*function tourne() {
  let roueMove = setInterval(() => {
    deg += 15;
    roue.style = "transform:rotate(" + deg + "deg)";
    if (deg >= 360) {
      deg = 0;
    }
  }, time);

  setTimeout(() => {
    clearInterval(roueMove);
    withdraw(deg);
    AfficheMontant();
  }, aleatoire(50, 150) * time);
}*/

let time = 25;
let stop = aleatoire(200, 350) * time;
let control = 0;
function aleatoire(min, max) {
  return parseInt(Math.random() * (min + max - 1) + min);
}

function CreateMontant() {
  let p = createBlock("p");
  p.id = "name";
  p.innerHTML = user.name;
  let spanM = createBlock("span");
  spanM.id = "piecs";
  spanM.innerHTML = parseInt(user.montant);
  let spanP = createBlock("span");
  spanP.innerHTML = " pièces";
  montant.append(p, spanM, spanP);
}

function AfficheMontant() {
  document.querySelector("#piecs").innerHTML = user.montant;
  setTimeout(initPos, 500);
  setTimeout(initNeg, 500);
}

function AjoutMontant(mnt) {
  tabHis.unshift("+" + mnt);
  pos.innerHTML = "+" + mnt;
  pos.style = "top:100%;opacity:0";
  setTimeout(initPos, 500);
  user.montant += mnt;
  tbody.innerHTML = "";
  Historique();
}

function initPos() {
  pos.innerHTML = "";
  pos.style = "top:30%;opacity:1";
}

function initNeg() {
  neg.innerHTML = "";
  neg.style = "top:85%;opacity:1";
}

function Historique() {
  for (let i = 0, l = tabHis.length; i < l && i < 15; i++) {
    let tr = createBlock("tr");
    let tdi = createBlock("td");
    let tdm = createBlock("td");
    tdi.innerHTML = i + 1;
    tdm.innerHTML = tabHis[i];
    tdm.className = tabHis[i] > 0 ? "vert" : "rouge";
    tr.append(tdi, tdm);
    tbody.append(tr);
  }
  let t = tabHis.reduce((t, el) => {
    return t + parseInt(el);
  }, 0);
  total.innerHTML = (t > 0 ? "+" : "") + t;
  total.className = t > 0 ? "vert" : "rouge";
}

function tourne() {
  deg += 15;
  roue.style = "transform:rotate(" + deg + "deg)";
  console.log(deg);
  if (deg >= 360) {
    deg = 0;
  }

  control += 50;

  time += control >= stop - 500 ? 25.5 : 0.1;

  if (control >= stop) {
    console.log("control", control);
    console.log("stop", stop);
    withdraw(deg);
    control = 0;
    time = 25;
    stop = aleatoire(200, 350) * time;
    return;
  }

  setTimeout(tourne, time);
}

// tourne();

function createBlock(el) {
  let elmnt = document.createElement(el);
  return elmnt;
}

function withdraw(deg) {
  switch (deg) {
    case 0:
      AjoutMontant(350);
      break;
    case 15:
      AjoutMontant(700);
      break;
    case 30:
      AjoutMontant(600);
      break;
    case 45:
      AjoutMontant(3000);
      break;
    case 60:
      setTimeout(tourne, 1000);
      break;
    case 75:
      AjoutMontant(500);
      break;
    case 90:
      AjoutMontant(750);
      break;
    case 105:
      AjoutMontant(600);
      break;
    case 120:
      AjoutMontant(450);
      break;
    case 135:
      AjoutMontant(300);
      break;
    case 150:
      setTimeout(() => {
        alert("vous avez perdu");
      }, 1000);
      break;
    case 165:
      AjoutMontant(800);
      break;
    case 180:
      AjoutMontant(700);
      break;
    case 195:
      AjoutMontant(600);
      break;
    case 210:
      setTimeout(tourne, 1000);
      break;
    case 225:
      AjoutMontant(900);
      break;
    case 240:
      AjoutMontant(400);
      break;
    case 255:
      AjoutMontant(500);
      break;
    case 270:
      AjoutMontant(1000);
      break;
    case 285:
      AjoutMontant(650);
      break;
    case 300:
      AjoutMontant(400);
      break;
    case 315:
      AjoutMontant(300);
      break;
    case 330:
      AjoutMontant(800);
      break;
    case 345:
      AjoutMontant(500);
      break;
  }
}
