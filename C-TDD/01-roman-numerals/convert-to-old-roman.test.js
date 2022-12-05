let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let arg = 1;
  let assert = "I";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns L if passed 50 as an argument", function () {
  // Arrange
  let arg = 50;
  let assert = "L";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns C if passed 100 as an argument", function () {
  // Arrange
  let arg = 100;
  let assert = "C";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns D if passed 500 as an argument", function () {
  // Arrange
  let arg = 500;
  let assert = "D";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns M if passed 1000 as an argument", function () {
  // Arrange
  let arg = 1000;
  let assert = "M";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns VII if passed 7 as an argument", function () {
  // Arrange
  let arg = 7;
  let assert = "VII";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns XVIII if passed 18 as an argument", function () {
  // Arrange
  let arg = 18;
  let assert = "XVIII";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});
test("returns XVIII if passed 2501 as an argument", function () {
  // Arrange
  let arg = 2501;
  let assert = "MMDI";
  // Act
  let result = convertToOldRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});
