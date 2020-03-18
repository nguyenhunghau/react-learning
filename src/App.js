import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/table';
import Home from './pages/home/index';
import Login from './pages/login/index';

import Header from './components/header';
import Footer from './components/footer';
import MenuLeft from './components/menu-left';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {

  render() {

    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/login" component={Login} /> */}
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
