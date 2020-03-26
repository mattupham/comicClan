export const randomizeArray = <T>(array: T[]): T[] => {
  const arrayToRandomize = array.slice();
  let curIndex = arrayToRandomize.length,
    tempValue,
    randIndex;
  while (0 !== curIndex) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;
    tempValue = arrayToRandomize[curIndex];
    arrayToRandomize[curIndex] = arrayToRandomize[randIndex];
    arrayToRandomize[randIndex] = tempValue;
  }
  return arrayToRandomize;
};

export const sortByYearAsc = <T>(array: T[]): T[] => {
  return array.sort((a: any, b: any) => +b[0] - +a[0]);
};

export const sortByAlph = <T>(array: T[]): T[] => {
  return array.sort((a: any, b: any) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });
};
