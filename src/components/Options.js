import React from 'react'

const Options = (props) => {
  return (
    <div>
      <select onChange={props.handleChange}>
          {props.listOptions.map((option, i) => <option data-id={option.id} key={i}>{option.name}</option> )}
      </select>
    </div>
  )
}

export default Options
