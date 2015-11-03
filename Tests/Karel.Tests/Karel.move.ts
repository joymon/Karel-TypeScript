/// <reference path="scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../src/karel/js/karel.ts" />


describe("Karel-move", () => {
    it("Moving downwards 1 row change the row to 1", () => {
        var world = new World();
        var karel = new Karel(world);
        karel.turnLeft();
        karel.turnLeft();
        karel.move();
        expect(karel.row).toBe(1);
        console.log("Completed test:Moving downwards 1 row change the row to 1");
    });
}); 