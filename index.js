const isWeekend = date => {
  const dateString = date;
  const weekDay = dateString.getDay();
  const hour = dateString.getHours() + 1;
  return ((weekDay === 5 && hour >= 17) || weekDay === 6 || weekDay === 0);
};

const ere = (date = new Date()) => {
  if (!date instanceof Date) {
    throw new Error('Invalid date format. Use new Date()');
  }

  return isWeekend(date);
};

exports.ere = ere;
