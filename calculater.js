// Get the input field and all buttons
let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = ""; // To store the current expression
let arr = Array.from(buttons); // Convert NodeList to Array

arr.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string); // Evaluate the expression
        input.value = string; // Display the result
      } catch {
        input.value = "Error"; // If eval fails (invalid expression)
      }
    } else if (e.target.innerHTML == 'AC') {
      string = ""; // Clear the input
      input.value = string;
    } else if (e.target.innerHTML == 'Del') {
      string = string.substring(0, string.length - 1); // Remove last character
      input.value = string;
    } else {
      string += e.target.innerHTML; // Append button value to string
      input.value = string; // Display the updated string
    }
  });
});
