const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState=0
var clouds
function preload() {
//preload the images here
backgroundImg = loadImage("art/background.png");
//cloudsImg= loadImage("art/cloud.png")

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
 // clouds=new Cloud(20,20)
 
    
  // create sprites here

}

function draw() {
  background(backgroundImg);
//clouds.display()
//drawSprites();
}

