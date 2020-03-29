import axios from "axios";
import { BookData } from "components/App/App";

const addIdsToBookData = (bookData: BookData[]): any => {
  if (bookData.length === 0) {
    return [];
  } else {
    return bookData.map((book: BookData, index: number) => {
      return { ...book, id: index };
    });
  }
};

export default function apiCaller<T>(
  queryString?: string,
  data?: any
): Promise<T[] | null> {
  let url = process.env.COMIC_CLAN_URL;
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
          Authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
        },
      })
      //@ts-ignore
      .then(({ data }) => addIdsToBookData(data))
      //@ts-ignore
      .catch(err => console.log(err))
  );
}
