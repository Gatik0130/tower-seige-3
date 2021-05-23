class Box  {
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility=255
      }
      display(){
       
        if(this.body.speed < 3){
          var groundPos=this.body.position;
          var angle= this.body.angle;
         push();
         translate(groundPos.x,groundPos.y);
         rotate(angle);
         rectMode(CENTER);
         strokeWeight(1);
        fill ("lightblue");
        rect(0,0, this.width, this.height);
        pop();
        }
      else {
        World.remove(world,this.body);
       push();
        this.Visibility -=5
        tint(255,this.Visibility)
        pop();

      }
      }
      score() {
        if (this.Visibility<0 && this.Visibility>-105){
          score++
        }
      }
      
  
  }