'use strict';

module.exports = function(name, sport, holiday, mother) {

  if (typeof(name) !== 'string') {
    throw new Error('Not a valid input');
  }
  console.log(`Hello ${name}, nice to see you. Do you enjoy playing ${sport}? I hope your ${holiday} was fun. Tell ${mother} I said hello.`);
  return `Hello ${name}, nice to see you. Do you enjoy playing ${sport}? I hope your ${holiday} was fun. Tell ${mother} I said hello.`;
};
