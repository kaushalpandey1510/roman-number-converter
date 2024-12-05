```markdown
# Roman Numeral Converter

This project is a simple JavaScript-based application that converts standard numerical format to Roman numerals. The application handles numbers from **1 to 3999** and includes input validation to ensure accuracy and usability.

## Features

- Converts numbers from **1 to 3999** into Roman numerals.
- Validates user input for:
  - Non-numeric values.
  - Numbers outside the allowed range (1–3999).
- Provides helpful error messages for invalid or out-of-range inputs.

## How It Works

1. Users input a number into the text box.
2. Upon clicking the **Convert** button:
   - If the input is valid, the app displays the Roman numeral equivalent.
   - If the input is invalid, the app displays an appropriate error message.

### Conversion Logic

The conversion uses a predefined list of Roman numeral mappings and reduces the number iteratively while appending the corresponding Roman numeral symbols to the result.

## Installation and Usage

### Steps to Use
1. Clone or download this repository.
2. Open the `index.html` file in your browser.
3. Enter a number (1–3999) in the input field and click the **Convert** button.
4. View the result or an error message based on the input.

## Example Usage

| Input | Output  |
|-------|---------|
| 1     | I       |
| 4     | IV      |
| 58    | LVIII   |
| 1994  | MCMXCIV |

## Code Overview

### Core Files
1. `index.html` – Contains the HTML structure of the app.
2. `style.css` – (Optional) Styles the app interface.
3. `script.js` – Contains the logic for converting numbers to Roman numerals.

### Conversion Mapping

The Roman numeral values and symbols are stored in an array of objects, as shown below:

```javascript
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
```

### Input Validation

The app validates user input as follows:
- **Empty Input**: Displays "Please enter a valid number."
- **Number <= 0**: Displays "Please enter a number greater than or equal to 1."
- **Number >= 4000**: Displays "Please enter a number less than or equal to 3999."

### Conversion Function

The `romanConverter` function iteratively reduces the input number while appending Roman numeral symbols:

```javascript
const romanConverter = (input) => {
  return romanNumerals.reduce((roman, { value, numeral }) => {
    while (input >= value) {
      roman += numeral;
      input -= value;
    }
    return roman;
  }, "");
};
```

## Contributing

Feel free to fork this repository and submit pull requests for enhancements or bug fixes.
# roman-number-converter
