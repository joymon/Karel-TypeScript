class KarelDrawer {
    private context: CanvasRenderingContext2D;
    private world: World;
    private karel: Karel;
    private smallCircleRadius: number = 2;
    private largeCircleRadius: number = 5;
    constructor(karel:Karel) {
        this.karel = karel;
        this.context = karel.world.context;
        this.world = karel.world;
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