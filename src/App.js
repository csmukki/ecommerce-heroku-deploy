import React from "react";

import { AppContainer } from "./App.styles";

import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/page-not-found" component={PageNotFound} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Redirect to="/page-not-found" />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
