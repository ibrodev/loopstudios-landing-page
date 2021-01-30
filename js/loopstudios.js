const menuToggler = document.getElementById("menuToggler");
const menuToggle = document.getElementById("menuToggle");

menuToggler.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  //   console.log(e.target.classList.contains("button--menu-open"));
  //   e.target.classList.add("button--menu-open");

  if (!e.target.classList.contains("button--menu-open")) {
    e.target.classList.add("button--menu-open");
  } else {
    e.target.classList.remove("button--menu-open");
  }

  if (!menuToggle.classList.contains("header--nav-open")) {
    menuToggle.classList.add("header--nav-open");
  } else {
    menuToggle.classList.remove("header--nav-open");
  }

  if (!document.body.classList.contains("--menu-open")) {
    document.body.classList.add("--menu-open");
  } else {
    document.body.classList.remove("--menu-open");
  }
}
