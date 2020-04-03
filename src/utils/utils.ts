import { IBook } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";
import { GroupedTuple, GroupKey } from "components/Main/Main";

const randomizeArray = <T>(array: T[]): T[] => {
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

const sortByYearAsc = <T>(array: T[]): T[] => {
  return array.sort((a: any, b: any) => {
    return +b[0] - +a[0];
  });
};

const sortByAlph = <T>(array: T[]): T[] => {
  return array.sort((a: any, b: any) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      return 0;
    }
  });
};

const groupByRandom = (array: IBook[]): GroupedTuple[] | never[] => {
  if (array.length === 0) {
    return [];
  } else {
    return [["random", randomizeArray(array.slice())]];
  }
};

export const groupByType = (
  array: IBook[],
  groupOption: GroupKey
): GroupedTuple[] => {
  const key = groupOption.toLowerCase() as GroupKey;
  const groups = array.reduce((acc, curVal: IBook) => {
    acc[curVal[key]] = acc[curVal[key]] || [];
    acc[curVal[key]].push(curVal);
    return acc;
  }, Object.create(null));
  return Object.entries(groups);
};

export const groupBy = (array: IBook[], groupOption: GROUP): GroupedTuple[] => {
  if (groupOption === GROUP.RANDOM) {
    return groupByRandom(array);
  } else {
    return groupByType(array, groupOption);
  }
};

export const sortBy = (
  groupedData: any,
  groupOption: GROUP
): GroupedTuple[] => {
  if (groupOption === GROUP.YEAR) {
    return sortByYearAsc(groupedData);
  }
  if (groupOption === GROUP.WRITER) {
    return sortByAlph(groupedData);
  }
  if (groupOption === GROUP.ARTIST) {
    return sortByAlph(groupedData);
  }
  if (groupOption === GROUP.OWNER) {
    return sortByAlph(groupedData);
  }
  if (groupOption === GROUP.RANDOM) {
    return groupedData;
  }
  return groupedData;
};

export const createArrayFromRange = (num: number) =>
  Array.apply(null, Array(num)).map((_, i) => i);

export const capitalizeFirstLetter = (s: string): string =>
  typeof s !== "string" ? "" : s.charAt(0).toUpperCase() + s.slice(1);
