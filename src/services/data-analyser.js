export const analyseData = (data) => {
  if (!data || data.length === 0) {
    return null;
  }

  // index 2 - highest price
  // index 3 - lowest price

  return data.map((dataSet) => ({
    highestPrice: dataSet[2],
    lowestPrice: dataSet[3],
    difference: dataSet[2] - dataSet[3],
  }));
};
