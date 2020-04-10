import axios from "axios";

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
      // TODO remove
      //@ts-ignore
      .then(({ data }) => {
        // TODO remove
        // addIdsToBookData(data);
        return data;
      })
      //@ts-ignore
      .catch((err) => console.log(err))
  );
}
