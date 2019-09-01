var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x3079f0});
//I dont know how to change renderer it's not doing anything
//change color above

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

//get image file below
var texture = PIXI.Texture.fromImage("littleduder2.png");

var sprite = new PIXI.Sprite(texture);

sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;

sprite.position.x = 200;
sprite.position.y = 200;

stage.addChild(sprite)

function animate()
{
  requestAnimationFrame(animate);
  sprite.rotation += 0.1;
  renderer.render(stage)
}
animate();
