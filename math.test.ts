import { calculate } from "./math";

it("calculate percentage of 20/30 to 67%", () => {
  expect(calculate(20, 30)).toBe("67%");
});
it("calculate percentage of 100/100 to 100%", () => {
  expect(calculate(100, 100)).toBe("100%");
});

it("calculate percentage of 0/7 to 0%", () => {
  expect(calculate(0, 7)).toBe("0%");
});
