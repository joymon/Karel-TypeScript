/// <reference path="kareldrawer.ts" />
/// <reference path="moveaction.ts" />
/// <reference path="turnleftaction.ts" />
/// <reference path="world.ts" />
class Karel {
    row: number = 0;
    col: number = 0;
    world: World;
    direction: Direction = Direction.North;
    drawer: KarelDrawer;
    constructor(canvas: HTMLCanvasElement, world: World) {
        console.log("Inside Karel cons");
        this.world = world;
        this.drawer = new KarelDrawer(this);
    }
    draw() {
        this.drawer.draw(this.row, this.col, this.direction);
    }
    move() {
        var action = new MoveAction();
        this.executeAction(action);
    }
    turnLeft() {
        var action = new TurnLeftAction();
        this.executeAction(action);
    }
    executeAction(action: IKarelAction) {
        action.Execute(this);
    }
}

