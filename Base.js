class BaseClass{
  constructor(x, y, width, height,isstatic, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      if(isstatic){
        Matter.Body.setStatic(this.body, true)
      }
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      angleMode(RADIANS);
      rotate(angle);
      imageMode(CENTER);
      if(this.image){
        image(this.image, 0, 0, this.width, this.height);
      }else{
        rectMode(CENTER);
        fill(255,255,255);
        rect(0,0,this.width,this.height);
      }
      pop();
    }
}