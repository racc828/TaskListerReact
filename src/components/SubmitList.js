import React from 'react'

export default class SubmitList extends React.Component {

  constructor() {
    super()

    this.state = {
      listName: ""
    }
  }

  handleChange = (e) => {
    let listName = e.target.value
    this.setState({listName})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.makeList(this.state.listName, this.props.currentUser)
  }

  render(){
    return(
      <div className="submit-list submit-form">
        <div className="inner-form-container">
          <form onSubmit={this.handleSubmit}>
            <label>Add a new Item</label>
            <input placeholder="title" type="text" name="listName" onChange={this.handleChange} required/>
            <button type="submit"><i className="fa fa-plus" ></i>Add</button>
          </form>
        </div>
      </div>
    )
  }

}
