function convertToOldRoman(n) {
  let remainder = n;
  let result = "";
  romanArr.forEach((x) => {
    let d = remainder / x;
    if (d > 0) {
      result += "".padStart(d, romanHash[x]);
    }
    remainder = remainder % x;
  });
  return result;
}
let romanArr = [1000, 500, 100, 50, 10, 5, 1];
let romanHash = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
module.exports = convertToOldRoman;
