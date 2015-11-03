/// <reference path="karel.ts" />
/// <reference path="world.ts" />
/// <reference path="WorldDrawer.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
"use strict";
var karel: Karel;
var karelDrawer: KarelDrawer;
var world: World;
var worldDrawer: WorldDrawer;
$(document).ready(function () {
    var canvas = <HTMLCanvasElement>document.getElementById("world");
    world = new World();
    worldDrawer = new WorldDrawer(world, canvas);
    worldDrawer.draw();
    karel = new Karel(world);
    karelDrawer = new KarelDrawer(karel, canvas);
    karelDrawer.draw();
});
$("#back-button").click(function () {
    var program = $("#codeArea").val();
    executeProgram(program);
});
$("#turnLeft-button").click(function () {
    var program = "turnLeft();";
    executeProgram(program);
});
$("#move-button").click(function () {
    var program = "move();";
    executeProgram(program);
});
$("#draw-button").click(function () {
    worldDrawer.draw();
    karelDrawer.draw();
});
function executeProgram(program: string) {
    eval(program);
    setTimeout(() => {
        worldDrawer.draw();
        karelDrawer.draw();
    }, 1000);
}
function turnLeft() {
    karel.turnLeft();
}
function move() {
    karel.move();
}