const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1, dinosaur2;

  beforeEach(function () {
    park = new Park("Jurassic World", 25);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('ankilosaurous', 'herbivore', 25);

  })

  it('should have a name', function () {
    const actualValue = park.name;
    assert.strictEqual(actualValue, "Jurassic World");
  });

  it('should have a ticket price', function () {
    const actualValue = park.price;
    assert.strictEqual(actualValue, 25);
  });

  it('should have a collection of dinosaurs', function () {
    const actualValue = park.dinosaurs;
    assert.deepStrictEqual([], actualValue);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actualValue = park.dinosaurs[0];
    assert.deepStrictEqual(actualValue, dinosaur1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur();
    const actualValue = park.dinosaurs;
    assert.deepStrictEqual([], actualValue);
  });

  it('should be able to find the dinosaur that attracts the most visitors')

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species')


});
