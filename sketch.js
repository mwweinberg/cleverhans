var i = 0;
var no1 = 0;
var no2 = 1;

//animation variables
let spritesheet;
let spritedata;
let animation = [];
let horses = [];


function preload() {
    spritedata = loadJSON('horse/horse.json');
    spritesheet = loadImage('horse/horse.png');
}


function setup() {
    createCanvas(700, 400);

    //breaks up the spritesheet into individual sprites
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }

    horses[0] = new Sprite(animation, 0, 50, 0.1);


}

function draw() {
    background(0);


    if (i == 0) {
        background(200, 200,200);
        textAlign(CENTER);
        textSize(50);


        //no 1 block
        text(no1, 200, 200);
        //no1 pos increment button
        rect(220, 160, 30, 30);
        //no1 neg increment button
        rect(220, 200, 30, 30);

        //no 2 block
        text(no2, 300, 200);
        //no2 pos increment button
        rect(320, 160, 30, 30);
        //no2 neg increment button
        rect(320, 200, 30, 30);

        //add button
        rect(270, 300, 50, 30);

  }

  if (i == 1) {
        background(200, 200,200);
        textAlign(CENTER);
        textSize(50);

        text((no1 + no2), width/2, height/2);

        //reset button
        rect(300, 300, 100, 50);

        for (let horse of horses) {
        horse.show();
        //this is where you pass the loops
        horse.animate(no1 + no2);
        }
  }

}

function mousePressed() {
  //**********stage0*********
  //no1 pos inc
  if (i == 0 && mouseX > 200 && mouseX < 250 && mouseY > 160 && mouseY < 190) {
      no1 = no1 + 1;
    }
  //no1 neg inc
  if (i == 0 && mouseX > 200 && mouseX < 250 && mouseY > 200 && mouseY < 230 && mouseIsPressed) {
      no1 = no1 - 1;
    }

    //no2 pos inc
  if (i == 0 && mouseX > 300 && mouseX < 350 && mouseY > 160 && mouseY < 190) {
      no2 = no2 + 1;
    }
  //no2 neg inc
  if (i == 0 && mouseX > 300 && mouseX < 350 && mouseY > 200 && mouseY < 230 && mouseIsPressed) {
      no2 = no2 - 1;
    }

  //add button
  if (i == 0 && mouseX > 270 && mouseX < 320 && mouseY > 300 && mouseY < 330 && mouseIsPressed) {
      i = 1;
    }

  //******stage 1*********
  //reset button
  if (i == 1 && mouseX > 300 && mouseX < 400 && mouseY > 300 && mouseY < 350 && mouseIsPressed) {
      i = 0;
    }


}
