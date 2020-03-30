import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/table';
import Home from './pages/home/index';
import Widgets from './pages/widgets/index';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {

  render() {

    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/widgets" component={Widgets} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
