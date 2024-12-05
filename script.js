// Get references to the button, input, and output elements in the DOM
const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const outputEl = document.getElementById("output");

// Define Roman numeral values and their corresponding symbols
const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" }
];

// Function to convert a number to a Roman numeral
const romanConverter = (input) => {
  return romanNumerals.reduce((roman, { value, numeral }) => {
    // While the input number is greater than or equal to the current Roman value
    while (input >= value) {
      // Append the Roman numeral symbol to the result
      roman += numeral;
      // Subtract the Roman numeral value from the input number
      input -= value;
    }
    return roman; // Return the converted Roman numeral string
  }, "");
};

// Add a click event listener to the convert button
convertBtn.addEventListener("click", () => {
  const inputValue = parseInt(numberInput.value, 10); // Parse the input as an integer

  // Validate the input and handle errors or out-of-range values
  if (!inputValue) {
    outputEl.textContent = "Please enter a valid number"; // Invalid input
  } else if (inputValue <= 0) {
    outputEl.textContent = "Please enter a number greater than or equal to 1"; // Out of range (too low)
  } else if (inputValue >= 4000) {
    outputEl.textContent = "Please enter a number less than or equal to 3999"; // Out of range (too high)
  } else {
    // Convert the input number to a Roman numeral and display it
    outputEl.textContent = romanConverter(inputValue);
  }
});
