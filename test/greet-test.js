'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Testing greet.js module', function () {

  describe('With a valid string', () => {

    it('should return true for "Hello lee, nice to see you"', () => {

      let result = greet('lee');
      expect(result).to.equal('Hello lee, nice to see you.');
    });

    it('should return an error with an invalid string passed in', () => {

      let result = greet(555);
      expect(result).to.equal('Error: Not a valid input');
    });

  });
});
