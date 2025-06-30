const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns length 0 for single-element array", () => {
    const result = tail(["OnlyOne"]);
    assert.strictEqual(result.length, 0);
  });

  it("returns [] for empty array", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });

  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});
