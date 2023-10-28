"use strict";
function toNumber(value) {
    if (typeof value === "number") {
        return Number(value);
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    else {
        throw "value deve ser um número ou uma string";
    }
}
//# sourceMappingURL=script.js.map