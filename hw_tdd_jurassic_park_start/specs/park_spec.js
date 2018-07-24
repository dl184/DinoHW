const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('jurrasic world', 25)
    dinosaur1 = new Dinosaur('T-Rex', 'Carivore', 1000)
    dinosaur2 = new Dinosaur('Velociraptor', 'Carivore', 600)
    dinosaur3 = new Dinosaur('Diplodocus', 'Herbivore', 500)
    dinosaur4 = new Dinosaur('Iguanodon', 'Herbivore', 300)
    dinosaur5 = new Dinosaur('Iguanodon', 'Herbivore', 300)

  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'jurrasic world');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });


  it('should have a collection of dinosaurs', function(){
    park.dinosaurs.push(dinosaur1);
    park.dinosaurs.push(dinosaur2);
    park.dinosaurs.push(dinosaur3);
    park.dinosaurs.push(dinosaur4);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 4);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.remove(dinosaur1);
    const actual = park.dinosaur.length;
    assert.strictEqual(actual, 1);
  });
});

  it('should be able to find the dinosaur that attracts the most visitors');
  park.add(dinosaur1);
  park.add(dinosaur2);
  park.add(dinosaur3);
  park.add(dinosaur4);
  const actual = park.popularDinosaur().species
  assert.strictEqual(actual, 'T-Rex');
});


it('should be able to find all dinosaurs of a particular species');
park.add(dinosaur1);
park.add(dinosaur4);
park.add(dinosaur5);
assert.strictEqual(park.getBySpecies("Iguanodon").length, 2)

});


it('should be able to remove all dinosaurs of a particular species');

});
