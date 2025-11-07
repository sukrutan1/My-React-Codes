var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (num) {
  return num * 2;
});

//Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(function (num) {
  return num > 10;
});
//Reduce - Accumulate a value by doing something to each item in an array.
var number = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
//Find - find the first item that matches from an array.

var number2 = numbers.find(function (num) {
  return num > 10;
});

//FindIndex - find the index of the first item that matches.
var number3 = numbers.findIndex(function (num) {
  return num > 10;
});
