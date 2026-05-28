// Multiplication function
const multiply = function (a, b, c) {
  return a * b * c;
};
let result = multiply(2, 3, 4);
console.log(result);

//convertToSeconds function
const convertToSeconds = function (minutes) {
  return minutes * 60;
};
let seconds = convertToSeconds(5);
console.log(seconds);

// Fahrenheit to Celsius function
const fahrenheitToCelsius = function (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
};
let celsius = fahrenheitToCelsius(100);
console.log(celsius);

// Reverse string function
const reverseString = function (str) {
  return str.split("").reverse().join("");
};
let reversed = reverseString("Hello, World!");
console.log(reversed);

// CountVowels function
const countVowels = function (str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
let vowelCount = countVowels("Eita, Hola!");
console.log(vowelCount);

// IsPrime function
const isPrime = function (num) {
  if (num <= 1) return false;
  if (num <= 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};
let isNumPrime = isPrime(17);
console.log(isNumPrime); // Output: true
