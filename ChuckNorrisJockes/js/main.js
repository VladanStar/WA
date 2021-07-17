const jockServerAddress = "https://api.chucknorris.io/jokes/random";
function convertToJson(response) {
  return response.json();
}

function printJock(joke) {
  console.log(joke);
}

function extractJoke(dataObject) {
  return dataObject.value;
}

function printJokeToPage(contatainerJoke) {
  //const  div = document.querySelector("div")
  div.textContent = contatainerJoke;
  document.body.appendChild(div);
}

function printJokeToPage(jokes) {
  const container = document.querySelector("div");
  container.textContent = "";
  const span = document.createElement("span");
  span.textContent = jokes;
  container.appendChild(span);
}

function fetchJoke() {
  fetch(jockServerAddress)
    .then(convertToJson)
    .then(extractJoke)
    .then(printJokeToPage);
}

function rendersJokeToPage(jokes) {
  const container = document.querySelector("div");
  const span = document.createElement("span");
  span.textContent = jokes;
  container.appendChild(span);
}

function button() {
  const button = document.createElement("button");
  button.textContent = "joke";
  document.body.appendChild(button);
  button.addEventListener("click", fetchJoke);
}
button();

function creatContainer() {
  const container = document.createElement("div");
  document.body.appendChild(container);
  return container;
}
const container = creatContainer();