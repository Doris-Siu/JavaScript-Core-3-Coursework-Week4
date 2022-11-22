// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numArr = [];
  for (let element of numbers) {
    if (typeof element === "number") {
      numArr.push(element);
    }
  }
  let sum = numArr.reduce((p, c) => c + p);
  return sum / numArr.length;
}

module.exports = average;
