console.log("working!");


let canvas = document.querySelector("#my-canvas");
canvas.style.backgroundColor = "lightgray";

// THE PAINTBRUSH
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green"; // to add color to the fill methods
// ctx.fillRect( xPos, yPos, width, heigth )
ctx.fillRect( 50, 50, 100, 50 );

ctx.fillStyle = "red"; // the next fill method color I use
ctx.fillRect( 50, 150, 80, 80 );

ctx.fillStyle = "blue";
ctx.fillRect( 90, 190, 80, 80 );

ctx.clearRect( 100, 200, 100, 100 );


// setTimeout( () => {
  // to clear the whole canvas
  // ctx.clearRect( 0, 0, canvas.width, canvas.height );
// }, 2000 )


// DRAWING LINES

ctx.beginPath(); // opening for a line

ctx.strokeStyle = "yellow"; // color of the line

// this is for the path of the line
ctx.moveTo(50, 500); // moves the cursor to a position
ctx.lineWidth = 12
ctx.lineTo(120, 550); // draws to the line indicated
ctx.lineTo(180, 550);
ctx.lineTo(100, 600);
ctx.lineTo(60, 540);

ctx.stroke(); // draws according to the path below

ctx.closePath(); // closes the path



// CIRCLES

// circunference
ctx.beginPath();
ctx.strokeStyle = "magenta";
// ctx.arc( xPox, yPox, radius, startAngle, endAngle, anticlockwiseBoolean );
ctx.arc( 400, 100, 80, 0, Math.PI, false );

ctx.stroke(); // draws according to the path below
ctx.closePath();

// circle
ctx.beginPath();

ctx.strokeStyle = "brown";
ctx.arc( 400, 100, 40, 0, 2 * Math.PI, true );
ctx.fill()

ctx.stroke(); // draws according to the path below
ctx.closePath();


// Text
ctx.fillStyle = "purple";
ctx.font = "100px serif";
// ctx.fillText( string, xPos, yPos )
ctx.fillText( "Hello", 300, 300 );




// images

let img = new Image();
img.src = "https://tinyurl.com/ironhack-pokemons/5.svg"

img.addEventListener("load", () => {
  ctx.drawImage( img, 300, 360, 80, 100 );
})

let img2 = new Image();
img2.src = "https://tinyurl.com/ironhack-pokemons/21.svg";

img2.addEventListener("load", () => {
  ctx.drawImage( img2, 400, 360, 80, 100 );
})



// RECURSION

// let controlVar = 0;

// function printSomething() {

//   controlVar++;
//   console.log("printing");

//   if (controlVar < 100) {
//     printSomething();
//   }

// }

// printSomething();

let cubeX = 50;
let cubeY = 720;
let cubeSpeed = 10;
let shouldCubeMove = true;

function cubeMovement() {

  // 1. clearing the canvas
  ctx.clearRect( 0, 0, canvas.width, canvas.height );

  // 2. movement or changes in elements
  cubeX = cubeX + cubeSpeed 
  cubeY = cubeY - cubeSpeed
  // cubeX++

  if (cubeX > 400) {
    shouldCubeMove = false;
  }

  // 3 drawing the elements
  ctx.fillStyle = "black";
  ctx.fillRect( cubeX, cubeY, 50, 50 );


  // 4 requestAnimationFrame control the game flow
  if (shouldCubeMove) {
    // cubeMovement();
    requestAnimationFrame(cubeMovement);
  }

}

cubeMovement()


