let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let arg = ["Irina", "Etza", "Daniel"];
  let assert = ["rn", "tz", "Dnl"];
  // Act
  let result = removeVowelsFromWords(arg);
  // Assert
  expect(result).toEqual(assert);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
