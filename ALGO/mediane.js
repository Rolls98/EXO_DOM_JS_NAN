function ordonne(a, b) {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
}

function Abort() {
  var tab = [...arguments];
  tab.sort(ordonne);
  return tab[2];
}
