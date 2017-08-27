import React from 'react'
import List from './List'
import ListsAdapter from '../adapters/ListsAdapter'
import SubmitList from '../components/SubmitList'
import SubmitTask from '../components/SubmitTask'
import Options from '../components/Options'

export default class ListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      lists: []
    }
  }

  componentDidMount(){
    ListsAdapter.getLists()
      .then( lists => {
        this.setState({lists})
      }) }

    makeList = (listName) => {
      ListsAdapter.makeList(listName)
      .then(data => this.setState({
        lists: [...this.state.lists, data]
      }))
    }

    deleteList = (listId, listName) => {
      ListsAdapter.deleteList(listId, listName)
      .then(newlists => this.setState({
        lists: newlists
      }))
    }

  render() {

    return(
      <div>
        <SubmitList makeList={this.makeList}/>
        <SubmitTask listOptions={this.state.lists} />

        <ul>
          {this.state.lists.map((list, i) => <List deleteList={this.deleteList} listName={list.name} key={i} listId={list.id}/>)}
        </ul>
      </div>
    )
  }

}
