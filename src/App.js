import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AppContainer } from "./App.styles";

import { currentUserSession } from "./redux/user/user.actions";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import PageNotFound from "./components/page-not-found/page-not-found.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

toast.configure();

class App extends React.Component {
  unsubscribe = null;

  componentDidMount() {
    const { currentUserSession } = this.props;
    currentUserSession();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/shop"
            render={(props) => (
              <ShopPage currentUser={currentUser} {...props} />
            )}
          />
          <Route exact path="/page-not-found" component={PageNotFound} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={(props) => {
              return currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUp {...props} />
              );
            }}
          />
          <Redirect to="/page-not-found" />
        </Switch>
      </AppContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: (state) => state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  currentUserSession: () => dispatch(currentUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
