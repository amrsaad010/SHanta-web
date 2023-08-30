

let menu = document.querySelector(".menu");
let navbar = document.querySelector(".nav");
let mark = document.querySelector(".xmark");

menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    mark.classList.toggle("active")
    navbar.classList.toggle("show")
})

mark.addEventListener("click", () => {
    mark.classList.toggle("active")
    menu.classList.toggle("active")
    navbar.classList.toggle("show")
})

// dark mood

const moonbtn = document.querySelector(".moon")
const icons = document.querySelectorAll(".fa-solid")
const currentTheme = localStorage.getItem("theme")
const content= document.querySelector(".content")


if (currentTheme === "dark") {
    setDarkMood()
}

moonbtn.addEventListener("click",function () {
    setTheme()
})

function setTheme() {
    let currentTheme = document.body.getAttribute("theme")
if (currentTheme === "dark") {
    setLightMood()
} else {
    setDarkMood()
}

}

function setDarkMood() {
document.body.setAttribute("theme","dark")
localStorage.setItem("theme","dark")
moonbtn.style.color = "white"
content.style.backgroundImage = "none";
}

function setLightMood() {
    document.body.removeAttribute("theme")
    localStorage.setItem("theme","light")
moonbtn.style.color = "#222"
content.style.backgroundImage = "../e-commerce/images/hero4.png";

}



let outImg = document.querySelectorAll(".products .box img")
let box = document.querySelectorAll(".products .box")


// change img
let mainImg = document.querySelector(".mainImg")
let smallImg = document.querySelectorAll(".smallImg")

smallImg[0].addEventListener("click", function () {
    mainImg.src = smallImg[0].src;
})
smallImg[1].addEventListener("click", function () {
    mainImg.src = smallImg[1].src;
})
smallImg[2].addEventListener("click", function () {
    mainImg.src = smallImg[2].src;
})
smallImg[3].addEventListener("click", function () {
    mainImg.src = smallImg[3].src;
})
// ////////////
