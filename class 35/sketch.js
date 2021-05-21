var ball;
var position,database;
var bg,ballImg;


function preload(){
    bg=loadImage("bg.png");
    ballImg=loadImage("ball.png");
}
function setup(){
    createCanvas(1000,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.addImage(ballImg)
    var loc=database.ref("ball/position");
loc.on("value",readop)

}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
database.ref("ball/position").set({
    'x':position.x+x,
    'y':position.y+y

})
}
function readop(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;
}