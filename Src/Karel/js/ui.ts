/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

$(document).ready(function () {
    var world = new World(document.getElementById("world"));
    world.draw();
    karel = new test();
    karel.test();
    karel = new Karel(document.getElementById("world"), world);
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
    var world = new World(document.getElementById("world"));
    world.draw();
    karel = new test();
    karel.test();
    karel = new Karel(document.getElementById("world"), world);
});
function turnLeft() {
    karel.turnLeft();
}
function move() {
    karel.move();
}
var karel = 10;