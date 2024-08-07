/* eslint-disable react/prop-types */
import { useState } from "react";
import InputField from "./InputField";
import PrimaryButton from "./PrimaryButton";

const AddTodoForm = ({ todoList, setTodoList }) => {
  const [newTodoItem, setNewTodoItem] = useState("");

  function handleChange(e) {
    setNewTodoItem(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodoList([
      ...todoList,
      { id: crypto.randomUUID(), title: newTodoItem, completed: false },
    ]);

    setNewTodoItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField value={newTodoItem} onChange={handleChange} />
      <PrimaryButton>Add Todo</PrimaryButton>
    </form>
  );
};

export default AddTodoForm;
