import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cover from "./Cover";
import { Switch } from "react-router-dom";
import NewPage from "./NewPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/newpage">
          <NewPage />
        </Route>
        <Route path="/">
          <Cover />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
