// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btnMobile = document.getElementById("btn-mobile");

function toggleMenuMobile(event: PointerEvent) {
  const menuMobile = document.getElementById("nav");
  const button = event.currentTarget;

  if (button instanceof HTMLElement && menuMobile) {
    const active = menuMobile?.classList.contains("active");
    if (active) {
      menuMobile.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir Menu");
    } else {
      menuMobile.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar Menu");
    }
  }
}

btnMobile?.addEventListener("pointerdown", toggleMenuMobile);
