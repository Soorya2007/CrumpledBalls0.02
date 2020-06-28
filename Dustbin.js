class Dustbin{
    constructor (x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 0,
            density : 0.4,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
  this.image = loadImage("dustbingreen.png");
  this.width = width;
  this.height = height;
  World.add(world,this.body);
}
  }
  