import React from 'react'

const Options = (props) => {
  debugger
  return (
    <div>
      <select>
          {props.listOptions.map((option) => <option id={option.id}>{option.name}</option> )}
      </select>
    </div>
  )
}

export default Options
