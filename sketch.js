var dessertImg, iceImg, landscapeImg;
var ground;
var randomground;

function preload() {
    dessertImg = loadImage("assets/ground2.jpg");
    ninjarunning = loadAnimation(
        "assets/png/Run__000.png",
        "assets/png/Run__001.png",
        "assets/png/Run__002.png",
        "assets/png/Run__003.png",
        "assets/png/Run__004.png",
        "assets/png/Run__005.png",
        "assets/png/Run__006.png",
        "assets/png/Run__007.png",
        "assets/png/Run__008.png",
        "assets/png/Run__009.png",
    );

    ninjaflying = loadAnimation(
        "assets/png/Glide_000.png",
        "assets/png/Glide_001.png",
        "assets/png/Glide_002.png",
        "assets/png/Glide_003.png",
        "assets/png/Glide_004.png",
        "assets/png/Glide_005.png",
        "assets/png/Glide_006.png",
        "assets/png/Glide_007.png",
        "assets/png/Glide_008.png",
        "assets/png/Glide_009.png",
    );
}

function setup() {
    createCanvas(1000, 600);
    ground = createSprite(3000, 550, width, 20);
    ground.addImage(dessertImg);
    ground.scale = 0.5;
    ground.velocityX = -3;

    ninja = createSprite(50, 530, 30, 60);
    ninja.addAnimation("running", ninjarunning);
    ninja.addAnimation("flying", ninjaflying);
    ninja.scale = 0.25;

    invisibleGround = createSprite(20, 570, width, 5);
    invisibleGround.visible = false;
}

function draw() {
    background(255);
    if (ground.x < 0) {
        ground.x = 3000;
    }

    if ((keyDown("SPACE")) && ninja.y >= height - 220) {
        ninja.velocityY = -10;
        ninja.changeAnimation("flying");
    } else {
        ninja.changeAnimation("running");
    }

    ninja.velocityY = ninja.velocityY + 0.8;
    ninja.collide(invisibleGround);

    spawncrows();
    spawnfireball();

    drawSprites();
}

function spawncrows() {
    // write your code here
}

function spawnfireball() {
    // write your code here
}