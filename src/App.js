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

  componentDidMount(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
     }

  getUser = (user) => {
    return SessionsAdapter.getUser(user)
      .then( data => {
        localStorage.setItem('token', data.jwt)
        this.setState({currentUser: data })
      })
    }


    createUser = (user) => {
      return UsersAdapter.createUser(user)
      .then( user => {
        localStorage.setItem('token', user.jwt)
        this.setState({
        currentUser: user
      })
      }
    )
  }

  renderHome = (params) => {
    return (
      <div>
        <h4> Sign up or Login </h4>
        <div className="submit-task submit-form">
          <div className="inner-form-container">
            <Login getUser={this.getUser} history={params.history} />
          </div>
        </div>
        <div className="submit-task submit-form">
          <div className="inner-form-container">
            <Signup createUser={this.createUser} history={params.history} />
          </div>
        </div>
      </div>
    )
  }

  renderUserMain = (props) => {
    return (
      <div>
        <ListContainer history={props.history} lists={this.state.lists} currentUser={this.state.currentUser.id}/>
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Router>
            <div>
                <Route exact path="/" render={this.renderHome}/>
                <Route exact path="/main" render={this.renderUserMain}/>
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
