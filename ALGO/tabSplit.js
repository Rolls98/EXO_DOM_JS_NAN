function split(str, indice) {
  if (indice != "") {
    if (isFind(str, indice)) {
      let tab = [];
      for (var i = 0; i < str.length; i++) {
        if (str[i] === indice) {
          tab[tab.length] = str.slice(0, i);
          str = str.slice(i + 1, str.length);
          i = 0;
        }
      }
      tab[tab.length] = str;
      return tab;
    } else {
      return "Erreur l'indice n'est pas dans la chaine de caractere";
    }
  } else {
    let tab = [];
    for (var i = 0; i < str.length; i++) {
      tab[tab.length] = str[i];
    }
    return tab;
  }
}

function isFind(st, ind) {
  let find = false;
  for (var i = 0; i < st.length; i++) {
    if (st[i] == ind) {
      find = true;
    }
  }
  return find;
}

function mdSplit(chaine, del) {
  if (isFind(chaine, del)) {
    let s = "";
    let tab = [];

    for (let i = 0; i < chaine.length; i++) {
      if (chaine[i] == del) {
        tab.push(s);
        s = "";
      } else {
        s += chaine[i];
      }
    }
    tab.push(s);

    return tab;
  }
}

console.log(mdSplit("salut ndk ?", " "));
