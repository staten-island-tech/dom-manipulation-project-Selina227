const DOMSelectors = {
  text: document.querySelector("text"),
  box: document.getElementById("container-box"),
  form: document.querySelector("form"),
  name: document.getElementById("name"),
  cost: document.getElementById("cost"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = DOMSelectors.name.value;
  const cost = DOMSelectors.cost.value;

  const card = createObject(name, cost, "");
  injectCard(card);
  clearFields();
  clickDelete();
});

function createObject(name, cost) {
  return {
    name: name,
    cost: cost,
  };
}
function injectCard() {}
function clearFields() {
  DOMSelectors.name.value = "";
  DOMSelectors.cost.value = "";
}

function clickDelete() {}
