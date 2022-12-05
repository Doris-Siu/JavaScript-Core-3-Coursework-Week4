let romanHash = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
function convertToNewRoman(n) {
  let stayNumber = [3];
  let remainder = n;
  let currentDigit = 0;

  let result = [];

  for (let i = 0; i < n.toString().length; i++) {
    let remainderStr = remainder.toString();
    let digitLimit = Math.pow(10, i);
    let lastNumber = Number(remainderStr[remainderStr.length - 1 - i]);
    if (lastNumber > 0) {
      result.push(GetForDigit(i, lastNumber));
      remainder = remainder - lastNumber * digitLimit;
    }
  }
  return result.reverse().join("");
}
function GetForDigit(d, n) {
  let one = Math.pow(10, d) * 1;
  let five = Math.pow(10, d) * 5;
  let ten = Math.pow(10, d + 1);
  if (n == 9) {
    return romanHash[one] + romanHash[ten];
  } else if (n >= 5) {
    return romanHash[five] + "".padStart(n - 5, romanHash[one]);
  } else if (n == 4) {
    return romanHash[one] + romanHash[five];
  } else {
    return "".padStart(n, romanHash[one]);
  }
}
//console.log(convertToNewRoman(944));

module.exports = convertToNewRoman;
