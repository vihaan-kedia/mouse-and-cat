// global variables
var cat ,garden;
var background1;

// function pre load
function preload() {
cat = loadImage("cat1.png");   
catRunning = loadAnimation("cat2.png","cat3.png");
catSad = loadImage("cat4.png");
garden = loadImage("garden.png");
mouseStanding = loadImage("mouse1.png");
mouseTeasing = loadAnimation("mouse4.png");
mousePar = loadAnimation("mouse2.png","mouse3.png");
}

// function setup
function setup(){
createCanvas(900,750);
// background
background1 = createSprite(470,400,10,10);
background1.addImage(garden);
background1.scale = 1.0;

// cat sprite
cat1 = createSprite(710,650)
cat1.addImage(cat);
cat1.scale = 0.12;

// mouse sprite
mouse1 = createSprite(70,650)
mouse1.addImage(mouseStanding);
mouse1.scale = 0.12;
}

// function draw
function draw() {
// background color
background(200);

// keydown left arrow function
if(keyDown("LEFT_ARROW")){
cat1.velocityX = -5;
cat1.addAnimation("cat",catRunning);
cat1.changeAnimation("cat");
mouse1.addAnimation("mouse",mousePar)
mouse1.changeAnimation("mouse")
}


// is touching function for cat and mouse
if(cat1.isTouching(mouse1)){
cat1.velocityX = 0;
mouse1.addAnimation("mouse",mouseTeasing);
mouse1.changeAnimation("mouse");
cat1.addAnimation("catworry",catSad);
cat1.changeAnimation("catworry");
}

// drawsprites
drawSprites();
}


