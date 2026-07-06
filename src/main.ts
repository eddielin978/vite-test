import "./style.css";

const app = document.querySelector("#app");

function createHelloWorld(): string {
  return `<h1>Hello World!</h1>`;
}

if (app) {
  app.innerHTML = createHelloWorld();
}
