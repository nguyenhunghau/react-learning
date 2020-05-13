import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home/index';
import Widgets from './pages/widgets/index';
import Validation from './pages/form/validation';
import Table from './pages/form/table';
import Login from './pages/login';
import ModalDemo from './pages/form/modal';
import DemoMemo from './pages/demo/memo';
import DemoRedux from './pages/demo/redux';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {

  render() {

    return (
      <div className="App">
          <Router>
            <Switch>
            <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/widgets" component={Widgets} />
              <Route exact path="/validation" component={Validation} />
              <Route exact path="/table" component={Table} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/modal" component={ModalDemo} />
              <Route exact path="/memo" component={DemoMemo} />
              <Route exact path="/redux" component={DemoRedux} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
