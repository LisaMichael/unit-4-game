$(document).ready(function () {
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


    //this is a test to test my code
    // alert(randomTarget)
  }

  // target()

  // let targetPractice = target();
  // $('#gameTarget').append(document.createTextNode(targetPractice));
  // $("#gameTarget").text("Target: " + targetPractice);


// using QueryGenerator exercise code to generate text
$("#gameDesc").html("<p>game instructions </p><p> testtext2 </p>");

$("#gameTarget").html("<p>Target: </p>");

    // jQuery alternative to: var newDiv = document.createElement("div");
    var newDiv = $("<div>");

    // jQuery alternative to: newDiv.textContent = "A pleasure to meet you!";
    newDiv.html( "<p> target number goes here </p>");

    // jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
    $("#gameTarget").append(newDiv);

    // use will use this code to apply CSS
    newDiv.attr("class", "targetDiv");


  //create array of numbers between 1 and 4 for the gem image nth iterations 
  for (let i = 0; i < 4; i++) {
    numberOptions.push(i);
  }

  
  
 // used the exercise 12 crystal example but tweaked it for gem columns

  //  for loop to create crystals for each nth numberOption.
  for (let i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    let imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the gem image
    imageCrystal.attr("src", "./assets/images/gem" + [i] + ".jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    // imageCrystal.attr("data-crystalValue", numberOptions[i]);


    // used you tube video and fridge video to figure this out 
    //https://www.youtube.com/watch?v=Cc3K2jDdKTo
    //  each crystal image (with all it classes and attributes) will get added to the page.
    $('#gem'+[i]).append(imageCrystal);
    
  }

});

