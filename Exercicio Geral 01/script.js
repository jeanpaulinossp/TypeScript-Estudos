"use strict";
window.UserData = {};
const form = document.querySelector("#form");
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener("keyup", handleInput);
