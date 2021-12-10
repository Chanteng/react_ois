import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About"
import Order from "../Pages/Order";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";

function Router(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/gallery" component={Gallery} />
    </BrowserRouter>
  );
}

export default Router;