const stringCompression = require("../lib/stringCompression.js");
describe("stringCompression", () => {
        describe("when word is string", () => {
        it("should return string of letters with numbers", () => {
            const result = stringCompression('aaabbbccc');
            expect(result).toEqual('a3b3c3');
        });
    });
    describe("when word is string", () => {
        it("should return string of letters with numbers", () => {
            const result = stringCompression('ghjffj');
            expect(result).toEqual('g1h1j2f2');
        });
    });
    describe("when there is a space in the string", () => {
        it("should return string of letters with numbers", () => {
            const result = stringCompression('ccc aaa bbb');
            expect(result).toEqual('c3a3b3');
        });
    });
    describe("when string is empty", () => {
        it("should return empty string", () => {
            const result = stringCompression('')
            expect(result).toEqual('')
        })
    });
    describe("when string of emojis", () => {
        it("should return string of emojis with numbers", () => {
            const result = stringCompression('💩💩💩😎😎💩🍑🍑💩')
            expect(result).toEqual('💩5😎2🍑2')
        })
    });
});
