import { createShip } from "ships.js";

test("create ship length 3", () => {
  const newship = createShip(3);
  expect(newship.length).toBe(3);
  expect(newship.hits).toEqual([0, 0, 0]);
  expect(newship.sunk).toBe(false);
});
