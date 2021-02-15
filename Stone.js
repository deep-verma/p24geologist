class Stone {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':3.0
      }
      this.body = Bodies.rectangle(x, y, 50, height, options);
      this.width = 50;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);//maintain the order ....
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      strokeWeight(7);
      stroke("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  