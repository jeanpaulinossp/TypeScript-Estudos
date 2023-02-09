"use strict";
const button1 = document.querySelector("button");
function handleClick1(event) {
    console.log(event.pageX);
}
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("pointerdown", handleClick1);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener("scroll", handleScroll);
function ativarMenu(event) {
    if (event instanceof MouseEvent) {
        console.log("Evento de Mouse", event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log("Evento de Touch", event.touches[0].pageX);
    }
}
document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
window.addEventListener("keydown", ativarMenu);
