$( document ).ready(function() {
let targetNumber = [];
let counter = 0;
let winCounter = 0;
let lossCounter = 0;
let numberOptions = [];

// create an array of numbers between 19 and 120

// create an array of numbers between 19 and 120 using a for loop

function target() {
  for (let i = 19; i < 121; i++) {
    targetNumber.push(i);
  }

  
  // create a random number for the targetNumber array
  let randomTarget = [Math.floor(Math.random() * targetNumber.length)];
  alert(randomTarget);

}

target()
//create an array of numbers between 1 and 12 for the crystal value 
for (let i = 0; i < 4; i++) {
  numberOptions.push(i);
}

// Create a random number for the gems numberOptions

// let randomTarget = [Math.floor(Math.random() * targetNumber.length)];
// alert(randomTarget);
let imageCrystal = $("<img>");

// Next we create a for loop to create crystals for every numberOption.
for (let i = 0; i < numberOptions.length; i++) {

  // For each iteration, we will create an imageCrystal


  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  imageCrystal.attr("src", "./assets/images/gem" + i + ".png");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalValue", numberOptions[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $('.gemRow').append(imageCrystal);
}

});

