// const button2 = document.querySelector("button");

// function handleClick2(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }

// button2?.addEventListener("click", handleClick2);

const button2 = document.querySelector("button");

function handleClick2(event: MouseEvent) {
  if (event.currentTarget instanceof HTMLElement) {
    console.log(event.currentTarget.innerHTML);
  }
}

button2?.addEventListener("click", handleClick2);
