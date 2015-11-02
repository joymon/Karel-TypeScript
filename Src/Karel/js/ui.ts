/// <reference path="karel.ts" />
/// <reference path="world.ts" />
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
"use strict";
var karel:Karel;
var world:World;
$(document).ready(function () {
    var canvas = <HTMLCanvasElement>document.getElementById("world");
    world = new World(canvas);
    world.draw();
    karel = new Karel(canvas, world);
    karel.draw();
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
    world.draw();
    karel.draw();
});
function executeProgram(program:string) {
    eval(program);
    setTimeout(() => karel.draw(), 1000);
}
function turnLeft() {
    karel.turnLeft();
}
function move() {
    karel.move();
}