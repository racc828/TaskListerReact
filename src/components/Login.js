import React from 'react'

export default class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }

  }

  handleChange = (e) => {
    let property = e.target.name
    let value = e.target.value
    this.setState({
      [property]:value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = this.state
    this.props.getUser(user)
    this.props.history.push('main')
  }

  render(){
    return(
      <div className="login-container z-depth-4">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={this.handleChange}/>
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange}/>
          <button type="submit"> Login</button>
        </form>
      </div>
    )
  }

}
