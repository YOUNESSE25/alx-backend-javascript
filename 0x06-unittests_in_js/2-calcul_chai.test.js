const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 3, 2)).to.equal(5);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("SUM", 1.7, 2.6)).to.equal(5);
	});
    });
    describe("DIVIDE", function() {
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 8, 2)).to.equal(4);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
	});
	it("checking if numbers round", function() {
	    expect(calculateNumber("DIVIDE", 6, 0)).to.equal("Error");
	});
    });
	describe("SUBTRACT", function() {
	it("checking if numbers round", function() {
		expect(calculateNumber("SUBTRACT", 1.3, 2.3)).to.equal(-1);
	});
	it("checking if numbers round", function() {
		expect(calculateNumber("SUBTRACT", 4.8, 2.7)).to.equal(2);
	});
	it("checking if numbers round", function() {
		expect(calculateNumber("SUBTRACT", -4.8, -2.7)).to.equal(-2);
	});
	});
});
