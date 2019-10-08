let targetNumber = [];
let counter = 0;
let winCounter = 0; 
let lossCounter=0;

// create an array of numbers between 19 and 120

for (let i=19; i<121; i++) {
targetNumber.push(i);
}

// create a random number for the targetNumber array
let randomTarget = [Math.floor(Math.random() * targetNumber.length)];
alert(randomTarget);
