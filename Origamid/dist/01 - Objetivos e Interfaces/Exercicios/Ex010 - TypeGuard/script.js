"use strict";
async function fetchCursosEx010() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursosEx010(json);
}
fetchCursosEx010();
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursosEx010(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
      <div>
        <h2>${item.nome}</h2>
        <p>${item.horas}</p>
        <p>${item.tags.join(", ")}</p>
      </div>
      `;
        });
    }
}
//# sourceMappingURL=script.js.map