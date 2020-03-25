const randomizeArray = <T>(array: T[]): T[] => {
  let curIndex = array.length,
    tempValue,
    randIndex;
  while (0 !== curIndex) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;
    tempValue = array[curIndex];
    array[curIndex] = array[randIndex];
    array[randIndex] = tempValue;
  }
  return array;
};

export default randomizeArray;
