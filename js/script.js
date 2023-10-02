// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// humberger di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//active none
const humberger = document.querySelector("#humberger-menu");
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
