$(document).ready(function () {
  let targetNumber = [];
  let winCounter = 0;
  let lossCounter = 0;
  let userScore = 0;
  let gemNumber = [];
  let randomTarget = [];

  // create initialize function
  // reset user score, gemvalues and random target number 
  function init() {
    userScore = 0;
    $("#playerScore").html(userScore);
    gemEmpty();
    gemInit();
    // $("#gameTarget").empty();
    target();
    // targetNew();
    newDiv.html(targetPractice);
  }

  // create target array of numbers between 19 and 120 using a for loop
   
  

    function target() {

      // for (let i = 19; i < 121; i++) {
      //   targetNumber.push(i);
      // }


    // create a random number for the targetNumber array
    randomTarget = Math.floor(Math.random() * 119) + 19;
    $("#gameTarget").text(randomTarget);

    //return the randomTarget value and close function
    return randomTarget;
    //this is a test to test my code
    // alert(randomTarget)
  }

  let targetPractice = target();


  //create array of numbers between 1 and 4 for the gem image nth iterations 
  for (let i = 0; i < 4; i++) {
    gemNumber.push(i);
  }

  function gemInit() {
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
      // This data attribute will be set equal to a random number between 1 and 12.
      gemImage.attr("data-gemValue", Math.floor(Math.random() * 12) + 1);


      // used youtube video and fridge video to figure this out 
      //https://www.youtube.com/watch?v=Cc3K2jDdKTo
      //  each gem image is appended to my id = gem nth  in its specific column
      $('#gem' + [i]).append(gemImage);

    }

  }

  // empty my gems div, i'll call it back later in init function to fill it
  function gemEmpty() {
    // $("#gem0").empty();
    // $("#gem1").empty();
    // $("#gem2").empty();
    // $("#gem3").empty();

for(let i=0;i<4; i++){
$("#gem"+i).empty();
}

  }



  // reference wk4 exercise 3 QueryGenerator exercise code to generate text
  $("#gameDesc").html("<p>You will be given a random number at the start of the game.</p><p>There are four crystals below. By clicking on a crystal you, you will add a specific amount of points to your total score.</p><p>You win the game by matching your total score to random number. You lose the game if your total score goes above the random number. </p>The value of each crystal is hidden from you until you click on it.<p></p><p>Each time you when the game starts, the game will change the  value of each crystal.</p>");

// function targetNew() {

  // jQuery  used to create a new <div>
  let newDiv = $("<div>");

  // jquery to add target score to game.js
  newDiv.html(targetPractice);

  // added newDiv to id=gameTarget 
  $("#gameTarget").append(newDiv);

  // use will use this code to apply CSS
  newDiv.attr("class", "targetDiv");

// }



  // working on score title label
  // made titleScore a <p> and html then appended to scoreTitle
  const titleScoreLabel = $("<p>");
  titleScoreLabel.html("Your Total Score is: ");
  $("#scoreTitle").append(titleScoreLabel);

  //css attributes for scoreTitle
  //obtained syntax from: 
  //https://stackoverflow.com/questions/24687431/uses-jquery-attr-to-set-css/24687602
  titleScoreLabel.attr('style', 'background-color:turquoise');

  //reset my gems after win/loss or prior to start of game
  gemInit();

  //startGame function allows a user to start a new game after win/loss
  startGame();

  // created on click to apply to gems created above
  // using the class "gem-image we created above"
  function startGame() {

    $(".gem-image").on("click", function () {



      // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
      // Using .attr("data-gemValue") to obtain the value out from the "data-gemValue" attribute.
      //
      // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

      gemValue = ($(this).attr("data-gemValue"));
      gemValue = parseInt(gemValue);
      console.log(gemValue);


      // jQuery alternative to add a new div
      let scoreDiv = $("<div>");

      // mutliply userScore by one to convert to int .. 
      // i could use parseInt also
      userScore = userScore * 1;


      // combine existing score + gem value
      userScore += gemValue;
      scoreDiv.html(userScore);

      // add scoreDiv to #playerScore
      $("#playerScore").html(scoreDiv);

      // use will use this code to apply CSS
      scoreDiv.attr('style', 'background-color:turquoise');



      // if user's score = target score, end user wins
      if (userScore === parseInt(targetPractice)) {
        winCounter++;
        init();

        // created start game function, so user can play after win/lose
        startGame();
      }

      else if (userScore >= randomTarget) {
        alert("You lose!!");
        lossCounter++;
        init();
        startGame();
      }
    })
  }
})
