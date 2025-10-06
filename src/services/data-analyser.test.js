import { analyseData } from "./data-analyser.js";

describe("data-analyser", () => {
  test("should return null for empty data", () => {
    const result = analyseData([]);
    expect(result).toBeNull();
  });

  test("should return null for null data", () => {
    const result = analyseData(null);
    expect(result).toBeNull();
  });

  test("should analyse data correctly", () => {
    const inputData = [
      [1622505600, 35000, 36000, 34000, 35500],
      [1622592000, 35500, 36500, 34500, 36000],
    ];

    const expectedOutput = [
      { highestPrice: 36000, lowestPrice: 34000, difference: 2000 },
      { highestPrice: 36500, lowestPrice: 34500, difference: 2000 },
    ];

    const result = analyseData(inputData);
    expect(result).toEqual(expectedOutput);
  });
});
