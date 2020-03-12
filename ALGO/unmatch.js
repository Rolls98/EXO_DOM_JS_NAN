var tab = [1, 2, 8, 3, 2, 3];

function unMatch(arr) {
  var tab2 = [];
  for (var i = 0; i < tab.length; i++) {
    let check = true;
    for (var j = 0; j < tab.length; j++) {
      if (i != j) {
        if (tab[i] == tab[j]) {
          check = false;
          break;
        }
      }
    }
    if (check) {
      tab2.push(tab[i]);
    }
  }

  return tab2;
}

console.log(...unMatch(tab));
