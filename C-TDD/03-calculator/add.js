function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let numArr = numbers.split(",");
  let sumArr = [];

  numArr.forEach((num) => {
    if (Number(num) < 0) {
      throw new Error(`negatives not allowed: ${num}`);
    } else if (Number(num) <= 1000) {
      sumArr.push(Number(num));
    }
  });

  return sumArr.reduce((c, p) => c + p, 0);
}

module.exports = add;
