import { IBook } from "state/ducks/book/types";
import { GROUP } from "components/Groups/Groups";

// randomizes book array
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

// sorts books by years (largest to smallest)
export const sortByYearsDesc = <T>(array: T[]): T[] => {
  return array.sort((a: any, b: any) => {
    return +b[0] - +a[0];
  });
};

// sorts books by group (alphabetical order)
export const sortByAlph = <T>(array: T[]): T[] => {
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

// type for grouping
export type GroupedTuple = [string, IBook[]];

// allow all but random type
export type GroupKey = GROUP.YEAR | GROUP.WRITER | GROUP.ARTIST | GROUP.OWNER;

// groups books when random is selected
export const groupByRandom = (array: IBook[]): GroupedTuple[] | never[] => {
  if (array.length === 0) {
    return [];
  } else {
    return [["random", randomizeArray(array)]];
  }
};

// groups books by year, writer, artist, or owner, based on option
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

// selects function to group by (random, or year, writer, artist, owner)
export const groupBy = (array: IBook[], groupOption: GROUP): GroupedTuple[] => {
  if (groupOption === GROUP.RANDOM) {
    return groupByRandom(array);
  } else {
    return groupByType(array, groupOption);
  }
};

// selects function to sort by (descending for years, alphabetical for all else)
export const sortBy = (
  groupedData: any,
  groupOption: GROUP
): GroupedTuple[] => {
  if (groupOption === GROUP.YEAR) {
    return sortByYearsDesc(groupedData);
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

// creates array with numbers (for rating)
export const createArrayFromRange = (num: number) =>
  Array.apply(null, Array(num)).map((_, i) => i);

// capitalizes first letter of string
export const capitalizeFirstLetter = (s: string): string =>
  s === "" ? "" : s.charAt(0).toUpperCase() + s.slice(1);

// groups array of books by group option first, then sorts data by type (numeric for year, alphabetical for all else)
export const groupAndSortBy = (
  books: IBook[],
  group: GROUP = GROUP.YEAR
): GroupedTuple[] => {
  let groupedData = groupBy(books, group);
  let sortedData = sortBy(groupedData, group);
  return sortedData;
};

// generates group regex to limit routes
export const groupRegex = (arr: GROUP[]) =>
  arr.reduce((acc, cur, index) => {
    return (acc += (index === 0 ? "" : "|") + cur);
  }, "(") + ")";
