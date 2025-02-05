const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

menuBtn.addEventListener("click", () => {
sidebar.classList.toggle("active");
content.classList.toggle("active");
});