import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
