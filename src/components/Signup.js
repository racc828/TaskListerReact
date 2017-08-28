import React from 'react'

export default class Signup extends React.Component {

  constructor(){
    super()
    this.state = {
      email: "" ,
      username: "" ,
      password: ""
    }
  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let newuser = {user: this.state}
    this.props.createUser(newuser).then( () => {this.props.history.push('main')} )
  }


  render(){
  return(
    <div className="login-container z-depth-4">
      <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input onChange={this.handleChange} type="email" name="email"/>
        <label>Username</label>
        <input onChange={this.handleChange} type="text" name="username"/>
        <label>Password</label>
        <input  onChange={this.handleChange} type="password" name="password"/>
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  )
}

}
