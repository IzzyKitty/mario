function preload() {
world_start = loadSound("world_start.wav");
setSprites();
MarioAnimation();
mario_jump=loadSound("jump.wav")
mario_coin=loadSound("coin.wav")
mario_gameover=loadSound("gameover.wav")
mario_kick=loadSound("kick.wav")
mario_die=loadSound("mariodie.wav")
}

function setup() {
canvas = createCanvas(1240,336);
canvas.parent('canvas')
instializeInSetup(mario);
video=createCapture(VIDEO)
video.size(800,400)
video.parent("game_console")
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotposes)
}

function draw() {
game()
}

function modelloaded(){
console.log("model had been loaded");
}

function gotposes(results){
if(results.length>0){
nosex=results[0].pose.nose.x
nosey=results[0].pose.nose.y
console.log("nosex"+nosex+"nosey"+nosey);
}
}