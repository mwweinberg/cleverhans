class Sprite {
    constructor(animation, x, y, speed) {
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.w = this.animation[0].width;
        this.len = this.animation.length;
        this.speed = speed;
        this.index = 0;

    }

    show() {
        //index can grow by decimal points but until it hits the next whole number it stays at the lower whole number
        //this slows the frame rate
        //index is incremented by the animate() function below

        //while index < (number of loops * animation.len)
        let index = floor(this.index) % this.len;
        image(this.animation[index], this.x, this.y);
    }

    animate(loop) {
        //advances the index position according to the speed
        this.index += this.speed;

        // if the position is greater than the number of frames * the number of loops (basically you got to the end), do a thing
        if (this.index > this.len * loop) {
             console.log('victory');
             //make the horse disappear
             this.x = width + 30;

             //adds a square just to show you can draw things
             fill(255, 204, 0);
             rect(0, 0, 50, 50);
        }
        console.log(this.index);
    }

}