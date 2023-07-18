const car = {
  type: "Fiat",
  model: "500",
  color: "white",
  fullname: function () {
    return (
      "My Car is " + car.type + " model " + car.model + " color: " + car.color
    );
  },
};

console.log(car.fullname());
