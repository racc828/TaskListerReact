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
    e.preventDefault()
    let taskData = this.state
    this.props.makeTask(taskData)
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
              <select onChange={this.handleChange} name="priority" required>
                <option value="">Choose a priority</option>
                <option value="1">Do it now (urgent &amp; important)</option>
                <option value="2">Schedule a time to do it (not urgent &amp; important)</option>
                <option value="3">Delegate - who can do it for you? (urgent &amp; not important)</option>
                <option value="4">Eliminate (not urgent &amp; not important)</option>
              </select>
              <button type="submit"><i className="fa fa-plus" ></i>Add</button>
            </form>
          </div>
        </div>
      )
    }
  }
