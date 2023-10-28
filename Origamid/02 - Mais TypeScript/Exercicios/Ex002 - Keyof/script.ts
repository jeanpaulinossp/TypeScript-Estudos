async function fetchDataExKeyof<T>(url: string): Promise<T> {
  const base = "https://api.origamid.dev/json";
  const response = await fetch(base + url);
  return await response.json();
}

interface JogoExKeyof {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataforma: string[];
}

interface LivroExKeyof {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

function checkInterfaceExKeyof<Interface>(
  obj: unknown,
  key: keyof Interface
): obj is Interface {
  if (obj && typeof obj === "object" && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function handleDataExKeyof() {
  const jogo = await fetchDataExKeyof("/jogo.json");
  if (checkInterfaceExKeyof<JogoExKeyof>(jogo, "desenvolvedora")) {
    console.log(jogo);
  }

  const livro = await fetchDataExKeyof("/livro.json");
  if (checkInterfaceExKeyof<LivroExKeyof>(livro, "autor")) {
    console.log(livro);
  }
}

handleDataExKeyof();
