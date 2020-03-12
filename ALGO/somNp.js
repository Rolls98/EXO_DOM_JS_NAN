function nombrePremier(n) {
  var pr = true;
  if (n < 2 || typeof n != "number") return false;
  for (var i = 2; i < n; i++) {
    if (i < n) {
      if (n % i === 0) {
        pr = false;
        break;
      }
    }
  }

  return pr;
}

function liste(a, b) {
  let tab = [];
  if (a > b) return -1;
  for (var i = a + 1; i < b; i++) {
    if (nombrePremier(i)) {
      tab.push(i);
    }
  }
  return tab;
}

console.log(liste(5, 17));
