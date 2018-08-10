'use strict';

module.exports = run;

function run() {
  require('./testAnswer.js')();
  //require('/testNextThing.js')();
  console.log('All tests passed');
}
