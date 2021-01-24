class Paper{
    constructor(x,y,Radius) {
      var options={
     isStatic:false,
     restitution:0.8,
     friction:0.5,
     density:0.8    
      }
      this.body=Bodies.circle(x,y ,70,options)
      this.image=loadImage("paper.png")
      this.Radius= 70;
      World.add(world, this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.Radius, this.Radius);
        pop();
    }
}

