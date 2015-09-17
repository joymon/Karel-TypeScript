/// <reference path="world.ts" />
class Karel {
    element: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    row: number = 0;
    col: number = 0;
    scr: number = 2;
    lcr: number = 5;
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
                this.circle(this.context, cellCenter.x, cellCenter.y - this.scr, this.scr);
                this.circle(this.context, cellCenter.x, cellCenter.y + this.lcr, this.lcr);
                break;
            case "W":
                this.circle(this.context, cellCenter.x - this.scr, cellCenter.y, this.scr);
                this.circle(this.context, cellCenter.x + this.lcr, cellCenter.y, this.lcr);
                break;
            case "S":
                this.circle(this.context, cellCenter.x, cellCenter.y + this.scr, this.scr);
                this.circle(this.context, cellCenter.x, cellCenter.y - this.lcr, this.lcr);
                break
            case "E":
                this.circle(this.context, cellCenter.x + this.scr, cellCenter.y, this.scr);
                this.circle(this.context, cellCenter.x - this.lcr, cellCenter.y, this.lcr);
                break
        }
    }
    move() {
        var worldSize = this.world.getSize();

        switch (this.direction) {
            case "N":
                if (this.row == 0) alert("cannot move");
                else this.row = this.row - 1;
                break;
            case "W":
                if (this.col == 0) alert("cannot move");
                else this.col = this.col - 1;
                break;
            case "S":
                if (this.row == worldSize.height - 1) alert("cannot move");
                else this.row = this.row + 1;
                break;
            case "E":
                if (this.col == worldSize.width - 1) alert("cannot move");
                else this.col = this.col + 1;
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
        setTimeout(() =>  this.draw(), 1000);
    }
    //Starting the cons logic
    circle(context:CanvasRenderingContext2D, x, y, r) {
        context.beginPath();
        context.strokeStyle = "red";
        context.lineWidth = 1;
        context.arc(x, y, r, 0, (Math.PI / 180) * 360, false);
        context.stroke();
        context.closePath();
    }
}

