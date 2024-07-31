import React from 'react'
import InputField from './InputField'
import PrimaryButton from './PrimaryButton'

function AddTodoForm() {
  return (
    
    
    <form onSubmit={()=>alert ("Form Has Been Submitted!!")}>
    <InputField />
    <PrimaryButton />

   </form>
  )
}

export default AddTodoForm