class Paper{
//to define the x and y to write in sketch.js
constructor(x,y){

var options = {

isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

}
this.image = loadImage("images/paper.png");
this.body = Bodies.circle(x,y,30,options);
this.radius = 30;
World.add(world,this.body);
}
display(){

 
 var pos = this.body.position;
 
 var angle = this.body.angle;

 push();
 rotate(angle);
 translate(pos.x,pos.y)
 


 fill("yellow");
 image(this.image,0,0,30,30);
 
 pop();



}



}