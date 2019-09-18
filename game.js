var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer({height:400, width:400 ,backgroundColor: 0x3079f0});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

//get image file below

var first_pose = new PIXI.Sprite(
  PIXI.Texture.from("realMcCoy.png") );
var second_pose = new PIXI.Sprite(
  PIXI.Texture.from("realMcCoy2.png") );
var third_pose = new PIXI.Sprite(
  PIXI.Texture.from("realMcCoy3.png") );
var fourth_pose = new PIXI.Sprite(
  PIXI.Texture.from("realMcCoy4.png") );

//Create copy of poses for ease in animation
var arrSprites = [];
for(var i = 0; i < 5; i++)
{
  arrSprites.push(first_pose);
  arrSprites.push(second_pose);
}

for(var i = 0; i < 5; i++)
{
  arrSprites.push(third_pose);
  arrSprites.push(fourth_pose);
}

//Creating and adding all sprites to container
var dance_floor1 = new PIXI.Container();
dance_floor1.position.x = 200;
dance_floor1.position.y = 200;
stage.addChild(dance_floor1);

dance_floor1.addChild(first_pose)
first_pose.anchor.x = 0.5;
first_pose.anchor.y = 0.5;
first_pose.position.x = 0;
first_pose.position.y = 0;

second_pose.anchor.x = 0.5;
second_pose.anchor.y = 0.5;
second_pose.position.x = 0;
second_pose.position.y = 0;

third_pose.anchor.x = 0.5;
third_pose.anchor.y = 0.5;
third_pose.position.x = 0;
third_pose.position.y = 0;

fourth_pose.anchor.x = 0.5;
fourth_pose.anchor.y = 0.5;
fourth_pose.position.x = 0;
fourth_pose.position.y = 0;

//function  to handle random mouse movement
function mouseHandle(e)
{
  //subtraction because sprites initially centered
  var new_x = Math.floor(Math.random() * 150) - 150;
  var new_y = Math.floor(Math.random() * 300) - 150;
  console.log("newx:" + new_x + "and new_y: " + new_y);
  // Move all sprites to same new position
  createjs.Tween.get(first_pose.position).to({x: new_x, y: new_y}, 1000);
  createjs.Tween.get(second_pose.position).to({x: new_x, y: new_y}, 1000);
  createjs.Tween.get(third_pose.position).to({x: new_x, y: new_y}, 1000);
  createjs.Tween.get(fourth_pose.position).to({x: new_x, y: new_y}, 1000);
}

first_pose.interactive = true;
first_pose.on('mousedown', mouseHandle);
second_pose.interactive = true;
second_pose.on('mousedown', mouseHandle);
third_pose.interactive = true;
third_pose.on('mousedown', mouseHandle);
fourth_pose.interactive = true;
fourth_pose.on('mousedown', mouseHandle);

var currentIndex = 0;
var count = 0;
setTimeout(nextSprite, 300);

function nextSprite()
{

  let length = arrSprites.length;
  let current = arrSprites[currentIndex % length];
  let next = arrSprites[(currentIndex + 1) % length];
  count++;
  currentIndex++;

  dance_floor1.removeChild(current);
  dance_floor1.addChild(next);

  setTimeout(nextSprite, 300);

}

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage)
}

animate();
