import { mapArrayToString, validateValue } from "./sq";

describe("validateValue:", () => {
  test("correct value", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("less than correct value", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("greater than correct value", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("top marginal value", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("bottom marginal correct value", () => {
    expect(validateValue(100)).toBe(true);
  });
});

describe("mapToString:", () => {
  test("correctValue", () => {
    expect(mapArrayToString([1, 4, 6])).toEqual(["1", "4", "6"]);
  });

  test("incorrectValue", () => {
    expect(mapArrayToString(["1", "3", "6"])).toEqual([]);
  });

  test("empty", () => {
    expect(mapArrayToString([])).toEqual([]);
  });
});
