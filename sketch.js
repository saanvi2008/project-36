var dog,sadDog,happyDog;

var foodObj;
var feed, add;
var database;

var foodpos;

var lastFed = 0;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImg=loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton(" Feed The Dog =^^=");
  feed.position(600,95);
  feed.mousePressed(feedDog);

  add = createButton(" Add Food To The Dog =^^= ");
  add.position(740,95);
  add.mousePressed(addFood);

 foodObj = new Food();
 foodObj.getFoodStock();
 foodObj.deductFood();

}

function draw() {
  background(46,139,87);

  foodObj.display();

  fill("yellow");
  textSize(15);
  if(lastFed <= 0){
    
  }

  drawSprites();
}


function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock() <= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}

function addFood(){
  foodpos++
  database.ref('/').update({
    food : foodpos
  })
}




