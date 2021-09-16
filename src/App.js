import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Confidentialite from './pages/confidentialite'
import Rgpd from './pages/rgpd'
import Legal from './pages/legal'
import Home from './pages/home'
import NoMatch from './pages/nomatch'
import Header from './global/header'
import Footer from './global/footer'
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App fadeIn">
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mentions-legales" exact component={Legal} />
            <Route path="/confidentialite" exact component={Confidentialite} />
            <Route path="/rgpd" exact component={Rgpd} />
            <Route path="/404" exact component={NoMatch} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
