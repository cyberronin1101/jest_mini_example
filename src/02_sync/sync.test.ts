import { Lodash } from "./sync";

let _: Lodash = new Lodash();

describe("Lodash: compact", () => {
  let arr: (string | number | boolean)[];

  beforeAll(() => {
    _ = new Lodash();
  });

  beforeEach(() => {
    arr = ["a", false, 0, 5, "b", false, "c"];
  });

  // afterEach(() => {});
  // afterAll(() => {});

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
  });

  test("should remove false value from array", () => {
    const res = ["a", 5, "b", "c"];

    expect(_.compact(arr)).toEqual(res);
  });

  test("should NOT contain falsy values", () => {
    expect(_.compact(arr)).not.toContainEqual(false);
    expect(_.compact(arr)).not.toContainEqual(0);
    expect(_.compact(arr)).not.toContainEqual(null);
    expect(_.compact(arr)).not.toContainEqual("");
  });
});

describe("Lodash: groupBy", () => {
  test("should be defined", () => {
    expect(_.groupBy).toBeDefined();
  });

  test("should group array items by Match.floor", () => {
    const arr = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      3: [3.1],
      4: [4.2],
    };

    expect(_.groupBy(arr, Math.floor)).toEqual(result);
  });

  test("should group array items by length", () => {
    const arr = ["one", "two", "three"];
    const result = {
      3: ["one", "two"],
      5: ["three"],
    };

    expect(_.groupBy(arr, "length")).toEqual(result);
  });

  test("should NOT return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
