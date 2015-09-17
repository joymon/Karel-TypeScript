/// <reference path="karel.ts" />
/// <reference path="world.ts" />
"use strict";
/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

var karel;
var world;
$(document).ready(function () {
    var canvas = <HTMLCanvasElement>document.getElementById("world");
    world = new World(canvas);
    world.draw();
    karel = new Karel(canvas, world);
});
$("#back-button").click(function () {
    var program = $("#codeArea").val();
    eval(program);
});
$("#turnLeft-button").click(function () {
    var program = "turnLeft();";
    eval(program);
});
$("#move-button").click(function () {
    var program = "move();";
    eval(program);
});
$("#draw-button").click(function () {
    world.draw();
    karel.draw();
});

function turnLeft() {
    karel.turnLeft();
}
function move() {
    karel.move();
}