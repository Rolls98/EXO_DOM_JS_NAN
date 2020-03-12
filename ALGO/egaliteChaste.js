function chaste(str) {
  tab = str.split("+");
  tabEl = [];
  tab.forEach(el => {
    tabEl.push(el.split(""));
  });

  if (verifed(tabEl)) {
    return str + "=" + tabEl[0][0] + tabEl[tabEl.length - 1][1];
  } else {
    return "erreur";
  }
}

function verifed(t) {
  let checked = true;
  for (var i = 0; i < t.length - 1; i++) {
    if (t[i][1] != t[i + 1][0]) {
      checked = false;
    }
  }

  for (var i = 0; i < t.length; i++) {
    if (t[i][0] == t[i][1]) {
      checked = false;
    }
  }

  return checked;
}

function MethodeCourte(str) {
  let msg = str.split("");

  for (var i = 1; i < msg.length - 1; i + 2) {
    if (msg[i] === msg[i + 2]) {
      msg.splice(i, 3);
    } else {
      return console.log("erreur");
    }
  }
  console.log(msg.join(""));
}
