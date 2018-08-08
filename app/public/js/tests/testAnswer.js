'use strict';

module.exports = testAnswer;

const answer = require('./../answer.js');
const assert = require('assert');

function testAnswer() {
  test_life_the_universe_and_everything();
}

const test_life_the_universe_and_everything = function() {
  assert.equal(42, answer());
};

