import AddTodoForm from "./components/AddTodoForm";
import PageTitle from "./components/PageTitle";
import Form from "./components/tailwind-demo/Form";
import TodosContainer from "./components/TodosContainer";

const App = () => {
  return (
    <main>
      
      <PageTitle text={"My Todo App"} />
      <AddTodoForm />
      <TodosContainer />

      <Form />
    </main>
  );
};

export default App;
