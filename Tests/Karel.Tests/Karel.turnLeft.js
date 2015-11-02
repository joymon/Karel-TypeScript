/// <reference path="g:\github\karel-typescript\src\karel\js/karel.js"/>
/// <reference path="g:\github\karel-typescript\src\karel\js/kareldrawer.js"/>
/// <reference path="g:\github\karel-typescript\src\karel\js/Direction.js"/>
/// <reference path="g:\github\Karel-TypeScript\Tests\Karel.Tests\Scripts\jasmine/jasmine.js" />
/// <reference path="g:\github\karel-typescript\src\karel\js/TurnLeftAction.js"/>
describe('Karel', function () {

    it('sanity check', function () {
        expect(0).toBe(0);
    });
    it('turnLeft - From North to West', function () {
        var karel = new Karel();
        karel.turnLeft();
        expect(karel.direction).toBe(Direction.West);
    });
    it('turnLeft - 3 turnLefts should be equal to turnRight', function () {
        console.log(" inside 3");
        var karel = new Karel();
        karel.turnLeft();
        karel.turnLeft();
        karel.turnLeft();
        expect(karel.direction).toBe(Direction.East);
    });
});
