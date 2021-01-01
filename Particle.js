class Particle{
    constructor(x,y,r){
        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this. y,this.r/2 ,options);
        World.add(world, this.body);
    }

    display(){
        var particle_pos = this.body.position;
        push();
        translate(particle_pos.x, particle_pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill('white');
        ellipse(0,0,this.r,this.r);
        pop();
    }
}