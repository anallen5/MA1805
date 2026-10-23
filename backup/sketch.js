//let this be 03 instead
//just hold this here justttttttt in case (haven't made the og file properly)

let i = 0;
let x = 5;
let y = 0;

// Try to find a good set of lyrics that are like... artistic? 
// incorp colors, not hard? can be random shades with the same hue
const lyricText = " testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest";
const textArray = lyricText.split(""); // "List" of words

function setup(){
	createCanvas(windowWidth, windowHeight); 
  background(0);
  frameRate(60); // fps
}

function draw(){
while (y<windowHeight) {
  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(random(0, 0), random(20, 255), random(0, 0)); //random colors! was tricky to figure out, so don't lose it.
    stroke(100);
    console.log(i);
    textSize(17);
    textFont("Courier");
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 

    i++ // self-increase!
    y=y+11; 
    y++;
  }else{
    i=0;
    y=0; // reset
    background(0); //the background. mess with this background.
    x=x+8
  }
}
if (y>=windowHeight) {x=x+5; y=0; text(textArray[i], y, x);}
if (x>=windowWidth) {x=5; y=0;}
}
