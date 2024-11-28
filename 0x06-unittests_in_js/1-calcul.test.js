const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUM", 3, 2);
      assert.strictEqual(res, 5);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(res, -1);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(res, 2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 8, 2);
      assert.strictEqual(res, 4);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(res, 0.2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 1.9, 0);
      assert.strictEqual(res, "Error");
    });

});
