import React from 'react'

export default class Signup extends React.Component {

  constructor() {
    super()
  }

  render(){
  return(
    <div className="login-container z-depth-4">
      <h1>Sign Up</h1>
      <form>
        <label>Email</label>
        <input type="text" name="email"/>
        <label>Username</label>
        <input type="text" name="username"/>
        <label>Password</label>
        <input type="password" name="password"/>
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  )
}

}
