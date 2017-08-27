import React from 'react'

const Options = (props) => {
  return (
    <div>
      <select>
          {props.listOptions.map((option, i) => <option id={option.id} key={i}>{option.name}</option> )}
      </select>
    </div>
  )
}

export default Options
