const assert = require('assert');
const make = require('./src/make.js');
const sumOfOther = require('./src/sumOfOther.js');
const recursion = require('./src/recursion.js');


describe('Sum of other', () => {
  it('1', () => {
    assert.equal(JSON.stringify(sumOfOther([2, 3, 4, 1])), JSON.stringify([8, 7, 6, 9]));
  });

  it('2', () => {
    assert.equal(JSON.stringify(sumOfOther([0])), JSON.stringify([0]));
  });

  it('3', () => {
    assert.equal(JSON.stringify(sumOfOther([0, 1])), JSON.stringify([1, 0]));
  });
});


describe('Make', () => {

  const sum = (a, b) => a + b;

  it('1', () => {
    const makeInput = new make(15)(34, 21, 666)(41)(sum);
    assert.equal(makeInput, 777);
  });

  it('2', () => {
    const makeInput = new make(0)(sum);
    assert.equal(makeInput, 0);
  });

  it('3', () => {
    const makeInput = new make(0)()(sum);
    assert.equal(makeInput, 0);
  });
  it('4', () => {
    const makeInput = make(15)(34, 21, 666)(41)(sum);
    assert.equal(makeInput, 777);
    // it's also work without new, but!!!!
    // it is very important!
    // make(..)(...).. will return true value and will remember value
    // The function works according to the condition.
  });
});


describe('Recursion', () => {
  it('1', () => {
    const tree = { 'value': 100, 'left': { value: 90, 'left': { value: 70 }, right: { value: 99 } }, right: { 'value': 120, 'left': { value: 110 }, 'right': { value: 130 } } };

    const array = recursion(tree);
    assert.equal(JSON.stringify(array), JSON.stringify([[100], [90, 120], [70, 99, 110, 130]]));
  });

  it('2', () => {
    const tree = { 'value': 100, 'left': { value: 90 }, right: { 'value': 99 } };

    const array = recursion(tree);
    assert.equal(JSON.stringify(array), JSON.stringify([[100], [90, 99]]));
  });
});
