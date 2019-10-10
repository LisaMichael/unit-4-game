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
    let randomTarget = [Math.floor(Math.random() * (targetNumber.length) + 19)];

    return randomTarget;
    //this is a test to test my code
    // alert(randomTarget)
  }

  // target()

  let targetPractice = target();




  // using QueryGenerator exercise code to generate text
  $("#gameDesc").html("<p>You will be given a random number at the start of the game.</p><p>There are four crystals below. By clicking on a crystal you, you will add a specific amount of points to your total score.</p><p>You win the game by matching your total score to random number. You lose the game if your total score goes above the random number. </p>The value of each crystal is hidden from you until you click on it.<p></p><p>Each time you when the game starts, the game will change the  value of each crystal.</p>");



  // jQuery alternative to: var newDiv = document.createElement("div");
  let newDiv = $("<div>");

  // jquery to add target score to game.js
  newDiv.html(targetPractice);

  // jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
  $("#gameTarget").append(newDiv);

  // use will use this code to apply CSS
  newDiv.attr("class", "targetDiv");

  // working on score title
// made titleScore a <p> and html then appended to scoreTitle
  const titleScore = $("<p>");
   titleScore.html("Your Total Score is: ");
  $("#scoreTitle").append(titleScore);

  //css attributes for scoreTitle
  //obtained syntax from: 
  //https://stackoverflow.com/questions/24687431/uses-jquery-attr-to-set-css/24687602
  titleScore.attr('style', 'background-color:turquoise');

  //create array of numbers between 1 and 4 for the gem image nth iterations 
  for (let i = 0; i < 4; i++) {
    numberOptions.push(i);
  }



  // used wk4 exercise 12 crystal example but tweaked it for gem columns

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
    imageCrystal.attr("data-crystalValue", numberOptions[i]);


    // used you tube video and fridge video to figure this out 
    //https://www.youtube.com/watch?v=Cc3K2jDdKTo
    //  each crystal image (with all it classes and attributes) will get added to the page.
    $('#gem' + [i]).append(imageCrystal);

  }

});

