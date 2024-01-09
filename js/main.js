//  Navbar

let btn = document.querySelector(".toggle-menu");
let links = document.getElementById("links");

btn.addEventListener("click", function () {
  links.classList.toggle("active");
});

// loader

const fadeOut = () => {
  const loader = document.querySelector(".wrapper");
  setTimeout(() => {
    loader.classList.add("fade");
  }, 2000);
};

window.addEventListener("load", fadeOut);

// Information About Game

let det = document.getElementsByClassName("deta");
let ico = document.getElementsByClassName("icon");

for (let i = 0; i < det.length; i++) {
  det[i].addEventListener("click", function () {
    ico[i].classList.toggle("active");
    let parent = this.parentElement;
    if (parent.style.maxHeight) {
      parent.style.maxHeight = null;
      parent.style.backgroundColor = "transparent";
    } else {
      parent.style.maxHeight = parent.scrollHeight = 200 + "px";
      parent.style.backgroundColor = "#2c323d";
    }
  });
}

// New tabs Game
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".container > .game-card");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "grid";
  });
});
