let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let arg = [3, 21, 88, 4, 36];
  let assert = 88;
  let assertArr = [3, 21, 88, 4, 36];
  // Act
  let result = getLargestNumber(arg);
  // Assert
  expect(result).toEqual(assert);
  expect(arg).toEqual(assertArr);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
