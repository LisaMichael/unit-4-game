$(document).ready(function () {
  let targetNumber = [];
  let counter = 0;
  let winCounter = 0;
  let lossCounter = 0;
  let userScore = 0;
  let gemNumber = [];
  let gemClick = [];
  let randomGemClick = [];


  // create target array of numbers between 19 and 120 using a for loop

  function target() {
    for (let i = 19; i < 121; i++) {
      targetNumber.push(i);
    }


    // create a random number for the targetNumber array
    let randomTarget = [Math.floor(Math.random() * (targetNumber.length) + 19)];

    //return the randomTarget value and close function
    return randomTarget;
    //this is a test to test my code
    // alert(randomTarget)
  }

  let targetPractice = target();


  // reference wk4 exercise 3 QueryGenerator exercise code to generate text
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
  const titleScoreLabel = $("<p>");
  titleScoreLabel.html("Your Total Score is: ");
  $("#scoreTitle").append(titleScoreLabel);

  //css attributes for scoreTitle
  //obtained syntax from: 
  //https://stackoverflow.com/questions/24687431/uses-jquery-attr-to-set-css/24687602
  titleScoreLabel.attr('style', 'background-color:turquoise');


  //create array of numbers between 1 and 4 for the gem image nth iterations 
  for (let i = 0; i < 4; i++) {
    gemNumber.push(i);
  }


  // used wk4 exercise 12 crystal example but tweaked it 
  // so each nth gem image appears in its specific column
  //  for loop to create crystals for each nth numberOption.
  for (let i = 0; i < gemNumber.length; i++) {

    // For each iteration, we will create an gemImage
    let gemImage = $("<img>");

    // each crystal will be given the class ".gem-image".
    gemImage.addClass("gem-image");

    // Each gemImage in the gemNumber array will be given a src link to the gem image
    gemImage.attr("src", "./assets/images/gem" + [i] + ".jpg");

    // Each gemImage will be given a data attribute called data-gemValue.
    // data-gemValue will be used further down in code for onClick
    // This data attribute will be set equal to the array value.
    gemImage.attr("data-gemValue", gemNumber[i]);


    // generate a random number 
    let GemClick = [Math.floor(Math.random() * 12) + 1];
    alert(GemClick);
    randomGemClick.push(gemClick);

    // used youtube video and fridge video to figure this out 
    //https://www.youtube.com/watch?v=Cc3K2jDdKTo
    //  each gem image is appended to my gem row in its specific column
    $('#gem' + [i]).append(gemImage);

  }

  // created on click to apply to gems created above
  // using the class "gem-image we created above"
  $(".gem-image").on("click", function () {



    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using .attr("data-gemValue") to obtain the value out from the "data-gemValue" attribute.
    //
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    gemValue = ($(this).attr("data-gemValue"));
    gemValue = parseInt(gemValue);


    // jQuery alternative to: var newDiv = document.createElement("div");
    let scoreDiv = $("<div>");

    // jquery to add target score 
    alert(randomGemClick + "test");
    userScore = userScore * 1;
    userScore += randomClick;
    scoreDiv.html(userScore);
    // jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
    $("#playerScore").append(scoreDiv);

    // use will use this code to apply CSS
    scoreDiv.attr('style', 'background-color:turquoise');

    // We then add the gemValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    // userScore += gemValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + userScore);

    // if (userScore === randomTarget) {
    // alert("You win!");
    // }

    // else if (userScore >= randomTarget) {
    // alert("You lose!!");
  })
})
