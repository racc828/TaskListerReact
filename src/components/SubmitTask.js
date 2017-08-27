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
    TasksAdapter.makeTask(taskData)
  }

    render() {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <Options listOptions={this.props.listOptions} handleChange={this.selectIdHandleChange}/>
            <input onChange={this.handleChange} type="text" name="name"/>
            <input onChange={this.handleChange} type="text" name="description"/>
            <select onChange={this.handleChange} name="priority">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    }
  }
