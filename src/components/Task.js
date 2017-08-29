import React from 'react'

export default class Task extends React.Component {

  deleteTask = () => {
    let name = this.props.task.name
    let description = this.props.task.description
    let id = this.props.task.id
    let listId = this.props.listId
    let priority = this.props.task.priority
    this.props.deleteTask(name, description, id, priority, listId)
  }


render() {
  return (
      <div className="task-container">
        {this.props.task.name}
        <button onClick={this.deleteTask}><i className="fa fa-trash"></i></button>
        <p>
          description:{this.props.task.description}
        </p>
        <p>
          Priority: {this.props.task.priority}
        </p>
      </div>
    )
  }
}
