function reverse(tab) {
  let tabRev = [];
  let len = tab.length - 1;
  if (tab.length > 0) {
    for (var i = 0; i < tab.length && len >= 0; i++, len--) {
      tabRev[len] = tab[i];
    }
    return tabRev;
  } else {
    return "le tableau est vide";
  }
}

console.log(reverse(["r", "a", "m", "e", "u", "x"]));
