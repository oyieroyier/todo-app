/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingleTodoItem from "./SingleTodoItem";
import { fetchData } from "../fetchData";

const TodosContainer = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setTodoList(data));
  }, [todoList]);

  return (
    <div className="todos-container">
      {todoList.map((todo) => (
        <SingleTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosContainer;
