function AddFraction(str) {
  let nbs = str.split("+");
  let nbA = nbs[0].split("/");
  let nbB = nbs[1].split("/");

  if (nbA[1] == nbB[1]) {
    let n = parseInt(nbA[0]) + parseInt(nbB[0]);
    return n + "/" + nbA[1];
  } else {
    let n1 = parseInt(nbA[0]) * parseInt(nbB[1]);
    let n2 = parseInt(nbA[1]) * parseInt(nbB[0]);
    let n = n1 + n2;
    return n + "/" + nbA[1] * nbB[1];
  }
}

console.log(AddFraction("2/3+4/2"));
