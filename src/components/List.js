import React from 'react'
import TasksAdapter from '../adapters/TasksAdapter'
import Task from './Task'

export default class List extends React.Component {

  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    TasksAdapter.getTasks(this.props.listId)
      .then( filteredTasks => {
        this.setState({tasks: filteredTasks})
      })
    }


render() {

  return(
    <div className="list-container">
      <li>List:{this.props.listName}</li>
      <div> {this.state.tasks.map((task, i) => <Task task={task} key={i} /> )} </div>
    </div>
  )}
}
