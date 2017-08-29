import React from 'react'
import EditTask from './EditTask'

export default class Task extends React.Component {

  constructor() {
    super()
    this.state ={
      showEditTaskForm: false
    }
  }

  deleteTask = () => {
    let name = this.props.task.name
    let description = this.props.task.description
    let id = this.props.task.id
    let listId = this.props.listId
    let priority = this.props.task.priority
    this.props.deleteTask(name, description, id, priority, listId)
  }

  editTask = (taskData) => {
    let taskId = this.props.task.id
    this.props.editTask(taskData, taskId)
    this.setState({showEditTaskForm: false})
  }

  showEditTaskForm = () => this.setState({showEditTaskForm: !this.state.showEditTaskForm})


render() {
  return (
      <div className="task-container">
        <button onClick={this.showEditTaskForm}><i className="fa fa-pencil"></i></button>
        <button onClick={this.deleteTask}><i className="fa fa-trash"></i></button>
        { this.state.showEditTaskForm ? <EditTask editTask={this.editTask} name={this.props.task.name} description={this.props.task.description} listId={this.props.listId} priority={this.props.task.priority} /> :
          <div>
            <p>{this.props.task.name}</p>
            <p>description:{this.props.task.description}</p>
            <p>Priority: {this.props.task.priority}</p>
         </div>
        }

      </div>
    )
  }
}
