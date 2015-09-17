/// <reference path="world.ts" />
class Karel {
    element: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    row: number = 0;
    col: number = 0;
    smallCircleRadius: number = 2;
    largeCircleRadius: number = 5;
    world: World;
    direction: Direction = Direction.North;
    constructor(canvas: HTMLCanvasElement, world: any) {
        this.element = canvas;
        this.context = this.element.getContext("2d");
        this.world = world;
        this.draw();
    }

    draw() {
        this.world.draw();
        var cellCenter = this.world.getCellCenter(this.row, this.col);
        switch (this.direction) {
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
    move() {
        var worldSize = this.world.getSize();

        switch (this.direction) {
            case Direction.North:
                if (this.row === 0) {
                    alert("cannot move");
                } else {
                    this.row = this.row - 1;
                }
                break;
            case Direction.West:
                if (this.col === 0) {
                    alert("cannot move");
                } else {
                    this.col = this.col - 1;
                }
                break;
            case Direction.South:
                if (this.row === worldSize.rows - 1) {
                    alert("cannot move");
                }else {
                    this.row = this.row + 1;
                }
                break;
            case Direction.East:
                if (this.col === worldSize.cols - 1) {
                    alert("cannot move");
                } else {
                    this.col = this.col + 1;
                }
                break;
        }
        setTimeout(() => this.draw(), 1000);
    }
    turnLeft() {
        switch (this.direction) {
            case Direction.North: this.direction = Direction.West; break;
            case Direction.West: this.direction = Direction.South; break;
            case Direction.South: this.direction = Direction.East; break;
            case Direction.East: this.direction = Direction.North; break;
        }
        setTimeout(() => this.draw(), 1000);
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

