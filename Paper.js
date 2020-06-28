class Paper {
    constructor(x,y,radiusX,radiusY){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.body = Bodies.circle(x,y,radiusX,radiusY,options);
    this.image = loadImage("paper.png");
    this.radiusX = 10;
    this.radiusY = 10;
    World.add(world,this.body);
    }
    
}