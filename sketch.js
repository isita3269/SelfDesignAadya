var dessertImg, iceImg, landscapeImg;
var ground;
var randomground;

function preload() {
    dessertImg = loadImage("assets/ground2.jpg");

}

function setup() {
    createCanvas(1000, 600);
    ground = createSprite(3000, 550, width, 20);
    ground.addImage(dessertImg);
    ground.scale = .5;
    ground.velocityX = -3;

}

function draw() {
    background(255)
    if (ground.x < 0) {
        ground.x = 3000;
    }

    drawSprites();
}