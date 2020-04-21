import {
  randomizeArray,
  groupByRandom,
  groupByType,
  groupBy,
  sortBy,
  createArrayFromRange,
  capitalizeFirstLetter,
} from "utils/utils";
import { getMockBookData } from "utils/testUtils";
import { GROUP } from "components/Groups/Groups";
import { groupRegex } from "utils/utils";
import { groupList } from "components/Main/Main";

// helpers
const bookData = getMockBookData();
const _str = (o: any) => JSON.stringify(o);
const expectBookDataUnchanged = () =>
  expect(_str(bookData)).toBe(_str(bookData));

describe("randomizeArray", () => {
  test("randomizeArray randomizes array", () => {
    const array = createArrayFromRange(10000);
    for (let i = 0; i < 100; i++) {
      expect(_str(randomizeArray(array))).not.toBe(_str(array));
    }
    // no functions should modify initial book data
    expectBookDataUnchanged();
  });
});

describe("array sort", () => {
  test("sorts books by year (descending)", () => {
    const group = GROUP.YEAR;
    const groupedBookData = groupBy(bookData, group);
    const sortedBookData = sortBy(groupedBookData, group);
    // loop through all except last element
    for (let i = 1; i < sortedBookData.length - 1; i++) {
      const currentYear = +sortedBookData[i][0];
      const nextYear = +sortedBookData[i + 1][0];
      expect(currentYear).toBeGreaterThanOrEqual(nextYear);
    }
    expectBookDataUnchanged();
  });

  test("sorts books by alphabetical order", () => {
    Object.values(GROUP).forEach((group) => {
      if (group !== GROUP.RANDOM && group !== GROUP.YEAR) {
        const groupedBookData = groupBy(bookData, group);
        const sortedBookData = sortBy(groupedBookData, group);
        // loop through all except last element
        for (let i = 1; i < sortedBookData.length - 1; i++) {
          const currentYear = sortedBookData[i][0];
          const nextYear = sortedBookData[i + 1][0];
          expect(currentYear.localeCompare(nextYear)).toBeLessThanOrEqual(0);
        }
      }
      expectBookDataUnchanged();
    });
  });

  describe("array group", () => {
    test("groupByRandom returns random as first key, randomizes array in second", () => {
      const randomlyGroupedData = groupByRandom(bookData)[0];
      expect(randomlyGroupedData[0]).toBe("random");
      expect(_str(groupByRandom(randomlyGroupedData[1]))).not.toBe(
        _str(bookData)
      );
      expectBookDataUnchanged();
    });

    test("groupByType returns random as first key, randomizes array in second", () => {
      Object.values(GROUP).forEach((group) => {
        if (group !== GROUP.RANDOM) {
          const groupedData = groupBy(bookData, group)[0];
          groupedData.forEach((groupedTuple) => {
            expect(groupedData[0]).not.toBe("random");
            const groupedTupleBookList = groupedData[1];
            expect(groupedTupleBookList.length).toBeLessThan(bookData.length);
          });
        }
      });
      expectBookDataUnchanged();
    });

    test("groupBy calls correct function", () => {
      Object.values(GROUP).forEach((group) => {
        if (group !== GROUP.RANDOM) {
          expect(_str(groupBy(bookData, group))).toBe(
            _str(groupByType(bookData, group))
          );
        }
      });
      expectBookDataUnchanged();
    });
  });

  describe("createArrayFromRange", () => {
    test("creates correct array", () => {
      [0, 1, 10, 100].forEach((len) => {
        expect(createArrayFromRange(len).length).toBe(len);
      });
    });
  });

  describe("capitalizeFirstLetter", () => {
    const isFirstLetterCapital = (word: string) =>
      word[0] !== word[0].toLowerCase();

    test("capitalizes first letter", () => {
      [
        "",
        "h",
        "H",
        "hello",
        "Hello",
        "HELLO",
        "hello world",
        "Hello world",
        "HELLO WORLD",
        "ô",
        "Ô",
      ].forEach((word) => {
        const capWord = capitalizeFirstLetter(word);
        if (word === "") {
          expect(capWord).toBe(word);
        } else {
          // check first is cap, rest is unchanged
          word.split("").forEach((char, idx) => {
            if (idx === 0) {
              // expects first letter to be capital
              expect(isFirstLetterCapital(capWord)).toBeTruthy();
              // expects letter to be same
              expect(word.charAt(0).toLowerCase()).toBe(
                capWord.charAt(0).toLowerCase()
              );
            } else {
              // expect other characters to be unchanged
              expect(char).toBe(word[idx]);
            }
          });
        }
      });
    });
  });

  describe("group regex", () => {
    test("creates group regex correctly", () => {
      expect(groupRegex(groupList)).toBe("(year|writer|artist|owner|random)");
    });
  });
});
