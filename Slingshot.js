class SlingShot{

    constructor(bodyA,pointB){

        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 50,
            stiffness: 0.5
        }
        this.pointB = pointB;
        this.sling = constraint.create(options);
        World.add(myworld,this.sling);

    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}