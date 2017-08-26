import React from 'react'

export default class List extends React.Component {

  constructor() {
    super()
  }

  render() {
  return(
    <div>
      <li>{this.props.listName}</li>
    </div>
  )}
}
