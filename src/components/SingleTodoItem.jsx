/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";
import PrimaryButton from "./PrimaryButton";

const SingleTodoItem = ({ todo }) => {
  return (
    <div className="flex items-center justify-between border-2 border-[#685254] p-4 text-lg rounded-2xl">
      <div className="todo-item">
        <Checkbox />
        <p>{todo.title}</p>
      </div>
      <div className="flex-container">
        <PrimaryButton>Edit</PrimaryButton>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default SingleTodoItem;
