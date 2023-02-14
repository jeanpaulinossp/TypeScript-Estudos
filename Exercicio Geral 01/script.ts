interface userData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

const form = document.querySelector<HTMLElement>("#form");

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem("UserData", JSON.stringify(window.UserData));
  }
}

form?.addEventListener("keyup", handleInput);
