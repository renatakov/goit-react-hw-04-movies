import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";

class App extends Component {
  state = {
    queryString: "",
  };

  render() {
    return (
      <>
        <BrowserRouter>
        <Suspense fallback="loading...">
          <Switch>
            {routes.map((route) => {
              return <Route key={route.path} {...route} />;
            })}
          </Switch>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
