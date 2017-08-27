import React from 'react'

export default class Task extends React.Component {

  deleteTask = () => {
    let name = this.props.task.name
    let description = this.props.task.description
    let id = this.props.task.id
    let listId = this.props.listId
    let priority = this.props.task.priority
    debugger
    this.props.deleteTask(name, description, id, priority, listId)
  }


render() {
  return (
      <div>
        Task: {this.props.task.name}
        <button onClick={this.deleteTask}> Delete Task </button>
      </div>
    )
  }
}
