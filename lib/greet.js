'use strict';

module.exports = function(name) {

  if (typeof(name) !== 'string') {
    throw new Error('Not a valid input');
  }

  console.log(`Hello ${name}, nice to see you.`);
};
