function sales(carsSold) {
  let totals = {};
  totals["Ford"] = carsSold
    .filter((car) => car.make === "Ford")
    .map((car) => car.price)
    .reduce((p, c) => c + p);
  totals["Honda"] = carsSold
    .filter((car) => car.make === "Honda")
    .map((car) => car.price)
    .reduce((p, c) => c + p);
  totals["Land Rover"] = carsSold
    .filter((car) => car.make === "Land Rover")
    .map((car) => car.price)
    .reduce((p, c) => c + p);
  totals["Toyota"] = carsSold
    .filter((car) => car.make === "Toyota")
    .map((car) => car.price)
    .reduce((p, c) => c + p);
  return totals;
}

module.exports = sales;
