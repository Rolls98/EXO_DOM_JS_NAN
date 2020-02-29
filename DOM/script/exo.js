function aleatoire(min, max) {
  return min < max
    ? parseInt(Math.random() * (max + 1 - min)) + min
    : "impossible que le min soit superieur au max";
}

function changeImage(img) {
  img.setAttribute("src", "images/" + aleatoire(1, 5) + ".jpeg");
}

var image = document.getElementsByTagName("img")[0];

addEventListener("click", function() {
  changeImage(image);
});
