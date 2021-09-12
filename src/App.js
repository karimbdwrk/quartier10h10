import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Confidentialite from './pages/confidentialite'
import Rgpd from './pages/rgpd'
import Legal from './pages/legal'
import Home from './pages/home'
import Header from './global/header'
import Footer from './global/footer'
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mentions-legales" exact component={Legal} />
            <Route path="/confidentialite" exact component={Confidentialite} />
            <Route path="/rgpd" exact component={Rgpd} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
