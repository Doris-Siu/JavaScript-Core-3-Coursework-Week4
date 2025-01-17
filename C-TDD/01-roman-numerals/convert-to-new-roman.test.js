let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let arg = 1;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns L if passed 50 as an argument", function () {
  // Arrange
  let arg = 50;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns C if passed 100 as an argument", function () {
  // Arrange
  let arg = 100;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns D if passed 500 as an argument", function () {
  // Arrange
  let arg = 500;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns M if passed 1000 as an argument", function () {
  // Arrange
  let arg = 1000;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns VII if passed 7 as an argument", function () {
  // Arrange
  let arg = 7;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

test("returns XVIII if passed 18 as an argument", function () {
  // Arrange
  let arg = 18;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});
test("returns MMM if passed 3000 as an argument", function () {
  // Arrange
  let arg = 3000;
  let assert = expectedHash[arg];
  // Act
  let result = convertToNewRoman(arg);

  // Assert
  expect(result).toEqual(assert);
});

let expectedHash = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  11: "XI",
  12: "XII",
  13: "XIII",
  14: "XIV",
  15: "XV",
  16: "XVI",
  17: "XVII",
  18: "XVIII",
  19: "XIX",
  20: "XX",
  21: "XXI",
  22: "XXII",
  23: "XXIII",
  24: "XXIV",
  25: "XXV",
  26: "XXVI",
  27: "XXVII",
  28: "XXVIII",
  29: "XXIX",
  30: "XXX",
  31: "XXXI",
  32: "XXXII",
  33: "XXXIII",
  34: "XXXIV",
  35: "XXXV",
  36: "XXXVI",
  37: "XXXVII",
  38: "XXXVIII",
  39: "XXXIX",
  40: "XL",
  41: "XLI",
  42: "XLII",
  43: "XLIII",
  44: "XLIV",
  45: "XLV",
  46: "XLVI",
  47: "XLVII",
  48: "XLVIII",
  49: "XLIX",
  50: "L",
  51: "LI",
  52: "LII",
  53: "LIII",
  54: "LIV",
  55: "LV",
  56: "LVI",
  57: "LVII",
  58: "LVIII",
  59: "LIX",
  60: "LX",
  61: "LXI",
  62: "LXII",
  63: "LXIII",
  64: "LXIV",
  65: "LXV",
  66: "LXVI",
  67: "LXVII",
  68: "LXVIII",
  69: "LXIX",
  70: "LXX",
  71: "LXXI",
  72: "LXXII",
  73: "LXXIII",
  74: "LXXIV",
  75: "LXXV",
  76: "LXXVI",
  77: "LXXVII",
  78: "LXXVIII",
  79: "LXXIX",
  80: "LXXX",
  81: "LXXXI",
  82: "LXXXII",
  83: "LXXXIII",
  84: "LXXXIV",
  85: "LXXXV",
  86: "LXXXVI",
  87: "LXXXVII",
  88: "LXXXVIII",
  89: "LXXXIX",
  90: "XC",
  91: "XCI",
  92: "XCII",
  93: "XCIII",
  94: "XCIV",
  95: "XCV",
  96: "XCVI",
  97: "XCVII",
  98: "XCVIII",
  99: "XCIX",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  3000: "MMM",
};
