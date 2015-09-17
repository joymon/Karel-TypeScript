class KarelDrawer {
    context: CanvasRenderingContext2D;
    world: World;
    smallCircleRadius: number = 2;
    largeCircleRadius: number = 5;
    constructor(drawingContext: CanvasRenderingContext2D, world: World) {
        this.context = drawingContext;
        this.world = world;
    }
    draw(row:number,col:number,direction:Direction) {
        this.world.draw();
        var cellCenter = this.world.getCellCenter(row, col);
        switch (direction) {
            case Direction.North:
                this.circle(this.context, cellCenter.x, cellCenter.y - this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y + this.largeCircleRadius, this.largeCircleRadius);
                break;
            case Direction.West:
                this.circle(this.context, cellCenter.x - this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x + this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
            case Direction.South:
                this.circle(this.context, cellCenter.x, cellCenter.y + this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y - this.largeCircleRadius, this.largeCircleRadius);
                break;
            case Direction.East:
                this.circle(this.context, cellCenter.x + this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x - this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
        }
    }
    circle(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 1;
        context.arc(x, y, radius, 0, (Math.PI / 180) * 360, false);
        context.stroke();
        context.closePath();
    }
}