import React from 'react';
import { ProfileView } from './scenes/Profile/scenes';
import { Login, Register } from './scenes/Sign/scenes';
import { Copyright, Header } from './scenes/components';
import { Item } from './scenes/Home/components';
import { HomePage } from './scenes/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import { Checkout } from './scenes/Checkout/components';
import { ProductDetail } from './scenes/ProductDetail/index';
function App() {
  /* EXAMPLE VIEW FOR CODING */
  return (
    <Router>
      {/* HEADER COMPONENT */}
      <Header />
      {/* BODY */}
      <Switch>
        {/*<Route path="/login">*/}
        {/*  <Login />*/}
        {/*</Route>*/}
        <Route path="/checkout">
          <Checkout />
        </Route>
        {/*<Route path="/register">*/}
        {/*  <Register />*/}
        {/*</Route>*/}
        <Route path="/profile">
          <ProfileView />
        </Route>
        <Route path="/productdetail">
          <ProductDetail />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      {/* COPYRIGHT FOOTER */}
      <Copyright />
    </Router>
  );
}

export default App;
