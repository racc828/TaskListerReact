import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubmitList from './components/SubmitList'
import ListContainer from './components/ListContainer'
import ListsAdapter from './adapters/ListsAdapter'

class App extends Component {

  constructor() {
    super()
    this.state = {
      lists: []
    }
  }


  render() {
    return (
      <div className="App">
        <div>
          <ListContainer lists={this.state.lists}/>
        </div>
      </div>
    );
  }
}

export default App;
