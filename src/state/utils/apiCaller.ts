import axios from "axios";
import { BookData } from "components/App/App";
import { EnzymeAdapter } from "enzyme";

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
  queryString?: string
): Promise<T[] | null> {
  let url = process.env.REACT_APP_COMIC_CLAN_URL;
  if (queryString) {
    url = `${url}?q=${queryString}`;
  }
  console.log("QUERY STRING IN API CALLER: ", queryString);
  console.log("URL IN API CALLER: ", url);
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
