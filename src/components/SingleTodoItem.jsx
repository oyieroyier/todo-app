/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";

const SingleTodoItem = ({ todo }) => {
  return (
    <div className="todo">
      <div className="todo-item">
        <Checkbox />
        <p>{todo.title}</p>
      </div>
    </div>
  );
};

export default SingleTodoItem;
