/* eslint-disable react/prop-types */

import SingleTodoItem from "./SingleTodoItem";

const TodosContainer = ({todoList}) => {

  return (
    <div className="todos-container">
      {todoList.map((todo) => (
        <SingleTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosContainer;
