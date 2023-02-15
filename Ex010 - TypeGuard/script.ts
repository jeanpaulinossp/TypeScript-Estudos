// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fetchCursosEx010() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursosEx010(json);
}

fetchCursosEx010();

interface Curso {
  nome: string;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  aulas: number;
  grauito: boolean;
  tags: string[];
}

function isCurso(value: unknown): value is Curso {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursosEx010(data: unknown) {
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
