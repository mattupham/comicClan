import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  useParams,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route path="/:id" children={<Child />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  console.log("ID: ", id);
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
