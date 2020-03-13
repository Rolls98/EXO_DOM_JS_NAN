function verifiedTriangle(a, b, c) {
  let triangle = false;

  if (a > 0 && b > 0 && c > 0) {
    if (a + b >= c && a + c >= b && b + c >= a) {
      triangle = true;
    }
  }
  return triangle
    ? a == b && b == c
      ? "le triangle est equilateral"
      : "le triangle n'est pas equilateral"
    : "Ceci n'est pas un triangle";
}

console.log(verifiedTriangle(6, 4, 4));
