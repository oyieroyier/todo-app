import React from 'react'

function InputField() {
  return (
    <input
    placeholder="Type new Todo here"
    className="input"
    name="text"
    type="text"
    required
  />
  )
}

export default InputField