/// <reference path="kareldrawer.ts" />
/// <reference path="moveaction.ts" />
/// <reference path="turlleftaction.ts" />
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
        var action = new MoveAction();
        action.Execute(this);
        setTimeout(() => this.draw(), 1000);
    }
    turnLeft() {
        var action = new TurnLeftAction();
        action.Execute(this);
        setTimeout(() => this.draw(), 1000);
    }
    
}

