import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubmitList from './components/SubmitList'
import ListContainer from './components/ListContainer'
import ListsAdapter from './adapters/ListsAdapter'
import UsersAdapter from './adapters/UsersAdapter'
import SessionsAdapter from './adapters/SessionsAdapter'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor() {
    super()
    this.state = {
      lists: [],
      currentUser:{}
    }
  }

  getUser = (user) => {
    SessionsAdapter.getUser(user)
      .then( data => {
        localStorage.setItem('token', data.jwt)
        this.setState({currentUser: data })
      })
}


  renderSignup = () => {
    return (
      <div>
        <Signup />
      </div>
    )
  }

  renderLogin = () => {
    return (
      <div>
        <Login getUser={this.getUser} />
      </div>
    )
  }

  renderUserMain = () => {
    return (
      <div>
        <ListContainer lists={this.state.lists} currentUser={this.state.currentUser.id}/>
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Router>
            <div>
                <Navbar />
                <Route exact path="/" render={this.renderHome}/>
                <Route exact path="/main" render={this.renderUserMain}/>
                <Route exact path="/login" render={this.renderLogin}/>
                <Route exact path="/signup" render={this.renderSignup}/>
                <Route exact path="/settings" render={this.settings}
                />
            </div>
          </Router>
        </div>

      </div>
    );
  }
}

export default App;
