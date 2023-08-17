const { default: TestRunner } = require("jest-runner");
const addFive = require(`./timesTwo`);

test('returns the number times 2', () => {
    expect(addFive(10)).toBe(20);
})