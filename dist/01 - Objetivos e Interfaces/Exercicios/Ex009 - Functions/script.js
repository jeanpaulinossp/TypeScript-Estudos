"use strict";
function arredValor(num) {
    if (typeof num === "number") {
        return Math.ceil(num);
    }
    else {
        return Math.ceil(Number(num)).toString();
    }
}
console.log(arredValor(200.98));
console.log(arredValor("203.32"));
//# sourceMappingURL=script.js.map