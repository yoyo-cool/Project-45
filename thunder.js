class Thunder{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Walking Frame/walking_1.png")
      }
      display(){
        rectMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
      }
}