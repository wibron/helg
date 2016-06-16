const assert = require('assert');
const timeKeeper = require('timekeeper');
const helg = require('./');

const wednesday = new Date(1414580400000);
const saturday = new Date(1414839600000);
const friday = new Date(1416600000000);
const sunday = new Date(1414926000000);

describe('Helg', () => {
  describe('When passing an erroneous date object', () => {
    it('should throw an error', () => {
      const invalid = () => helg.ere('Sunday 11th 2014');
      assert.throws(invalid, Error);
    });
  });

  describe('When setting the date manually', () => {
    it('should return false when the day is wednesday', () => {
      assert.equal(helg.ere(wednesday), false);
    });

    it('should return true when the day is saturday', () => {
      assert.equal(helg.ere(saturday), true);
    });

    it('should return true when the day is sunday', () => {
      assert.equal(helg.ere(sunday), true);
    });

    it('should return true when the day is friday and after 5pm', () => {
      assert.equal(helg.ere(friday), true);
    });
  });

  describe('When getting the date from the computers local time', () => {
    it('should return true when the day is saturday', () => {
      timeKeeper.travel(saturday);
      assert.equal(helg.ere(), true);
    });

    it('should return false when the day is wednesday', () => {
      timeKeeper.travel(wednesday);
      assert.equal(helg.ere(), false);
    });

    it('should return true when the day is friday and after 5pm', () => {
      timeKeeper.travel(friday);
      assert.equal(helg.ere(), true);
    });

    it('should return true when the day is sunday', () => {
      timeKeeper.travel(sunday);
      assert.equal(helg.ere(), true);
    });
  });
});
