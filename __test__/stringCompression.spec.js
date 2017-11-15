const stringCompression = require("../lib/stringCompression.js");
describe("stringCompression", () => {
    describe("when word is string", () => {
        it("should return string of numnbers of letters", () => {
            const result = stringCompression('ghjff');
            expect(result).toEqual('g1h1j1f2');
        });
    });
});
