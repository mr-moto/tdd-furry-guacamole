const uniqueChar = require("../lib/uniqueChar.js");
describe("uniqueChar", () => {
    describe("when given a string", () => {
        it("should returns the first unique character", () => {
            const result = uniqueChar('dddeeefggghhh');
            expect(result).toEqual('f');
        })
    });
    describe("when given a string", () => {
        it("should returns the first unique character", () => {
            const result = uniqueChar('terfg');
            expect(result).toEqual('t');
        })
    });
    describe("when given a string", () => {
        it("should returns the first unique character", () => {
            const result = uniqueChar('frof');
            expect(result).toEqual('r');
        })
    });
    describe("when given a string", () => {
        it("should returns undefined", () => {
            const result = uniqueChar('ttttt');
            expect(result).toBeUndefined();
        })
    });
})