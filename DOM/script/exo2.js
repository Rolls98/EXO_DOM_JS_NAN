/*
    la fonction aleatoire prends deux arguments 
    => le minimum et le maximun
    => retourne un nombre compris entre le minimum et le maximum

*/

function aleatoire(min, max) {
    return min < max
      ? parseInt(Math.random() * (max + 1 - min)) + min
      : "impossible que le min soit superieur au max";
  }
  /* 
    la fonction changeImage prend en parametre la balise img
    => elle permet de changer l'image en choisissant un nombre aleatoire 
        entre 1 et 5
    => elle remplace directement la source de l'image
  */
  function changeImage(img) {
    img.setAttribute("src", "images/" + aleatoire(1, 5) + ".jpeg");
  }
  
  var image = document.getElementsByTagName("img")[0];

  /*
    addEventListener ecoute le clique sur la page et 
    => execute la fonction changeImage 
    => avec en argument la balise image
  
  */
  
  addEventListener("click", function() {
    changeImage(image);
  });