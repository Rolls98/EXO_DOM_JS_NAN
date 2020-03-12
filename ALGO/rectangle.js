function comp(x, y) {
  var rect,
    dy = "";

  var dx = "o";
  for (var i = 1; i < x - 1; i++) {
    dx += "-";
  }
  dx += x > 1 ? "o \n" : "\n";

  for (var j = 1; j < y - 1; j++) {
    dy += "|";
    if (x > 1) {
      dy = espace(dy, x);
      dy += "|\n";
    } else {
      dy += "\n";
    }
  }
  rect = dx + dy + (y > 1 ? dx : "");

  return rect;
}

function espace(rect, x) {
  for (var i = 1; i < x - 1; i++) {
    rect += " ";
  }
  return rect;
}
