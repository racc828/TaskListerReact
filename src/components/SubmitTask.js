import React from 'react'

export default class SubmitTask extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      list_id: "",
      description: "",
      priority: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }


  render(){
    return(
      <div>
        <input type="text" name="list_id" onChange={this.handleChange}/>
        <input type="text" name="description" onChange={this.handleChange}/>
        <select name="priority" onChange={this.handleChange}>
          <option>Choose an Option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    )
  }


}
