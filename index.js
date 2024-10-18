const DOMSelectors = {
  text: document.querySelector("text"),
  box: document.getElementById("container-box"),
  form: document.querySelector("form"),
  nam: document.getElementById("name"),
  cos: document.getElementById("cost"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = DOMSelectors.nam.value;
  const cost = DOMSelectors.cos.value;

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
function injectCard() {
  const cardHTML = `<div id ="container-box">
    <div class="card">
        <label id = "name" class="text">Object Name:</label>
        <input type="text"/>
        <button type ="submit">Submit</button>
      </div>
      <div class="card">
        <label id ="cost" class="text">Object Cost:</label>
        <input type="text"/>
        <button type ="submit">Submit</button>
      </div>
      <div class="card">
        <label id ="image" class="text">Object Image:</label>
        <input type="text"/>
        <button type ="submit">Submit</button>
      </div>
    </div>`;
  DOMSelectors.form.insertAdjacentHTML("afterend", cardHTML);
}
function clearFields() {
  DOMSelectors.name.value = "";
  DOMSelectors.cost.value = "";
}

function clickDelete() {}
