/* eslint-disable react/prop-types */

import SingleTodoItem from "./SingleTodoItem";

const TodosContainer = ({ todoList, setTodoList }) => {
  return (
    <div className="todos-container">
      {todoList.map((todo) => (
        <SingleTodoItem
          key={todo.id}
          todo={todo}
          setTodoList={setTodoList}
          todoList={todoList}
        />
      ))}
    </div>
  );
};

export default TodosContainer;
