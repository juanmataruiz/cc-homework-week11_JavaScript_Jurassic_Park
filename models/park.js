const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}


Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurs.pop();
};


module.exports = Park;
