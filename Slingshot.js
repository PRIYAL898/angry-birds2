class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
            
        }
        this.slingShot1=loadImage("sprites/sling1.png");
        this.slingShot2=loadImage("sprites/sling2.png");
        this.slingShot3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingShot1,200,20);
        image(this.slingShot2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}