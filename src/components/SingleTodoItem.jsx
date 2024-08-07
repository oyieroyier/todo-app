/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./Checkbox";
import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import PageTitle from "./PageTitle";
import InputField from "./InputField";

const SingleTodoItem = ({ todo, setTodoList, todoList }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);

  function openDialog() {
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }

  function deleteTodo() {
    const updatedTodoList = todoList.filter((item) => item.id !== todo.id);

    setTodoList(updatedTodoList);
  }

  function handleChange(e) {
    setEditedTodo(e.target.value);
  }
  function editTodo(e) {
    e.preventDefault();

    const updatedTodo = {
      ...todo,
      title: editedTodo,
    };

    const updatedTodoList = todoList.map((item) => {
      if (item.id === todo.id) {
        return updatedTodo;
      }
      return item;
    });

    setTodoList(updatedTodoList);
    setShowDialog(false);
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-[#685254] p-4 text-lg md:flex-row lg:items-center">
      <div className="todo-item">
        <Checkbox todo={todo} setTodoList={setTodoList} todoList={todoList} />
        <p className={todo.completed && "completed"}>{todo.title}</p>
      </div>

      <div className="flex-container">
        <PrimaryButton onClick={openDialog}>Edit</PrimaryButton>
        <DangerButton onClick={deleteTodo} text={"Delete"} />
      </div>

      {showDialog && (
        <dialog>
          <div className="flex-container">
            <PageTitle text={"Edit Todo"} />
            <DangerButton onClick={closeDialog} text={"Close"} />
          </div>

          <form onSubmit={editTodo} className="edit-todo">
            <InputField value={editedTodo} onChange={handleChange} />
            <PrimaryButton>Save</PrimaryButton>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default SingleTodoItem;
