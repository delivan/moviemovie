import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "routes/Home";
import TV from "routes/TV";
import Search from "routes/Search";
import Detail from "routes/Detail";
import Header from "./Header";
import Footer from "./Footer";

import Context from "./Context";

import "../api";

export default class Router extends React.Component {
  state = {
    locale: "kr"
  };

  changeLocale = ({ target }) => {
    this.setState({ locale: target.value });
  };

  render() {
    return (
      <Context.Provider value={{ locale: this.state.locale }}>
        <BrowserRouter>
          <>
            <Header changeLocale={this.changeLocale} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/tv" exact component={TV} />
              <Route path="/search" component={Search} />
              <Route path="/movie/:id" component={Detail} />
              <Route path="/tv/:id" component={Detail} />
              <Redirect from="*" to="/" />
            </Switch>
            <Footer />
          </>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}
