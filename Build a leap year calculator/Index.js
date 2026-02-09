// Declare the year outside the function
let year = 2025;

// Define the function
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}

// Call the function and store result
let result = isLeapYear(year);

// Output the result
console.log(result);
