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

    deleteList = () => {
      let listName = this.props.listName
      let listId = this.props.listId
      this.props.deleteList(listId, listName)
    }

    deleteTask = (name, description, id, priority, listId) => {
      TasksAdapter.deleteTask(name, description, id, priority, listId)
      .then( filteredTasks => {
        this.setState({tasks: filteredTasks})
      })
    }


render() {

  return(
    <div className="list-container">
      <li>List:{this.props.listName}</li> <button onClick={this.deleteList}>Delete </button>
      <div> {this.state.tasks.map((task, i) => <Task listId={this.props.listId} task={task} deleteTask={this.deleteTask} key={i} /> )} </div>
    </div>
  )}
}
