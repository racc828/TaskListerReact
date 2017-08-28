import React from 'react'
import List from './List'
import ListsAdapter from '../adapters/ListsAdapter'
import SessionsAdapter from '../adapters/SessionsAdapter'
import SubmitList from '../components/SubmitList'
import SubmitTask from '../components/SubmitTask'
import Options from '../components/Options'

export default class ListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      lists: [],
      currentUser: {}
    }
  }

  componentDidMount(){
    SessionsAdapter.currentUser()
      .then( data => {
        this.setState({
          currentUser: data
        })
      })
      .then( () => {
        ListsAdapter.getLists(this.state.currentUser)
          .then( newlists => {
            this.setState({lists: newlists})
          })
        })
     }

    makeList = (listName, currentUser) => {
      ListsAdapter.makeList(listName, currentUser)
      .then(data => this.setState({
        lists: [...this.state.lists, data]
      }))
    }

    deleteList = (listId, listName, userId) => {
      ListsAdapter.deleteList(listId, listName, userId, this.state.currentUser)
      .then(newlists => this.setState({
        lists: newlists
      }))
    }

    signOut = () => {
      localStorage.token = ""
      this.setState({currentUser: {}})
      this.props.history.push("")
    }

  render() {

    return(
      <div>
        <div className="user-header">
          <span>  Welcome {this.state.currentUser.username} </span>
          <button onClick={this.signOut}> Sign Out </button>
        </div>
        <div className="forms-header">
          <SubmitList makeList={this.makeList} currentUser={this.state.currentUser}/>
          <SubmitTask listOptions={this.state.lists} />
        </div>
        <div className="list-body">
          <ul>
            {this.state.lists.map((list, i) => <List deleteList={this.deleteList} userId={list.user_id} listName={list.name} key={i} listId={list.id}/>)}
          </ul>
        </div>
      </div>
    )
  }

}
