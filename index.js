'use strict';
var isWeekend = function (date) {
  var dateString = date,
      weekDay = dateString.getDay(),
      hour = dateString.getHours();
  return ((weekDay === 5 && hour >= 17) || weekDay === 6 || weekDay === 0);
};

var ere = function (date) {
  if (!date instanceof Date) {
    throw new Error('Invalid date format. Use new Date()');
  }
  date = date || new Date();
  return isWeekend(date);
};

exports.ere =  ere;
