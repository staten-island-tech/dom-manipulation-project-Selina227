const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("container-box"),
  name: document.getElementById("name"),
  cost: document.getElementById("cost"),
};

function makeCard() {
  const newCard = {
    name: DOMSelectors.name.value,
    cost: DOMSelectors.cost.value,
  };

  injectIntoDOM();
}

function injectIntoDOM() {}
