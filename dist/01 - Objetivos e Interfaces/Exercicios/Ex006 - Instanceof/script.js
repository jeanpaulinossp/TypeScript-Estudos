"use strict";
const link = document.getElementById("origamid");
console.dir(link);
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http://", "https://");
}
//# sourceMappingURL=script.js.map