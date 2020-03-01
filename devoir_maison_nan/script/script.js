var main = document.querySelectorAll(".carte");

main.forEach(el => {
  el.addEventListener("click", function() {
    el.parentNode.classList.toggle("mainR");
  });
});
