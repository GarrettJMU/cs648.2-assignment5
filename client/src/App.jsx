import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import ProductList from "./ProductList.jsx";
import NotFound from "./NotFound.jsx";

const element = (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductList} />
      {/* <Route path="/view/:id" component={ProductImage}/> */}
      {/* <Route path="/edit/:id" component={ProductEdit}/> */}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(element, document.getElementById('root'));
