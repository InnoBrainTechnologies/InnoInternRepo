document.addEventListener("DOMContentLoaded", function() {
  // Get the button element by its class
  var button = document.querySelector(".custom-button");

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Change the button text when clicked
    if (button.innerText === "Click me") {
      button.innerText = "Clicked!";
    } else {
      button.innerText = "Click me";
    }
  });
});