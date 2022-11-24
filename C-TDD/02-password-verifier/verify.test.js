let verify = require("./verify");

test("If the password is not less than 8 characters", function () {
  // Arrange
  let pw = "1234567";
  let assert = 'Password rejected';
  // Act
  let result = verify(pw);
  // Assert
  expect(result).toEqual(assert);
});

test("If the password is not null", function () {
  // Arrange
  let pw = null;
  let assert = 'Password rejected';
  // Act
  let result = verify(pw);
  // Assert
  expect(result).toEqual(assert);
});

test("If the password have at least 1 uppercase letter", function () {
  // Arrange
  let pw = "abc12345";
  let assert = 'Password rejected';
  // Act
  let result = verify(pw);
  // Assert
  expect(result).toEqual(assert);
});

test("If the password have at least 1 number", function () {
  // Arrange
  let pw = "abcdefg";
  let assert = 'Password rejected';
  // Act
  let result = verify(pw);
  // Assert
  expect(result).toEqual(assert);
});

