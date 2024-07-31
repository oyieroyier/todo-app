import { todos } from "../data";
import SingleTodoItem from "./SingleTodoItem";

const TodosContainer = () => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <SingleTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosContainer;
