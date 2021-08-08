class Drop{
    constructor(x,y)
	{
		var options={
			restitution:1,
			friction:0.3,
			density:1
			}
            this.x=x
            this.y=y
		this.body=Bodies.circle(this.y,-200,20,options)
        this.color=color("darkblue")
		World.add(world, this.body);
	}

	display()
	{
		push()
		fill(this.color)
		translate(this.body.position.x,this.body.position.y);
		rotate(this.body.angle)
		ellipseMode(RADIUS);
		ellipse(0,0,3,3)
		pop()
 }
}