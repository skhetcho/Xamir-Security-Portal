/*!

=========================================================
* Material Kit PRO React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.10.0";

// pages for this product
import AboutPage from "views/AboutPage/AboutPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import ToolsPage from "views/ToolsPage/ToolsPage";

var hist = createBrowserHistory();

document.body.style.backgroundColor = "#FFF";

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/tools" component={ToolsPage} />
      <Route exact path="/" component={PresentationPage} />
      <Route component={ErrorPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
