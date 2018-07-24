const Park = function (name, ticketPrice){
  this.name = name;
  this.ticketPrice = 25;
  this.dinosaurs = [];

}

Park.prototype.add = function(dinosaur){
this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function(dinosaur){
this.dinosaurs.splice(dinosaur);
}

/* Below we create a method called .popularDinosaur, we create a placeholder name
  of mostPopular and assign it to this.dinosaurs[0] which sets the array at index
  1, we then use a for loop using a placeholder name of dinosaurs in this.dinosaurs,
  we use an IF statement and use .guestsAttractedPerDay on the Dinosaur class which
  has a set value in the Dinosaur class.. we then check to see if its greater than
  the mostPopular and return the most popular one  */

Park.prototype.popularDinosaur = function(){
  var mostPopular = this.dinosaurs[0];
  for(dinosaurs of this.dinosaurs){
    if(Dinosaurs.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay){
      mostPopular = dinosaur;
    }
  }
  return mostPopular;
}

Park.prototype.getBySpecies = function(species){


module.exports = Park;
