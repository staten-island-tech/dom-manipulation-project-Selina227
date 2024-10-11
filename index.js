const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("container-box"),
};

function createCard() {
  const newCard = {
    text: DOMSelectors.text.value,
  };
  let form = document.querySelector("form");
  //listen for a click event
  button.addEventListener("submit", function (event) {
    //prevents default behavior
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    //get info from the form
  });
}
