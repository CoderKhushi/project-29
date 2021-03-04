class Ball{
    constructor(x, y, width, height, angle){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world,this.body);
    }
  
    display() {
     

      push();
      var angle = this.body.angle;
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      ellipse(100,200,20);
      pop();
    }
  }
 