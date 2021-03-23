var  database;
var form,game,player;
var gamestate=0;
var playerCount;
var canvas


function setup(){
  database = firebase.database();
 
 canvas=  createCanvas(500,500);

game= new Game();
game.getstate();
game.start();

}

function draw(){

  if (playerCount==4)
  {
    game.update(1);
  }
  if(gamestate===1)
  {
    clear ();
    game.play();
  }
  console.log(playerCount);
  console.log(gamestate);
}
