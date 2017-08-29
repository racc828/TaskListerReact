import React from 'react'

export default class EditTask extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: this.props.description,
      priority: this.props.priority,
      list_id: this.props.listId,
      name: this.props.name
    }
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
    let newTaskEdit = this.state
    this.props.editTask(newTaskEdit)
  }

  render() {
    return(
      <div>

        <form onSubmit={this.handleSubmit} id="submitTaskEdit">
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name} required/>
          <input onChange={this.handleChange} type="text" name="description" value={this.state.description} required/>
          <select onChange={this.handleChange} name="priority" value={this.state.priority} required>
            <option value="">Choose a priority</option>
            <option value="1">Do it now (urgent &amp; important)</option>
            <option value="2">Schedule a time to do it (not urgent &amp; important)</option>
            <option value="3">Delegate - who can do it for you? (urgent &amp; not important)</option>
            <option value="4">Eliminate (not urgent &amp; not important)</option>
          </select>
          <button type="submit" className="saveTaskEdit"><i className="fa fa-floppy-o"></i>
          </button>
        </form>
      </div>
    )
  }

}
