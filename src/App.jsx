import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import PageTitle from "./components/PageTitle";
import TodosContainer from "./components/TodosContainer";
import { todos } from "./data";

const App = () => {
  const [todoList, setTodoList] = useState(todos);

  return (
    <main>
      <PageTitle text={"My Todo App"} />
      <AddTodoForm setTodoList={setTodoList} todoList={todoList} />
      <TodosContainer todoList={todoList} />
    </main>
  );
};

export default App;
