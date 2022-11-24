let add = require("./add");

test("Empty string will return 0", function () {
  // Arrange
  let arg = "";
  let assert = 0;
  // Act
  let result = add(arg);
  // Assert
  expect(result).toEqual(assert);
});

test("String contains 1 number will return that number", function () {
  // Arrange
  let arg = "5";
  let assert = 5;
  // Act
  let result = add(arg);
  // Assert
  expect(result).toEqual(assert);
});

test("String contains 2 numbers will return their sum", function () {
  // Arrange
  let arg = "3,6";
  let assert = 9;
  // Act
  let result = add(arg);
  // Assert
  expect(result).toEqual(assert);
});

test("Handle an unknown amount of numbers", function () {
  // Arrange
  let arg1 = "3,6,9,12";
  let assert1 = 30;

  let arg2 = "1,2,3,4,5,6,7,8,9";
  let assert2 = 45;
  // Act
  let result1 = add(arg1);
  let result2 = add(arg2);
  // Assert
  expect(result1).toEqual(assert1);
  expect(result2).toEqual(assert2);
});

test("Numbers bigger than 1000 should be ignored", function () {
  // Arrange
  let arg = "2,1001";
  let assert = 2;
  // Act
  let result = add(arg);
  // Assert
  expect(result).toEqual(assert);
});

test("Calling with a negative number will throw an error", function () {
  expect(() => {
    add("1,4,-1");
  }).toThrow(new Error("negatives not allowed: -1"));
});
