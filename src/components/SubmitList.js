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
    this.props.makeList(this.state.listName)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="listName" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}
