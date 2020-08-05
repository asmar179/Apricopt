import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './Css.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contactus from './pages/Contactus';
import See from './pages/See';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <>
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home}  />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contactus" component={Contactus} />
      <Route exact path="/See" component={See} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    </Router>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
