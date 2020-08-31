import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BucketView from "./Layouts/Bucket";
import TodoView from "./Layouts/TodoView";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={BucketView} exact={true} />
      <Route path="/todo" component={TodoView} exact={true} />
    </BrowserRouter>
  );
}

export default App;
