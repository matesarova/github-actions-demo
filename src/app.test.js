const { dayOfTheWeek } = require("./app");
const data = require("./data.json");

test("getDay returns the long-format day of the week correctly", () => {
  const day = dayOfTheWeek(new Date("8/12/2025"));
  expect(day).toBe(data.days[2]);
});
