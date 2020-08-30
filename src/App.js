import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import Client from "./components/Client/Client";
import JobDetail from "./components/JobDetail/JobDetail";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/:clientId/:jobId" component={JobDetail} />
        <Route exact path="/:clientId" component={Client} />
        <Route exact path="/" component={Dashboard} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
