function splice(tab, deb, how, nv) {
  let fin = deb + how - 1;
  if (how >= 1) {
    let newT = [];
    tab[deb] = nv;
    for (let i = 0; i < tab.length; i++) {
      if (i <= deb || i > fin) {
        newT.push(tab[i]);
      }
    }
    tab = newT;
    return newT;
  }
}
