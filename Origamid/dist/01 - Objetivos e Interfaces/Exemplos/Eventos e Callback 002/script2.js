"use strict";
const button2 = document.querySelector("button");
function handleClick2(event) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerHTML);
    }
}
button2?.addEventListener("click", handleClick2);
//# sourceMappingURL=script2.js.map