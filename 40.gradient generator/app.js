let color1 = document.querySelector(".c1");
let color2 = document.querySelector(".c2");
let gradientCont = document.querySelector("#gradient-cont");
let btn = document.querySelector(".randomcolorbtn");

function makecolor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor.padStart(6, '0'); // Ensure the color is always 6 digits
}

function generateGradient() {
    color1.value = "#" + makecolor();
    color2.value = "#" + makecolor();
    gradientCont.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

function setgradient() {
    gradientCont.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

window.addEventListener("load", generateGradient);
color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
btn.addEventListener("click", generateGradient);