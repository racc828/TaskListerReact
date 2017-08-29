import React from 'react'

export default class EditList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      listName: this.props.listName
    }
  }

  handleChange = (e) => {
    this.setState({listName: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newListName = this.state.listName
    this.props.editList(newListName)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} id="editListForm">
          <input type="text" name="listName" onChange={this.handleChange} value={this.state.listName}/>
          <button type="submit" className="saveListEdit">Save </button>
        </form>
      </div>
    )
  }

}
