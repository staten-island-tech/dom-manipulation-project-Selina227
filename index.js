const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
};

function changeColor() {
  let button = document.querySelector("btn");
  //listen for a click event
  button.addEventListener("click", function (event) {
    //prevents default behavior
    event.preventDefault();
    //logging the click event
    console.log(event.target);
    //get info from the form
  });
}
