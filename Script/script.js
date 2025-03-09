// Tungguan kabeh ka load
document.addEventListener("DOMContentLoaded", function () {
  // geus ka load kakara fetch
  const genreButton = document.getElementById("genre_klik");
  const genreMenu = document.querySelector(".page_bar");

  genreButton.addEventListener("click", function (event) {
    event.preventDefault(); // alusna button mun nga show dropdown, si link na kakara make <a></a>
    event.stopPropagation(); // meh teu nga bubble, dijalankeun 2x
    if (genreMenu.classList.contains("show")) {
      genreMenu.classList.remove("show");
    } else {
      genreMenu.classList.add("show");
    }
  });

  // meh teu otomatis di tutup pas ngaklik di jero menu
  genreMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // tutup pas mencet diluar
  document.addEventListener("click", function () {
    genreMenu.classList.remove("show");
  });
});
