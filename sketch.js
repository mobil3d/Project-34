var dog,happyDog
var database
var foodS,foodStock

function preload()
{
  sitDog = loadImage("dogImg.png");
  dog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(50,50,250,250);
  dog.addImage(dog);

  database = firebase.database(); 

  foodStock = database.ref("Food");
    foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }


  drawSprites();
  
  //add styles here
  

}

//function to read values from DB
function readStock(data){
  foodS= data.val();
}

//function to write values in DB
function writeStock(x){

  if(x<=0){
    x = 0;
  } else{
    x=x -1;
  }
  
  database.ref('/').update({
    Food:x
  })
}








