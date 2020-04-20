import axios from "axios";

export default function apiCaller<T>(
  queryString?: string
): Promise<T[] | null> {
  let url = process.env.REACT_APP_COMIC_CLAN_URL as string;
  if (queryString) {
    url = `${url}?q=${queryString}`;
  }
  return axios
    .get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
      },
    })
    .then(({ data }) => data)
    .catch((err) => []);
}
