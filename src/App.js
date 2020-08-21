import React from "react";
import { Login, Register } from "./scenes/Sign/scenes";
import { Checkout } from "./scenes/Checkout/components";
import { Copyright, Header } from "./scenes/components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ProductDetail} from './scenes/ProductDetail/index'
function App() {
  /* EXAMPLE VIEW FOR CODING */
  return (
    <Router>
      {/* HEADER COMPONENT */}
      <Header />
      {/* BODY */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
          <Route path="/checkout">
              <Checkout />
          </Route>
        <Route path="/register">
          <Register />
        </Route>
          <Route path="/productdetail">
          <ProductDetail />
        </Route>
        <Route path="/"></Route>
      </Switch>
      {/* COPYRIGHT FOOTER */}
      <Copyright />
    </Router>
  );
}

export default App;
