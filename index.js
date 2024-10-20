const DOMSelectors = {
  box: document.getElementById("container-box"),
  form: document.querySelector("form"),
  nam: document.getElementById("name"),
  cos: document.getElementById("cost"),
  imag: document.getElementById("image"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = DOMSelectors.nam.value;
  const cost = DOMSelectors.cos.value;
  const imageURL = DOMSelectors.imag.value;

  const card = createObject(name, imageURL, cost);
  injectCard(card);
  clearFields();
  removeCard();
});

function createObject(name, imageURL, cost) {
  return {
    name: name,
    imageURL: imageURL,
    cost: cost,
  };
}

function injectCard(card) {
  const cardHTML = `<div class="card">
    <h2>${card.name}</h2>
    <img class="picture" src="${card.imageURL}">
    <h2>${card.cost}</h2>
    <button class="delete-btn">Delete</button>
  </div>`;

  DOMSelectors.box.insertAdjacentHTML("beforeend", cardHTML);
}

function clearFields() {
  DOMSelectors.nam.value = "";
  DOMSelectors.cos.value = "";
  DOMSelectors.imag.value = "";
}

function removeCard(event) {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", removeCard);
  });
  const card = event.target.parentElement;
  card.remove();
}
