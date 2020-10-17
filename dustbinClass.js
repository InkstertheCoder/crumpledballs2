class Dustbin{
    //to define the x and y to write in sketch.js
    constructor(x,y,width,height){
    
    var options = {
    
    isStatic:true,
 
    
    }
    
    this.image = loadImage("images/dustbin.png");


    this.body = Bodies.rectangle(x,y,options);
    
    World.add(world,this.body);

    this.body = Bodies.rectangle(x,y,options);
    
    World.add(world,this.body);

    this.body = Bodies.rectangle(x,y,options);
    
    World.add(world,this.body);

    }
    display(){
    
     var pos = this.body.position;
     
     fill("yellow");
     rect(pos.x,pos.y,this.width,this.height);
     
    fill("yellow");
     rect(pos.x,pos.y,this.width,this.height);

     fill("yellow");
     image(this.image,pos.x,pos.y,this.width,this.height);
     
    
    
    }
    
    
    
    }
