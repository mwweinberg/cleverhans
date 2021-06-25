var introPageText = "Guten Tag! I am Herr Doktor Osten. My clever horse Hans would like to calculate for you!"
var inputPageText = "Bitte pick your numbers so that Hans can calulate for you!"

var calc1 = 1
var calc2 = 2
var calcOut

//variables to hold the text value of the calc numbers
var calc1Text;
var calc2Text;


//holds all of the game options
var gameOptions = {
    canvasWidth : 640,
    canvasHeight : 480,
    tweenSpeed: 2000

}

// loads after the DOM has loaded
window.onload = function() {
    //creates the configuration file
    var gameConfig = {
        width: gameOptions.canvasWidth,
        height: gameOptions.canvasHeight,
        backgroundColor: 0xecf0f1,
        //creates the phaser scenes
        scene: [bootGame, introPage, inputPage, mathPage]
    }
    //instantiates a new phaser game called game, calls config file
    game = new Phaser.Game(gameConfig);
    //locks keyboard/mouse control to this window
    window.focus();
    //calls the resizeGame function
    resizeGame();
    //calls the resizeGame function again every time the window is resized
    window.addEventListener("resize", resizeGame);

}

//creates a child of the Phaser.Scene class
class bootGame extends Phaser.Scene{
    //this is the key that identifies the scene
    //'super accesses the Phaser.Scene class constructor() function
    constructor(){
        super("BootGame");
    }
    preload(){
        this.load.image("osten_und_hans", "assets/images/Osten_und_Hans.jpg");
        this.load.image("restart", "assets/images/restart.png");
        this.load.image("osten_face", "assets/images/Osten_face.jpg");
        this.load.image("osten_face_right", "assets/images/Osten_face_right.jpg");
        this.load.image("plus_image", "assets/images/plus.png");
        this.load.image("minus_image", "assets/images/minus.png");
        this.load.image("to_hans", "assets/images/tohans.png");
        this.load.spritesheet('brawler', "assets/images/brawler48x48.png", {frameWidth: 40, frameHeight: 48});


    }
    //create() functions are automatically executed when the scene is called
    create(){
        console.log("game is booting...");
        //calls the  next scene
        this.scene.start("IntroPage");
    }
}

class introPage extends Phaser.Scene{
    constructor(){
        super("IntroPage");
    }
    create(){
        console.log("introPage creating");
        //adds the image using a variable so that it can be accessed using the tween function
        //setAlpha(0) adds it invisibly so that it can be faded in
        const ostenHans = this.add.image(402, 240, "osten_und_hans").setAlpha(0);

        //tween to fade in the image
        this.tweens.add({
            //target of the tween
            targets: ostenHans,
            //moving alpha of the image to 1
            alpha: 1,
            //sets the pace of the transition
            duration: gameOptions.tweenSpeed,
            //this allows you to trigger functions within onComplete
            //I don't know why
            callbackScope: this,
            //function that runs once the tween has completed
            onComplete: function(){
                console.log("tween complete");
                this.addText();
                this.addToHansButton();

            }
        });
    }

    addText(){
        var welcomeText = this.add.text(10,0, introPageText, {fontFamily: 'GermaniaOne-Regular'});
        welcomeText.setStyle({
            color: 'white',
            wordWrap: {width: 150}
        });
    }

    addToHansButton(){
        var toHansButton = this.add.image(500, 400, "to_hans");
        toHansButton.setInteractive();
        toHansButton.on("pointerdown", function(){
           console.log("click");
           this.scene.start("InputPage");
        }, this);
    }



}

