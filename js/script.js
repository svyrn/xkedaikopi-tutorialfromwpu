//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//jika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar=menutup menu
const hmneu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hmneu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
