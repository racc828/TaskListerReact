import React from 'react'
import Options from './Options'
import TasksAdapter from '../adapters/TasksAdapter'

export default class SubmitTask extends React.Component {
  constructor() {
    super()
    this.state = {
      description: "",
      priority: "",
      list_id: "",
      name: ""
    }
  }

  selectIdHandleChange = (e) => {
    let value = parseInt(e.target.options[e.target.selectedIndex].dataset.id)
    this.setState({
      list_id: value
    })
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    console.log(property, value)
    this.setState({
      [property]: value,
    })
  }

  handleSubmit = (e) => {
    let taskData = this.state
    TasksAdapter.makeTask(taskData)
  }

    render() {
      return(
        <div className="submit-task submit-form">
          <div className="inner-form-container">
            <form onSubmit={this.handleSubmit}>
              <label>Choose a list</label>
              <Options listOptions={this.props.listOptions} handleChange={this.selectIdHandleChange}/>
              <label>Task Name</label>
              <input onChange={this.handleChange} type="text" name="name" required/>
              <label>Task Description</label>
              <input onChange={this.handleChange} type="text" name="description" required/>
              <label>Choose Priority</label>
              <select onChange={this.handleChange} name="priority">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )
    }
  }
