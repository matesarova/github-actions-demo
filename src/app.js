const data = require("./data.json");

const dayOfTheWeek = (date = new Date()) => {
  const days = data.days;

  return days[date.getDay()];
};

try {
  document.getElementById("day").innerText = dayOfTheWeek();
} catch (err) { }

exports.dayOfTheWeek = dayOfTheWeek;
