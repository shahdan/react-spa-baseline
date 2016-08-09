import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./pages/About";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute path="/" name="home" component={Home}></IndexRoute>
    <Route path="about" name="about" component={About}></Route>
    <Route path="contact" name="contact" component={Contact}></Route>
  </Route>
  </Router>,
app);