class inputPage extends Phaser.Scene {
    constructor(){
        super("InputPage");
    }
    create(){
        console.log("input page loaded");
        //adds the face image
        this.add.image(50, 50, "osten_face_right");
        //adds the text at the top by first creating a variable
        var ostenText = this.add.text(150, 50, inputPageText);
        //and then setting the style on the variable
        ostenText.setStyle({
            color: 'black',
            wordWrap: {width: 300}
        });

        //this is another way to create the text
        // this.make.text({
        //     x: 250,
        //     y: 50,
        //     text: inputPageText,
        //     style: {
        //         color: 'blue',
        //         wordWrap: {width: 50}
        //     }
        // });

        //variable to hold the text elements of dislpaying calc1
        calc1Text = this.add.text(150, 250, calc1);
        calc1Text.setStyle({
            color: 'black'
        });
        //and calc2
        calc2Text = this.add.text(400, 250, calc2);
        calc2Text.setStyle({
            color: 'black'
        });

        //add the buttons
        this.addPlusCalc1();
        this.addMinusCalc1();
        this.addPlusCalc2();
        this.addMinusCalc2();
        this.addAddButton();

    }

    //TODO: create minusPlusCalc1, addPlusCalc2, and minusPlusCacl2 functions
    //      create calc2Text variable
    //      add calc2Text
    //      create buttons to add the numbers together/advance the scene

    //adds the plus icon
    //increments the value of calc1 by adding 1
    addPlusCalc1(){
        //variable for the plus icon
        var plusCalc1 = this.add.image(65, 200, "plus_image");
        //makes the plus icon interactive
        plusCalc1.setInteractive();
        //when the plus icon is pressed
        plusCalc1.on("pointerdown", function(){
            //print something
            console.log("plusCalc1");
            //increment calc1 by 1
            calc1 = calc1 +1;
            //trigger addCalc1Text to write the new number
            calc1Text.setText(calc1);
            //**this.addCalc1Text();
            //print something
            console.log("calc1 = " + calc1);
            //TODO: redraw calc1 after incrementing it
        }, this);
    }

    addMinusCalc1(){
        var minusCalc1 = this.add.image(65, 350, "minus_image");
        minusCalc1.setInteractive();
        minusCalc1.on("pointerdown", function(){
            calc1 = calc1 - 1;
            calc1Text.setText(calc1);
        }, this);
    }

    addPlusCalc2(){
        var plusCalc2 = this.add.image(450, 200, "plus_image");
        plusCalc2.setInteractive();
        plusCalc2.on("pointerdown", function(){
            calc2 = calc2 + 1;
            calc2Text.setText(calc2);
        }, this);
    }

    addMinusCalc2(){
        var minusCalc2 = this.add.image(450, 350, "minus_image");
        minusCalc2.setInteractive();
        minusCalc2.on("pointerdown", function(){
            calc2 = calc2 - 1;
            calc2Text.setText(calc2);
        }, this);
    }

    addAddButton(){
        var addButton = this.add.image(275, 250, "restart");
        addButton.setInteractive();
        addButton.on("pointerdown", function(){
            calcOut = calc1 + calc2;
            this.scene.start("MathPage");
        }, this);
    }
}

class mathPage extends Phaser.Scene {
    constructor(){
        super("MathPage");
    }

    create(){
        var calcOutValue = this.add.text(200, 200, calcOut);
        calcOutValue.setStyle({
            color: 'black'
        });

        //creates the animation object
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 8,
            //repeat: calcOut
        });

        //inserts the animation object
        const cody = this.add.sprite(400, 300);
        //scales the animation object
        cody.setScale(2);
        //plasy the animation object calcOut number of times
        cody.play({key: 'walk', repeat: calcOut});

        //adds the reset button
        this.addResetButton();

    }

    addResetButton(){
        var resetButton = this.add.image(100, 400, "restart");
        resetButton.setInteractive();
        resetButton.on("pointerdown", function(){
            this.scene.start("InputPage");
        }, this);
    }
}


//function to resize the canvas whenever the window is resized
function resizeGame() {
    //find the game's canvas
    var canvas = document.querySelector("canvas");
    //figure out current window size
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    //window size ratio
    var windowRatio = windowWidth / windowHeight;
    //window game ratio
    var gameRatio = game.config.width / game.config.height;
    //resize based on situation. In this case canvase can conver full width
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    //in this case cover full height
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}