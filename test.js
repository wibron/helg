'use strict';
var assert = require('assert'),
    timeKeeper = require('timekeeper'),
    helg = require('./');

var wednesday = new Date(1414580400000),
    saturday = new Date(1414839600000),
    friday = new Date(1416600000000),
    sunday = new Date(1414926000000);

describe('Helg', function () {

  describe('When passing an erroneous date object', function () {
    it('should throw an error', function () {
      var invalid = function () {
        return helg.ere('Sunday 11th 2014');
      };
      assert.throws(invalid, Error);
    });
  })

  describe('When setting the date manually', function () {

    it('should return false when the day is wednesday', function () {
      assert.equal(helg.ere(wednesday), false);
    });

    it('should return true when the day is saturday', function () {
      assert.equal(helg.ere(saturday), true);
    });

    it('should return true when the day is sunday', function () {
      assert.equal(helg.ere(sunday), true);
    });

    it('should return true when the day is friday and after 5pm', function () {
      assert.equal(helg.ere(friday), true);
    });

  });

  describe('When getting the date from the computers local time', function () {

    it('should return true when the day is saturday', function () {
      timeKeeper.travel(saturday);
      assert.equal(helg.ere(), true);
    });

    it('should return false when the day is wednesday', function () {
      timeKeeper.travel(wednesday);
      assert.equal(helg.ere(), false);
    });

    it('should return true when the day is friday and after 5pm', function () {
      timeKeeper.travel(friday);
      assert.equal(helg.ere(), true);
    });

    it('should return true when the day is sunday', function () {
      timeKeeper.travel(sunday);
      assert.equal(helg.ere(), true);
    });

  });

});
