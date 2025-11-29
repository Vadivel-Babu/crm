function getWeekNumber(date) {
  const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const oneJan = new Date(newDate.getFullYear(), 0, 1);
  return Math.ceil(((newDate - oneJan) / 86400000 + oneJan.getDay() + 1) / 7);
}

module.exports = getWeekNumber;
