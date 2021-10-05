"use strict";
const hum = document.getElementById("hum");
const myNav = document.getElementById("myNav");
const cross = document.getElementById("cross");
const side_nav_container = document.querySelector(".side_nav_container");
//===============================================

// code for scroll button in head tag starts -----
let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNav").style.top = "0px";
  } else {
    document.getElementById("myNav").style.top = "-51px";
  }
  prevScrollpos = currentScrollPos;
});
// code for scroll button in head tag ends -----

//===============================================
// code for humburger button in mob_nav starts -----
let check = "hide";
//----------------
let mob_nav_hide_visible = function (ele) {
  //function for hide/show of small screen nav container
  if (ele === "visible") {
    side_nav_container.classList.remove("side_nav_container_show");
    side_nav_container.classList.add("side_nav_container_hide");
    check = "hide";
  }
  if (ele === "hide") {
    side_nav_container.classList.remove("side_nav_container_hide");
    side_nav_container.classList.add("side_nav_container_show");
    check = "visible";
  }
};
//------------------------------------------
window.addEventListener("resize", function () {
  //calling hide/show function of mob nav if mob_nav is visible on screen resize hiding it
  mob_nav_hide_visible("visible");
});
//------------------------------------------

//================================================
