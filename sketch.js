const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var score=0



function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1800,900);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)


    ground1 = new Ground(600,550,1200,20);
    ground2= new Ground(650,400,300,20)
    ground3= new Ground(1100,200,200,20)

    box1= new Box(515,370,30,40);
    box2= new Box(545,370,30,40);
    box3= new Box(575,370,30,40);
    box4= new Box(605,370,30,40);
    box5= new Box(635,370,30,40);
    box6= new Box(665,370,30,40);
    box7= new Box(695,370,30,40);
    box8= new Box(725,370,30,40);
    box9= new Box(725,370,30,40);
    box10= new Box(755,370,30,40);
    

    box12= new Box(545,330,30,40);
    box13= new Box(575,330,30,40);
    box14= new Box(605,330,30,40);
    box15= new Box(635,330,30,40);
    box16= new Box(665,330,30,40);
    box17= new Box(695,330,30,40);
    box18= new Box(725,330,30,40);
    box19= new Box(755,330,30,40);
    

    box20= new Box(605,290,30,40);
    box21= new Box(635,290,30,40);
    box22= new Box(665,290,30,40);
    box23= new Box(695,290,30,40);

    box24= new Box(650,250,30,40);

    box25= new Box(785,370,30,40);

    box26= new Box(1020,170,30,40);
    box27= new Box(1050,170,30,40);
    box28= new Box(1080,170,30,40);
    box29= new Box(1110,170,30,40);
    box30= new Box(1140,170,30,40);
    box31= new Box(1170,170,30,40);
    box32= new Box(1140,130,30,40);
    box33= new Box(1110,130,30,40);
    box34= new Box(1080,130,30,40);
    box35= new Box(1050,130,30,40);
    box36= new Box(1090,90,30,40);
    

    

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon)


    slingShot1 =new Slingshot(this.polygon,{x:100,y:200});
    
    




}
function draw(){
    background(255);

    ground1.display();
    ground2.display();
    ground3.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingShot1.display();
    text("SCORE : "+score,750,40)

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    
   drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
	
}


function mouseReleased(){
    slingShot1.fly();
}

function keyPressed(){
    if(keyCode === 32){
    slingShot1.attach(this.polygon);
    }
}



















































