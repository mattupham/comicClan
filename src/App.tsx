import axios from "axios";
import React, { useEffect } from "react";
// import "./App.css";

// pull into ENV
const url = "https://comicclan.vett.io/comics";
const token = "ComicClanVettIO2019";
const term = "?q=The True Story";

const getComics = (url: string, token: string) => {
  axios
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

function App() {
  useEffect(() => {
    getComics(url, token);
  });

  return <div className="App">Hello World</div>;
}

export default App;
