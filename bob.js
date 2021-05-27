class Bob{
    constructor(x,y,r){
        var options = {
            restitution:1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0, 0, this.radius);
        pop();
      }
}