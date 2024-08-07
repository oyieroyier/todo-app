/* eslint-disable react/prop-types */
import { useState } from "react";
import Checkbox from "./Checkbox";
import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import PageTitle from "./PageTitle";
import InputField from "./InputField";

const SingleTodoItem = ({ todo }) => {
  const [showDialog, setShowDialog] = useState(false);

  function openDialog() {
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-[#685254] p-4 text-lg md:flex-row lg:items-center">
      <div className="todo-item">
        <Checkbox />
        <p>{todo.title}</p>
      </div>

      <div className="flex-container">
        <PrimaryButton onClick={openDialog}>Edit</PrimaryButton>
        <DangerButton text={"Delete"} />
      </div>

      {showDialog && (
        <dialog>
          <div className="flex-container">
            <PageTitle text={"Edit Todo"} />
            <DangerButton onClick={closeDialog} text={"Close"} />
          </div>

          <form className="edit-todo">
            <InputField />
            <PrimaryButton>Save</PrimaryButton>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default SingleTodoItem;
