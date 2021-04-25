class Bob{
    constructor(x,y,r){
        var options = {
            'restitution':1
            // 'friction':1.0,
            // 'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(this.ellipse, 0, 0, this.radius);
        pop();
      }
}