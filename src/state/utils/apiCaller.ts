import axios from "axios";
// import { Book } from "state/ducks/book/types";
// import { EnzymeAdapter } from "enzyme";

// const addIdsToBookData = (bookData: Book[]): any => {
//   if (bookData.length === 0) {
//     return [];
//   } else {
//     return bookData.map((book: Book, index: number) => {
//       return { ...book, id: index };
//     });
//   }
// };

export default function apiCaller<T>(
  queryString?: string
): Promise<T[] | null> {
  let url = process.env.REACT_APP_COMIC_CLAN_URL;
  if (queryString) {
    url = `${url}?q=${queryString}`;
  }
  return (
    axios
      //@ts-ignore
      .get(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
        },
      })
      //@ts-ignore
      .then(({ data }) => {
        // addIdsToBookData(data);
        return data;
      })
      //@ts-ignore
      .catch(err => console.log(err))
  );
}
