function Equa(a, b, c) {
  let dis = b * b - 4 * a * c;
  if (a == 0) return "la fonction n'est pas polynome";
  if (dis < 0) {
    return "Discriminant inferieur à zero donc pas de solution";
  } else if (dis == 0) {
    let x = -b / (2 * a);
    return "Solution Unique : " + x;
  } else {
    let coord = {};
    coord.x1 = (-b - Math.sqrt(dis)) / (2 * a);
    coord.x2 = (-b + Math.sqrt(dis)) / (2 * a);
    return coord;
  }
}
