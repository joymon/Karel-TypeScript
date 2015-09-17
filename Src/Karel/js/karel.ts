/// <reference path="world.ts" />
class Karel {
    element: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    row: number = 0;
    col: number = 0;
    smallCircleRadius: number = 2;
    largeCircleRadius: number = 5;
    world: World;
    direction: string = "N";
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
            case "N":
                this.circle(this.context, cellCenter.x, cellCenter.y - this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y + this.largeCircleRadius, this.largeCircleRadius);
                break;
            case "W":
                this.circle(this.context, cellCenter.x - this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x + this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
            case "S":
                this.circle(this.context, cellCenter.x, cellCenter.y + this.smallCircleRadius, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x, cellCenter.y - this.largeCircleRadius, this.largeCircleRadius);
                break;
            case "E":
                this.circle(this.context, cellCenter.x + this.smallCircleRadius, cellCenter.y, this.smallCircleRadius);
                this.circle(this.context, cellCenter.x - this.largeCircleRadius, cellCenter.y, this.largeCircleRadius);
                break;
        }
    }
    move() {
        var worldSize = this.world.getSize();

        switch (this.direction) {
            case "N":
                if (this.row === 0) {
                    alert("cannot move");
                } else {
                    this.row = this.row - 1;
                }
                break;
            case "W":
                if (this.col === 0) {
                    alert("cannot move");
                } else {
                    this.col = this.col - 1;
                }
                break;
            case "S":
                if (this.row === worldSize.rows - 1) {
                    alert("cannot move");
                }else {
                    this.row = this.row + 1;
                }
                break;
            case "E":
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
            case "N": this.direction = "W"; break;
            case "W": this.direction = "S"; break;
            case "S": this.direction = "E"; break;
            case "E": this.direction = "N"; break;
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

