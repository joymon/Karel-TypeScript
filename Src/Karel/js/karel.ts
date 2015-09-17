/// <reference path="kareldrawer.ts" />
/// <reference path="world.ts" />
class Karel {
    element: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    row: number = 0;
    col: number = 0;    
    world: World;
    direction: Direction = Direction.North;
    drawer: KarelDrawer;
    constructor(canvas: HTMLCanvasElement, world: World) {
        this.element = canvas;
        this.context = this.element.getContext("2d");
        this.world = world;
        this.drawer = new KarelDrawer(this.context,this.world);
        
        this.draw();
    }

    draw() {
        this.drawer.draw(this.row, this.col, this.direction);
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
    
}

