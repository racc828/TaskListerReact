import React from 'react'

const Options = (props) => {
  return (
    <div>
      <select onChange={props.handleChange}>
          <option>Choose a list</option>
          {props.listOptions.map((option, i) => <option data-id={option.id} key={i}>{option.name}</option> )}
      </select>
    </div>
  )
}

export default Options
