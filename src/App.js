import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Table from './components/table';
import Home from './pages/home/index';
import Login from './pages/login/index';

import Header from './components/header';
import Footer from './components/footer';
import MenuLeft from './components/menu-left';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {

  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
    ],
  }
  constructor(props) {
    super(props);
    // this.state = {
    //   name: '',
    //   job: '',
    // }
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  removeCharacter = index => {
    const { characters } = this.state
    console.log(characters);
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }


  render() {
    const { characters } = this.state

    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
